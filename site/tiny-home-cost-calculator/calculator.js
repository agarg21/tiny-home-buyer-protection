const COST_BUCKETS = [
  ["completion", "Completion work beyond the starting amount"],
  ["land", "Land acquisition"],
  ["delivery", "Delivery or transport"],
  ["foundation", "Setup, foundation, pad, anchoring, or blocking"],
  ["sitePrep", "Driveway, grading, drainage, and site preparation"],
  ["water", "Water or well connection"],
  ["wastewater", "Wastewater, septic, or sewer"],
  ["electric", "Electrical service"],
  ["permits", "Permits and inspections"],
  ["professional", "Plans, design, engineering, and surveys"],
  ["taxes", "Taxes, title, registration, or transaction fees"],
  ["other", "Other documented one-time costs"]
];

const BUCKET_LABELS = Object.fromEntries(COST_BUCKETS);
const BUCKET_STATUSES = new Set(["unknown", "amount", "included", "na"]);

const PROJECT_PROMPTS = {
  finished:
    "Ask the seller to mark which delivery, setup, site, utility, permit, tax, warranty, and correction costs are included in the written quote.",
  shell:
    "Ask who owns interior completion, plumbing, electrical, HVAC, appliances, certification, delivery, setup, and correction work after the shell or kit arrives.",
  diy:
    "List materials, trailer or foundation, tools, professional trades, certification, delivery, permits, and work still outside the working build estimate.",
  used:
    "Ask for title or registration, certification, condition and repair records, transport dimensions, delivery, setup, utility, and destination requirements.",
  foundation:
    "Ask the designer or contractor to separate structure, plans, engineering, site work, utility connections, permits, inspections, corrections, and owner-supplied items.",
  park:
    "Ask the dealer and destination property to separate unit price, taxes or registration, delivery, setup, utility connection, lot rent, insurance, and occupancy restrictions.",
  unsure:
    "Ask the seller to identify exactly what is being sold: finished home, shell, kit, used unit, park model, RV-style product, or permitted foundation project."
};

const PROJECT_LABELS = {
  finished: "Finished home / seller or builder quote",
  shell: "Shell or kit to complete",
  diy: "DIY or owner-builder estimate",
  used: "Used tiny home",
  foundation: "Foundation home or ADU project",
  park: "Park model or RV-style product",
  unsure: "Project type still unclear"
};

const STARTING_LABELS = {
  quote: "Seller or builder quote",
  estimate: "Itemized build estimate"
};

function bucketStatusKey(name) {
  return name === "land" ? "landCostStatus" : `${name}Status`;
}

function bucketAmountField(name) {
  return name === "sitePrep" ? "site-prep" : name;
}

function bucketStatusField(name) {
  if (name === "land") return "land-cost-status";
  return `${bucketAmountField(name)}-status`;
}

function parseNumber(raw, minimum = 0) {
  const text = raw === null || raw === undefined ? "" : String(raw).trim();
  if (text === "") return { known: false, valid: true, value: null };

  const value = Number(text);
  if (!Number.isFinite(value) || value < minimum) {
    return { known: true, valid: false, value: null };
  }

  return { known: true, valid: true, value };
}

function parseBucket(raw, name) {
  const statusKey = bucketStatusKey(name);
  const status = BUCKET_STATUSES.has(raw[statusKey])
    ? raw[statusKey]
    : "unknown";
  const amount = parseNumber(raw[name]);
  const valid = status !== "amount" || (amount.known && amount.valid);

  return {
    name,
    label: BUCKET_LABELS[name],
    status,
    amount,
    valid,
    resolved: status !== "unknown" && valid,
    value: status === "amount" && valid ? amount.value : 0
  };
}

export function monthlyPayment(principal, annualRate, years) {
  if (principal < 0 || annualRate < 0 || years <= 0) return null;
  if (principal === 0) return 0;

  const months = years * 12;
  const monthlyRate = annualRate / 100 / 12;
  if (monthlyRate === 0) return principal / months;

  return (
    principal *
    (monthlyRate * (1 + monthlyRate) ** months) /
    ((1 + monthlyRate) ** months - 1)
  );
}

export function calculateBudget(raw = {}) {
  const startingAmount = parseNumber(raw.startingAmount);
  const contingency = parseNumber(raw.contingency);
  const insurance = parseNumber(raw.insurance);
  const lotRent = parseNumber(raw.lotRent);
  const loanAmount = parseNumber(raw.loanAmount);
  const interestRate = parseNumber(raw.interestRate);
  const loanTerm = parseNumber(raw.loanTerm, 1);
  const buckets = COST_BUCKETS.map(([name]) => parseBucket(raw, name));

  const invalidFields = [];
  if (!startingAmount.valid) invalidFields.push("starting-amount");
  if (!contingency.valid) invalidFields.push("contingency");
  if (!insurance.valid) invalidFields.push("insurance");
  if (!lotRent.valid) invalidFields.push("lot-rent");
  if (!loanAmount.valid) invalidFields.push("loan-amount");
  if (!interestRate.valid) invalidFields.push("interest-rate");
  if (!loanTerm.valid) invalidFields.push("loan-term");
  for (const bucket of buckets) {
    if (!bucket.valid) invalidFields.push(bucketAmountField(bucket.name));
  }

  if (invalidFields.length) {
    return {
      status: "invalid",
      invalidFields,
      warnings: [
        "Choose a bucket status before entering its amount. Use zero or a positive number, and at least one year for a loan term."
      ]
    };
  }

  const startingMode = STARTING_LABELS[raw.startingMode] ? raw.startingMode : "";
  const projectType = PROJECT_PROMPTS[raw.projectType] ? raw.projectType : "";
  const landStatus = ["buying", "owned", "renting", "unknown"].includes(raw.landStatus)
    ? raw.landStatus
    : "";
  const landBucket = buckets.find((bucket) => bucket.name === "land");

  if (landStatus === "owned" || landStatus === "renting") {
    landBucket.status = "na";
    landBucket.resolved = true;
    landBucket.value = 0;
  }

  const anyProjectAmount =
    startingAmount.known ||
    buckets.some((bucket) => bucket.status === "amount" && bucket.amount.known);
  const financingStarted =
    loanAmount.known || interestRate.known || loanTerm.known;
  const applicableLotRentKnown = landStatus === "renting" && lotRent.known;
  const anyMeaningfulAmount =
    anyProjectAmount ||
    financingStarted ||
    insurance.known ||
    applicableLotRentKnown;

  if (!anyMeaningfulAmount) {
    return {
      status: "blank",
      invalidFields: [],
      warnings: [
        "Add a seller quote, known project cost, financing scenario, insurance amount, or applicable lot rent before calculating."
      ]
    };
  }

  const unresolved = buckets.filter((bucket) => !bucket.resolved);
  const included = buckets
    .filter((bucket) => bucket.status === "included")
    .map((bucket) => bucket.label);
  const notApplicable = buckets
    .filter((bucket) => bucket.status === "na")
    .map((bucket) => bucket.label);
  const enteredBuckets = buckets
    .filter((bucket) => bucket.status === "amount")
    .map((bucket) => ({
      label: bucket.label,
      value: bucket.value
    }));

  const warnings = [];
  if (!startingMode) warnings.push("Choose whether the starting amount is a seller quote or an itemized build estimate.");
  if (!startingAmount.known) warnings.push("The starting quote or build estimate is blank.");
  if (!projectType) warnings.push("Choose the project type so the result can show the right written-scope question.");
  if (!landStatus) {
    warnings.push("Choose the land situation.");
  } else if (landStatus === "unknown") {
    warnings.push("The land situation is not decided. Land purchase or lot rent may change the decision.");
  } else if (landStatus === "renting" && !lotRent.known) {
    warnings.push("Monthly lot or community rent is blank for a rented-space scenario.");
  }

  for (const bucket of unresolved) {
    warnings.push(`${bucket.label}: still unknown.`);
  }

  if (!contingency.known) {
    warnings.push("The planning buffer is blank. Add a percentage or enter 0 deliberately.");
  }

  const financingComplete = loanAmount.known && interestRate.known && loanTerm.known;
  if (financingStarted && !financingComplete) {
    warnings.push("Financing is incomplete. Loan amount, annual rate, and term are all required for a monthly payment.");
  }
  if (!insurance.known) {
    warnings.push("Monthly insurance is blank. Confirm that the structure and intended use are insurable.");
  }

  const startingValue = startingAmount.known ? startingAmount.value : 0;
  const addedCosts = buckets.reduce((total, bucket) => total + bucket.value, 0);
  const enteredOneTimeSubtotal = startingValue + addedCosts;
  const contingencyRate = contingency.known ? contingency.value : 0;
  const contingencyAmount = enteredOneTimeSubtotal * (contingencyRate / 100);
  const planningSubtotal = enteredOneTimeSubtotal + contingencyAmount;
  const requiredCount = buckets.length + 1;
  const resolvedCount =
    buckets.filter((bucket) => bucket.resolved).length +
    (startingAmount.known ? 1 : 0);
  const contextResolved =
    Boolean(startingMode) &&
    Boolean(projectType) &&
    Boolean(landStatus) &&
    landStatus !== "unknown";
  const allMajorResolved =
    unresolved.length === 0 && startingAmount.known && contextResolved;
  const status =
    allMajorResolved && contingency.known && enteredOneTimeSubtotal > 0
      ? "resolved"
      : "partial";

  const payment = financingComplete
    ? monthlyPayment(loanAmount.value, interestRate.value, loanTerm.value)
    : null;
  const knownMonthly =
    (payment ?? 0) +
    (insurance.known ? insurance.value : 0) +
    (applicableLotRentKnown ? lotRent.value : 0);
  const monthlyHasData =
    payment !== null || insurance.known || applicableLotRentKnown;

  if (anyProjectAmount && enteredOneTimeSubtotal === 0) {
    warnings.unshift(
      "Every entered project amount is zero. Keep this partial until written scope supports those values."
    );
  }

  return {
    status,
    invalidFields: [],
    startingMode,
    startingLabel: STARTING_LABELS[startingMode] || "Starting amount",
    projectType,
    projectLabel: PROJECT_LABELS[projectType] || "Project type not selected",
    projectPrompt:
      PROJECT_PROMPTS[projectType] ||
      "Choose a project type to get a written-scope question for the quote or build estimate.",
    landStatus,
    startingKnown: startingAmount.known,
    startingAmount: startingValue,
    hasProjectAmounts: anyProjectAmount,
    addedCosts,
    enteredOneTimeSubtotal,
    contingencyRate,
    contingencyKnown: contingency.known,
    contingencyAmount,
    planningSubtotal,
    resolvedCount,
    requiredCount,
    unresolved: unresolved.map((bucket) => bucket.label),
    included,
    notApplicable,
    enteredBuckets,
    warnings,
    financingStarted,
    financingComplete,
    payment,
    knownMonthly,
    monthlyHasData,
    insuranceKnown: insurance.known,
    insuranceValue: insurance.known ? insurance.value : 0,
    lotRentKnown: applicableLotRentKnown,
    lotRentValue: applicableLotRentKnown ? lotRent.value : 0
  };
}

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2
});

function list(items) {
  return `<ul class="check-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function metric(label, value, note) {
  return `
    <div class="metric-card">
      <span class="metric-label">${label}</span>
      <strong class="metric-value">${value}</strong>
      <p class="metric-note">${note}</p>
    </div>
  `;
}

export function renderBudgetResult(data) {
  if (data.status === "invalid") {
    return `
      <p class="eyebrow">Check the form</p>
      <h2 id="result-title" tabindex="-1">Fix the highlighted input</h2>
      <div class="result-block warning">${list(data.warnings)}</div>
    `;
  }

  if (data.status === "blank") {
    return `
      <p class="eyebrow">Start with one real number</p>
      <h2 id="result-title" tabindex="-1">Add one known amount</h2>
      <p>The calculator will not turn blank fields into a zero-dollar project.</p>
      <div class="empty-state">
        <strong>Good starting points</strong>
        <span>A seller quote, itemized build cost, applicable lot rent, insurance amount, or complete loan scenario.</span>
      </div>
    `;
  }

  const partial = data.status === "partial";
  const title = partial
    ? "Partial budget: important costs are still unknown"
    : "Planning total from your resolved inputs";
  const metrics = [];

  if (data.startingKnown) {
    metrics.push(metric(
      data.startingLabel,
      money.format(data.startingAmount),
      "The user-entered amount used as the comparison anchor."
    ));
  }

  if (data.enteredBuckets.length) {
    metrics.push(metric(
      data.startingKnown ? "Known costs outside it" : "Known outside-cost amounts",
      money.format(data.addedCosts),
      "Only bucket amounts entered separately."
    ));
  }

  if (data.hasProjectAmounts && (partial || !data.contingencyKnown)) {
    metrics.push(
      metric(
        "Known one-time subtotal",
        money.format(data.enteredOneTimeSubtotal),
        "Entered starting amount, when known, plus added costs; unknown values are excluded."
      )
    );
    if (data.contingencyKnown) {
      metrics.push(
      metric(
        "Optional buffer on known costs",
        money.format(data.contingencyAmount),
        `${data.contingencyRate}% editable planning assumption, shown separately.`
      )
      );
    }
  } else if (data.hasProjectAmounts) {
    metrics.push(
      metric(
        "Buffer on entered costs",
        money.format(data.contingencyAmount),
        `${data.contingencyRate}% editable planning assumption.`
      ),
      metric(
        "Entered one-time planning total",
        money.format(data.planningSubtotal),
        "Every major form bucket was resolved; still not a final bid or typical price."
      )
    );
  }

  if (data.financingComplete) {
    metrics.push(
      metric(
        "Calculated loan payment",
        money.format(data.payment),
        "Uses only the entered loan amount, annual rate, and term."
      )
    );
  }

  if (data.monthlyHasData) {
    const landMonthlyResolved =
      data.landStatus === "owned" ||
      data.landStatus === "buying" ||
      (data.landStatus === "renting" && data.lotRentKnown);
    const monthlyComplete =
      data.financingComplete &&
      data.insuranceKnown &&
      landMonthlyResolved;
    metrics.push(
      metric(
        monthlyComplete ? "Entered monthly total" : "Known monthly costs",
        money.format(data.knownMonthly),
        monthlyComplete
          ? "Loan payment plus entered insurance and applicable lot rent."
          : "Partial monthly sum; blank recurring or financing fields are not zero."
      )
    );
  }

  const counted = [
    ...data.enteredBuckets.map((bucket) => `${bucket.label}: ${money.format(bucket.value)} added`),
    ...data.included.map((label) => `${label}: already covered by the starting amount`),
    ...data.notApplicable.map((label) => `${label}: marked not applicable`),
    ...(data.financingComplete
      ? [`Calculated loan payment: ${money.format(data.payment)} per month`]
      : []),
    ...(data.insuranceKnown
      ? [`Entered insurance: ${money.format(data.insuranceValue)} per month`]
      : []),
    ...(data.lotRentKnown
      ? [`Entered lot or community rent: ${money.format(data.lotRentValue)} per month`]
      : [])
  ];

  return `
    <p class="eyebrow">${partial ? "Incomplete scenario" : "Resolved-input scenario"}</p>
    <h2 id="result-title" tabindex="-1">${title}</h2>
    <p>${data.resolvedCount} of ${data.requiredCount} major one-time categories are resolved. Unknown, added amount, already covered, and not applicable remain separate states.</p>

    <div class="result-block warning">
      <h3>${partial ? "Resolve these before trusting the subtotal" : "Keep these verification limits"}</h3>
      ${list(data.warnings.length ? data.warnings : [
        "No major form bucket is unknown, but written quotes, permits, site conditions, corrections, and change orders can still alter the project."
      ])}
    </div>

    <div class="result-block">
      <h3>Next written question for this path</h3>
      <p><strong>${data.projectLabel}:</strong> ${data.projectPrompt}</p>
    </div>

    <div class="metric-grid">${metrics.join("")}</div>

    <div class="result-block">
      <h3>What this result counted</h3>
      ${list(counted.length ? counted : ["No outside-cost bucket has been resolved yet."])}
    </div>

    <div class="result-block">
      <h3>What this arithmetic means</h3>
      <ul class="check-list">
        <li>Unknown buckets are not included in the subtotal.</li>
        <li>The planning buffer applies only to the one-time amounts entered.</li>
        <li>This result is not a national average, typical or complete price, bid, appraisal, approval, or affordability decision.</li>
      </ul>
    </div>
  `;
}

function formData(form) {
  const data = {
    startingMode: form.elements["starting-mode"].value,
    projectType: form.elements["project-type"].value,
    startingAmount: form.elements["starting-amount"].value,
    landStatus: form.elements["land-status"].value,
    insurance: form.elements.insurance.value,
    lotRent: form.elements["lot-rent"].value,
    loanAmount: form.elements["loan-amount"].value,
    interestRate: form.elements["interest-rate"].value,
    loanTerm: form.elements["loan-term"].value,
    contingency: form.elements.contingency.value
  };

  for (const [name] of COST_BUCKETS) {
    data[bucketStatusKey(name)] = form.elements[bucketStatusField(name)].value;
    data[name] = form.elements[bucketAmountField(name)].value;
  }

  return data;
}

function syncCostLine(form, name) {
  const status = form.elements[bucketStatusField(name)].value;
  const amount = form.elements[bucketAmountField(name)];
  amount.disabled = status !== "amount";
  amount.required = status === "amount";
  if (status !== "amount") amount.value = "";
}

export function syncLandLine(form) {
  const landStatus = form.elements["land-status"].value;
  const status = form.elements["land-cost-status"];
  const lotRent = form.elements["lot-rent"];
  const locked = landStatus === "owned" || landStatus === "renting";

  status.disabled = locked;
  if (locked) {
    status.dataset.autoLocked = "true";
    status.value = "na";
  } else if (status.dataset.autoLocked === "true") {
    status.value = "unknown";
    delete status.dataset.autoLocked;
  }
  syncCostLine(form, "land");

  lotRent.disabled = landStatus !== "renting";
  if (lotRent.disabled) lotRent.value = "";
}

export function initializeCalculator(doc = document) {
  const form = doc.querySelector("#cost-form");
  const result = doc.querySelector("#cost-result");
  if (!form || !result) return;

  for (const [name] of COST_BUCKETS) {
    form.elements[bucketStatusField(name)].addEventListener("change", () => {
      syncCostLine(form, name);
    });
    syncCostLine(form, name);
  }

  form.elements["land-status"].addEventListener("change", () => syncLandLine(form));
  syncLandLine(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = calculateBudget(formData(form));
    result.innerHTML = renderBudgetResult(data);

    if (data.status === "invalid" && data.invalidFields.length) {
      form.elements[data.invalidFields[0]]?.focus();
      return;
    }

    result.querySelector("#result-title")?.focus();
  });
}

if (typeof document !== "undefined") initializeCalculator(document);
