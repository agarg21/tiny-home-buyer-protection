export const EVIDENCE_ITEMS = [
  {
    id: "parcel-record",
    group: "Parcel identity and authority",
    label: "Exact parcel/APN and assessor or GIS record",
    critical: true,
    question: "Which assessor or GIS record confirms the exact parcel/APN?",
    limitation: "A parcel record identifies the property and selected recorded attributes; it does not approve a tiny home or replace a survey."
  },
  {
    id: "jurisdiction",
    group: "Parcel identity and authority",
    label: "Controlling government and responsible offices",
    critical: true,
    question: "Is this parcel controlled by an incorporated city, an unincorporated county, or another authority, and which offices answer planning and building questions?",
    limitation: "An office name identifies where to ask; it does not establish the answer for the proposed home and use."
  },
  {
    id: "zoning-path",
    group: "Parcel identity and authority",
    label: "Zoning district, overlays, and written review path",
    critical: false,
    question: "What zoning district and overlays apply, and what written path did the controlling office describe?",
    limitation: "A map label or staff response may omit overlays, site conditions, private restrictions, or later permit review."
  },
  {
    id: "home-use-path",
    group: "Home category and intended use",
    label: "Home category and intended-use path",
    critical: true,
    question: "How will the exact home be classified, and how will the intended primary, accessory, rental, or temporary use be reviewed?",
    limitation: "A category or preliminary path is not final permission, plan approval, inspection, or occupancy authorization."
  },
  {
    id: "private-restrictions",
    group: "Title, restrictions, and access",
    label: "Deed restrictions, covenants, HOA, or architectural review",
    critical: false,
    question: "Which recorded restrictions, covenants, HOA rules, or design approvals affect the project?",
    limitation: "A title or HOA document may require interpretation and does not answer public zoning or building rules."
  },
  {
    id: "legal-access",
    group: "Title, restrictions, and access",
    label: "Legal access, recorded easements, frontage, and road maintenance",
    critical: true,
    question: "What recorded evidence establishes legal access, usable frontage, easements, and road-maintenance responsibility?",
    limitation: "Recorded access does not prove that delivery, emergency vehicles, utilities, or construction equipment can physically use the route."
  },
  {
    id: "survey-boundaries",
    group: "Title, restrictions, and access",
    label: "Survey, boundaries, encroachments, and usable area",
    critical: false,
    question: "Is a current survey or qualified boundary/site review needed before relying on the advertised acreage or usable area?",
    limitation: "A listing map, tax map, or acreage figure is not a boundary survey or a buildable-area determination."
  },
  {
    id: "wastewater",
    group: "Water and wastewater",
    label: "Sewer or septic path and local health requirements",
    critical: true,
    question: "What written sewer or septic path applies, and which inspection, design, soil, or health review is still required?",
    limitation: "A prior perc statement, nearby sewer, or existing record does not guarantee capacity, connection, design acceptance, or a permit."
  },
  {
    id: "water",
    group: "Water and wastewater",
    label: "Public water service or private well path",
    critical: false,
    question: "Which provider or qualified source confirms water availability, connection requirements, or the private-well path?",
    limitation: "A nearby line or neighboring well does not guarantee service, pressure, capacity, water quality, or approval."
  },
  {
    id: "electric",
    group: "Utilities and site constraints",
    label: "Electric and other intended utility service",
    critical: false,
    question: "Which utility confirms service availability, extension responsibility, and unresolved site work?",
    limitation: "Utilities described as nearby may still require easements, extensions, upgrades, deposits, or site-specific design."
  },
  {
    id: "flood",
    group: "Utilities and site constraints",
    label: "Flood-hazard screening and local floodplain review",
    critical: false,
    question: "What does the FEMA screen show, and what local or site-specific flood review remains?",
    limitation: "A FEMA map is a screening source; it does not establish site elevation, drainage behavior, insurance terms, or permit approval."
  },
  {
    id: "soil",
    group: "Utilities and site constraints",
    label: "Soil screening and site-specific evaluation",
    critical: false,
    question: "What does the NRCS soil screen indicate, and which site-specific engineering or wastewater evaluation remains?",
    limitation: "Soil-survey data is generalized and does not replace field testing, engineering, septic design, or local acceptance."
  },
  {
    id: "wetlands",
    group: "Utilities and site constraints",
    label: "Wetlands screening and regulatory follow-up",
    critical: false,
    question: "What does the FWS wetlands screen indicate, and which regulatory or professional determination remains?",
    limitation: "The Wetlands Mapper is biological screening data and does not establish regulatory jurisdiction or a development boundary."
  },
  {
    id: "site-constraints",
    group: "Utilities and site constraints",
    label: "Slope, drainage, vegetation, wildfire, and environmental constraints",
    critical: false,
    question: "Which material site constraints need local records, inspection, design, or qualified professional review?",
    limitation: "Desktop records and visual impressions cannot establish grading, drainage, fire, environmental, or engineering feasibility."
  },
  {
    id: "delivery-fire-access",
    group: "Utilities and site constraints",
    label: "Delivery route, setup area, and emergency access",
    critical: false,
    question: "Can the intended unit, crane or setup equipment, and emergency vehicles use the route and site under the applicable requirements?",
    limitation: "Legal road access does not prove turning clearance, bridge capacity, overhead clearance, setup space, or fire-department acceptance."
  }
];

const VALID_STATES = new Set(["unknown", "claim", "source", "conflict"]);
const MONEY_STAGES = new Set(["offer", "contract"]);

const CONTEXT_LABELS = {
  jurisdictionKnown: {
    known: "Controlling government identified",
    unknown: "Controlling government still unknown"
  },
  homeCategory: {
    foundation: "Foundation dwelling",
    thow: "Movable tiny house / THOW",
    manufactured: "Manufactured home",
    park: "Park model / RV",
    adu: "ADU",
    unresolved: "Home category unresolved"
  },
  intendedUse: {
    primary: "Primary dwelling",
    accessory: "Accessory dwelling",
    temporary: "Temporary / RV use",
    rental: "Rental use",
    unresolved: "Intended use unresolved"
  },
  parcelStage: {
    browsing: "Browsing land",
    specific: "Specific parcel under consideration",
    offer: "Offer drafted or earnest money approaching",
    contract: "Under contract"
  }
};

function clean(value) {
  return value === null || value === undefined ? "" : String(value).trim();
}

export function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function contextLabel(field, value) {
  return CONTEXT_LABELS[field]?.[value] || "Not selected";
}

function normalizeEntry(raw = {}, item) {
  const state = VALID_STATES.has(raw.state) ? raw.state : "unknown";
  return {
    ...item,
    state,
    source: clean(raw.source),
    checkedDate: clean(raw.checkedDate),
    notes: clean(raw.notes)
  };
}

function hasRetainedSource(entry) {
  return entry.state === "source" && Boolean(entry.source);
}

function unresolvedQuestion(entry) {
  if (entry.state === "source" && !entry.source) {
    return `Add the retained source or document reference for ${entry.label.toLowerCase()} before treating it as evidence.`;
  }
  if (entry.state === "claim") {
    return `Replace the claim about ${entry.label.toLowerCase()} with retained written evidence.`;
  }
  if (entry.state === "conflict") {
    return `Resolve the conflicting evidence about ${entry.label.toLowerCase()} with the controlling source or qualified reviewer.`;
  }
  return entry.question;
}

export function evaluateLandCheck(raw = {}) {
  const entries = EVIDENCE_ITEMS.map((item) =>
    normalizeEntry(raw.evidence?.[item.id], item)
  );
  const parcelLabel = clean(raw.parcelLabel);
  const jurisdictionKnown = clean(raw.jurisdictionKnown);
  const homeCategory = clean(raw.homeCategory);
  const intendedUse = clean(raw.intendedUse);
  const parcelStage = clean(raw.parcelStage);
  const generalNotes = clean(raw.generalNotes);

  const started = Boolean(
    parcelLabel || jurisdictionKnown || homeCategory || intendedUse || parcelStage ||
    generalNotes || entries.some((entry) =>
      entry.state !== "unknown" || entry.source || entry.checkedDate || entry.notes
    )
  );

  if (!started) {
    return {
      status: "blank",
      stop: [],
      investigate: [],
      recorded: [],
      entries,
      context: {},
      parcelLabel: "",
      generalNotes: ""
    };
  }

  const moneyDeadline = MONEY_STAGES.has(parcelStage);
  const contextIssues = [];
  if (jurisdictionKnown !== "known") {
    contextIssues.push("Identify the incorporated city, unincorporated county, or other government that controls the parcel.");
  }
  if (!homeCategory || homeCategory === "unresolved") {
    contextIssues.push("Resolve how the exact home is classified before relying on a parcel answer.");
  }
  if (!intendedUse || intendedUse === "unresolved") {
    contextIssues.push("State the intended primary, accessory, rental, or temporary use for local review.");
  }
  if (!parcelStage) {
    contextIssues.push("Choose the parcel stage so money-deadline issues can be ordered correctly.");
  }

  const criticalUnresolved = entries.filter(
    (entry) => entry.critical && !hasRetainedSource(entry)
  );
  const otherUnresolved = entries.filter(
    (entry) => !entry.critical && !hasRetainedSource(entry)
  );
  const recorded = entries.filter(hasRetainedSource);
  const stop = [];
  const investigate = [];

  if (moneyDeadline) {
    stop.push(...contextIssues);
    stop.push(...criticalUnresolved.map(unresolvedQuestion));
    investigate.push(...otherUnresolved.map(unresolvedQuestion));
  } else {
    investigate.push(...contextIssues);
    investigate.push(...criticalUnresolved.map(unresolvedQuestion));
    investigate.push(...otherUnresolved.map(unresolvedQuestion));
  }

  return {
    status: "partial",
    moneyDeadline,
    parcelLabel,
    generalNotes,
    context: {
      jurisdiction: contextLabel("jurisdictionKnown", jurisdictionKnown),
      homeCategory: contextLabel("homeCategory", homeCategory),
      intendedUse: contextLabel("intendedUse", intendedUse),
      parcelStage: contextLabel("parcelStage", parcelStage)
    },
    stop,
    investigate,
    recorded,
    entries,
    counts: {
      stop: stop.length,
      investigate: investigate.length,
      recorded: recorded.length,
      claim: entries.filter((entry) => entry.state === "claim").length,
      conflict: entries.filter((entry) => entry.state === "conflict").length
    }
  };
}

function renderList(items, emptyText) {
  if (!items.length) return `<p class="bucket-empty">${escapeHtml(emptyText)}</p>`;
  return `<ul class="check-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function renderEntryLedger(entries) {
  return entries.map((entry) => {
    const renderedState = entry.state === "source" && !entry.source
      ? "source-missing"
      : entry.state;
    const stateLabel = {
      unknown: "Unknown",
      claim: "Claim only",
      source: "Source saved",
      "source-missing": "Source saved - add reference",
      conflict: "Conflict"
    }[renderedState];
    const details = [
      entry.source ? `<dt>Source or reference</dt><dd>${escapeHtml(entry.source)}</dd>` : "",
      entry.checkedDate ? `<dt>Checked</dt><dd>${escapeHtml(entry.checkedDate)}</dd>` : "",
      entry.notes ? `<dt>Notes</dt><dd>${escapeHtml(entry.notes)}</dd>` : ""
    ].filter(Boolean).join("");

    return `
      <article class="evidence-summary state-${renderedState}">
        <div class="evidence-summary-heading">
          <h4>${escapeHtml(entry.label)}</h4>
          <span>${stateLabel}</span>
        </div>
        ${details ? `<dl>${details}</dl>` : ""}
        <p><strong>Still does not prove:</strong> ${escapeHtml(entry.limitation)}</p>
      </article>
    `;
  }).join("");
}

export function renderLandResult(data, now = new Date()) {
  if (data.status === "blank") {
    return `
      <p class="eyebrow">Your parcel file</p>
      <h2 id="land-result-title" tabindex="-1">Start with the project context</h2>
      <p>Select the parcel stage, controlling government status, home category, or intended use. A blank worksheet does not produce a parcel verdict.</p>
      <div class="empty-state">
        <strong>No score and no hidden assumption</strong>
        <span>The worksheet will order missing evidence only after you begin.</span>
      </div>
    `;
  }

  const timestamp = now.toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short"
  });
  const title = data.stop.length
    ? "Stop before money becomes harder to recover"
    : "Your unresolved parcel evidence file";

  return `
    <div class="print-file" data-print-timestamp="${escapeHtml(timestamp)}">
      <p class="eyebrow">Your parcel file</p>
      <h2 id="land-result-title" tabindex="-1">${title}</h2>
      <p>This is an evidence organizer, not a legal, zoning, approval, or buildability result.</p>

      <dl class="parcel-context-summary">
        <div><dt>Parcel label</dt><dd>${escapeHtml(data.parcelLabel || "Not provided")}</dd></div>
        <div><dt>Controlling government</dt><dd>${escapeHtml(data.context.jurisdiction)}</dd></div>
        <div><dt>Home category</dt><dd>${escapeHtml(data.context.homeCategory)}</dd></div>
        <div><dt>Intended use</dt><dd>${escapeHtml(data.context.intendedUse)}</dd></div>
        <div><dt>Decision stage</dt><dd>${escapeHtml(data.context.parcelStage)}</dd></div>
        <div><dt>Generated</dt><dd>${escapeHtml(timestamp)}</dd></div>
      </dl>

      <section class="result-bucket bucket-stop" aria-labelledby="stop-bucket-title">
        <h3 id="stop-bucket-title">Stop before money is at risk <span>${data.counts.stop}</span></h3>
        ${renderList(data.stop, "No critical money-deadline item is in this bucket. This is not parcel approval.")}
      </section>

      <section class="result-bucket bucket-investigate" aria-labelledby="investigate-bucket-title">
        <h3 id="investigate-bucket-title">Investigate before relying <span>${data.counts.investigate}</span></h3>
        ${renderList(data.investigate, "No unresolved item is currently listed. Recheck source limits and local requirements before relying.")}
      </section>

      <section class="result-bucket bucket-recorded" aria-labelledby="recorded-bucket-title">
        <h3 id="recorded-bucket-title">Evidence recorded <span>${data.counts.recorded}</span></h3>
        ${renderList(
          data.recorded.map((entry) => `${entry.label}: source retained. ${entry.limitation}`),
          "No row is marked Source saved yet."
        )}
      </section>

      ${data.generalNotes ? `
        <section class="result-block">
          <h3>General notes</h3>
          <p class="preserve-lines">${escapeHtml(data.generalNotes)}</p>
        </section>
      ` : ""}

      <details class="evidence-ledger" open>
        <summary>Evidence ledger and source limits</summary>
        <div class="evidence-summary-grid">${renderEntryLedger(data.entries)}</div>
      </details>

      <p class="print-source">Created at https://tinyhomeclarity.com/buying-land-for-a-tiny-house/. Information stays in this browser tab unless you print it.</p>
    </div>
    <div class="result-actions no-print">
      <button id="print-land-file" class="button primary" type="button">Print this evidence file</button>
      <a class="button secondary" href="#documents">See documents and offices</a>
    </div>
  `;
}

function readForm(form) {
  const value = (name) => form.elements.namedItem(name)?.value || "";
  const evidence = {};

  for (const item of EVIDENCE_ITEMS) {
    evidence[item.id] = {
      state: value(`${item.id}-state`),
      source: value(`${item.id}-source`),
      checkedDate: value(`${item.id}-date`),
      notes: value(`${item.id}-notes`)
    };
  }

  return {
    parcelLabel: value("parcel-label"),
    jurisdictionKnown: value("jurisdiction-known"),
    homeCategory: value("home-category"),
    intendedUse: value("intended-use"),
    parcelStage: value("parcel-stage"),
    generalNotes: value("general-notes"),
    evidence
  };
}

export function renderEvidenceWorksheet(items = EVIDENCE_ITEMS) {
  const groups = new Map();
  for (const item of items) {
    if (!groups.has(item.group)) groups.set(item.group, []);
    groups.get(item.group).push(item);
  }

  return [...groups.entries()].map(([group, groupItems], groupIndex) => `
    <details class="evidence-group" ${groupIndex === 0 ? "open" : ""}>
      <summary>${escapeHtml(group)} <span>${groupItems.length} checks</span></summary>
      <div class="evidence-group-body">
        ${groupItems.map((item) => `
          <fieldset class="evidence-row" data-item="${item.id}" data-state="unknown">
            <legend>${escapeHtml(item.label)}${item.critical ? " <span>critical before a money deadline</span>" : ""}</legend>
            <p class="evidence-question">${escapeHtml(item.question)}</p>
            <div class="evidence-input-grid">
              <div class="field-row">
                <label for="${item.id}-state">Evidence state</label>
                <select id="${item.id}-state" name="${item.id}-state" data-evidence-state>
                  <option value="unknown">Unknown</option>
                  <option value="claim">Claim only</option>
                  <option value="source">Source saved</option>
                  <option value="conflict">Conflict</option>
                </select>
              </div>
              <div class="field-row evidence-source-field">
                <label for="${item.id}-source">Source, document, or claim reference</label>
                <input id="${item.id}-source" name="${item.id}-source" type="text" maxlength="180" autocomplete="off" placeholder="Example: county GIS record or seller email">
              </div>
              <div class="field-row">
                <label for="${item.id}-date">Checked or received</label>
                <input id="${item.id}-date" name="${item.id}-date" type="date">
              </div>
              <div class="field-row evidence-notes-field">
                <label for="${item.id}-notes">Notes or conflict</label>
                <textarea id="${item.id}-notes" name="${item.id}-notes" rows="2" maxlength="500" placeholder="Record the exact wording, missing document, or disagreement."></textarea>
              </div>
            </div>
            <p class="source-limit"><strong>Does not prove:</strong> ${escapeHtml(item.limitation)}</p>
          </fieldset>
        `).join("")}
      </div>
    </details>
  `).join("");
}

function updateRowState(control) {
  const row = control.closest(".evidence-row");
  if (!row) return;
  const select = row.querySelector("[data-evidence-state]");
  const source = row.querySelector('[name$="-source"]');
  row.dataset.state = select.value === "source" && !source.value.trim()
    ? "source-missing"
    : select.value;
}

function setupLandChecker() {
  const form = document.querySelector("#land-check-form");
  const result = document.querySelector("#land-result");
  if (!form || !result) return;

  const worksheet = form.querySelector("#evidence-groups");
  if (worksheet) worksheet.innerHTML = renderEvidenceWorksheet();

  const render = ({ focus = false } = {}) => {
    const data = evaluateLandCheck(readForm(form));
    result.innerHTML = renderLandResult(data);
    result.classList.toggle("has-result", data.status !== "blank");
    if (focus) result.querySelector("#land-result-title")?.focus();
  };

  form.addEventListener("input", (event) => {
    if (event.target.matches('[data-evidence-state], [name$="-source"]')) {
      updateRowState(event.target);
    }
    render();
  });
  form.addEventListener("change", (event) => {
    if (event.target.matches("[data-evidence-state]")) updateRowState(event.target);
    render();
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    render({ focus: true });
  });
  form.addEventListener("reset", () => {
    window.setTimeout(() => {
      form.querySelectorAll("[data-evidence-state]").forEach(updateRowState);
      render();
    }, 0);
  });
  result.addEventListener("click", (event) => {
    if (event.target.closest("#print-land-file")) window.print();
  });

  form.querySelectorAll("[data-evidence-state]").forEach(updateRowState);
  render();
}

if (typeof document !== "undefined") setupLandChecker();
