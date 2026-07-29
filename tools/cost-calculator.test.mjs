import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

import {
  calculateBudget,
  monthlyPayment,
  renderBudgetResult,
  syncLandLine
} from "../site/tiny-home-cost-calculator/calculator.js";

const bucketNames = [
  "completion",
  "land",
  "delivery",
  "foundation",
  "sitePrep",
  "water",
  "wastewater",
  "electric",
  "permits",
  "professional",
  "taxes",
  "other"
];

const resolvedBase = {
  startingMode: "quote",
  projectType: "finished",
  startingAmount: "85000",
  landStatus: "owned",
  insurance: "125",
  lotRent: "0",
  loanAmount: "60000",
  interestRate: "0",
  loanTerm: "10",
  contingency: "20"
};

for (const name of bucketNames) {
  resolvedBase[name === "land" ? "landCostStatus" : `${name}Status`] = "na";
  resolvedBase[name] = "";
}

Object.assign(resolvedBase, {
  completionStatus: "included",
  deliveryStatus: "amount",
  delivery: "0",
  foundationStatus: "amount",
  foundation: "5000",
  sitePrepStatus: "amount",
  sitePrep: "3000",
  waterStatus: "amount",
  water: "2500",
  wastewaterStatus: "amount",
  wastewater: "8000",
  electricStatus: "amount",
  electric: "3500",
  permitsStatus: "amount",
  permits: "2000",
  professionalStatus: "amount",
  professional: "2000",
  taxesStatus: "included",
  otherStatus: "na"
});

test("blank input stays neutral and renders no dollar result", () => {
  const result = calculateBudget({ contingency: "20" });
  assert.equal(result.status, "blank");
  assert.doesNotMatch(renderBudgetResult(result), /\$0/);
});

test("quote-only input is partial and never renders an all-in claim", () => {
  const result = calculateBudget({
    startingMode: "quote",
    projectType: "finished",
    startingAmount: "85000",
    landStatus: "unknown",
    contingency: "20"
  });

  assert.equal(result.status, "partial");
  assert.equal(result.planningSubtotal, 102000);
  assert.ok(result.unresolved.includes("Delivery or transport"));
  const html = renderBudgetResult(result);
  assert.match(html, /Known one-time subtotal/);
  assert.match(html, /\$85,000/);
  assert.doesNotMatch(html, /\$102,000/);
  assert.doesNotMatch(html, /all-in/i);
});

test("partial result puts the next written question before metrics", () => {
  const result = calculateBudget({
    startingMode: "quote",
    projectType: "shell",
    startingAmount: "85250.75",
    landStatus: "unknown",
    contingency: "20"
  });
  const html = renderBudgetResult(result);

  assert.ok(
    html.indexOf("Next written question for this path") <
      html.indexOf("Known one-time subtotal")
  );
});

test("known outside cost does not invent a zero starting amount", () => {
  const result = calculateBudget({
    startingMode: "quote",
    projectType: "shell",
    startingAmount: "",
    landStatus: "owned",
    deliveryStatus: "amount",
    delivery: "123.45",
    contingency: "20"
  });
  const html = renderBudgetResult(result);

  assert.equal(result.status, "partial");
  assert.equal(result.startingKnown, false);
  assert.match(html, /Known outside-cost amounts/);
  assert.match(html, /\$123\.45/);
  assert.doesNotMatch(html, /user-entered amount used as the comparison anchor/);
  assert.doesNotMatch(html, /\$0\.00/);
});

test("blank and typed-zero contingency remain visibly distinct", () => {
  const blank = calculateBudget({
    startingMode: "quote",
    projectType: "finished",
    startingAmount: "85000",
    landStatus: "owned",
    contingency: ""
  });
  const blankHtml = renderBudgetResult(blank);
  assert.equal(blank.status, "partial");
  assert.equal(blank.contingencyKnown, false);
  assert.match(blankHtml, /planning buffer is blank/i);
  assert.doesNotMatch(blankHtml, /Optional buffer on known costs/);
  assert.doesNotMatch(blankHtml, /0% editable planning assumption/);

  const zero = calculateBudget({
    startingMode: "quote",
    projectType: "finished",
    startingAmount: "85000",
    landStatus: "owned",
    contingency: "0"
  });
  const zeroHtml = renderBudgetResult(zero);
  assert.equal(zero.contingencyKnown, true);
  assert.match(zeroHtml, /Optional buffer on known costs/);
  assert.match(zeroHtml, /\$0\.00/);
  assert.match(zeroHtml, /0% editable planning assumption/);
});

test("complete financing-only input renders a partial monthly scenario", () => {
  const result = calculateBudget({
    startingMode: "quote",
    projectType: "shell",
    startingAmount: "",
    landStatus: "owned",
    contingency: "20",
    loanAmount: "60000.25",
    interestRate: "7.25",
    loanTerm: "10",
    insurance: "127.55"
  });
  const html = renderBudgetResult(result);

  assert.equal(result.status, "partial");
  assert.equal(result.hasProjectAmounts, false);
  assert.match(html, /Calculated loan payment/);
  assert.match(html, /\$704\.41/);
  assert.match(html, /Entered monthly total/);
  assert.match(html, /\$831\.96/);
  assert.doesNotMatch(html, /Known one-time subtotal/);
  assert.doesNotMatch(html, /user-entered amount used as the comparison anchor/);
});

test("rendered exact inputs preserve cents through every visible trace", () => {
  const result = calculateBudget({
    startingMode: "quote",
    projectType: "shell",
    startingAmount: "85250.75",
    landStatus: "renting",
    deliveryStatus: "amount",
    delivery: "123.45",
    contingency: "20",
    loanAmount: "60000.25",
    interestRate: "7.25",
    loanTerm: "10",
    insurance: "127.55",
    lotRent: "912.34"
  });
  const html = renderBudgetResult(result);

  assert.match(html, /\$85,250\.75/);
  assert.match(html, /\$123\.45/);
  assert.match(html, /\$85,374\.20/);
  assert.match(html, /\$17,074\.84/);
  assert.match(html, /\$704\.41/);
  assert.match(html, /Entered insurance: \$127\.55 per month/);
  assert.match(html, /Entered lot or community rent: \$912\.34 per month/);
  assert.match(html, /\$1,744\.30/);
});

test("unknown, amount zero, included, and not applicable remain distinct", () => {
  const result = calculateBudget({
    ...resolvedBase,
    deliveryStatus: "amount",
    delivery: "0",
    foundationStatus: "included",
    foundation: "",
    sitePrepStatus: "na",
    sitePrep: "",
    waterStatus: "unknown",
    water: ""
  });

  assert.equal(result.status, "partial");
  assert.ok(!result.unresolved.includes("Delivery or transport"));
  assert.ok(result.included.includes("Setup, foundation, pad, anchoring, or blocking"));
  assert.ok(result.notApplicable.includes("Driveway, grading, drainage, and site preparation"));
  assert.ok(result.unresolved.includes("Water or well connection"));
});

test("resolved one-time inputs return an entered planning total", () => {
  const result = calculateBudget(resolvedBase);

  assert.equal(result.status, "resolved");
  assert.equal(result.resolvedCount, result.requiredCount);
  assert.equal(result.enteredOneTimeSubtotal, 111000);
  assert.equal(result.contingencyAmount, 22200);
  assert.equal(result.planningSubtotal, 133200);
  assert.match(renderBudgetResult(result), /Planning total from your resolved inputs/);
});

test("land-owned and rented-space scenarios resolve one-time land separately", () => {
  const owned = calculateBudget({
    ...resolvedBase,
    landStatus: "owned",
    landCostStatus: "amount",
    land: "50000"
  });
  assert.equal(owned.enteredOneTimeSubtotal, 111000);

  const renting = calculateBudget({
    ...resolvedBase,
    landStatus: "renting",
    lotRent: ""
  });
  assert.equal(renting.status, "resolved");
  assert.ok(renting.warnings.some((warning) => warning.includes("lot or community rent")));
});

test("lot rent counts only for a rented-space scenario", () => {
  for (const landStatus of ["owned", "buying", "unknown"]) {
    const result = calculateBudget({
      ...resolvedBase,
      landStatus,
      lotRent: "912.34"
    });
    assert.equal(result.knownMonthly, 625);
    assert.equal(result.lotRentKnown, false);
  }

  const renting = calculateBudget({
    ...resolvedBase,
    landStatus: "renting",
    lotRent: "912.34"
  });
  assert.ok(Math.abs(renting.knownMonthly - 1537.34) < 0.001);
  assert.equal(renting.lotRentKnown, true);
});

test("monthly total waits for a resolved land or lot-rent path", () => {
  const scenarios = [
    { landStatus: "", lotRent: "912.34", complete: false },
    { landStatus: "unknown", lotRent: "912.34", complete: false },
    { landStatus: "owned", lotRent: "912.34", complete: true },
    { landStatus: "buying", lotRent: "912.34", complete: true },
    { landStatus: "renting", lotRent: "912.34", complete: true },
    { landStatus: "renting", lotRent: "", complete: false }
  ];

  for (const scenario of scenarios) {
    const html = renderBudgetResult(
      calculateBudget({ ...resolvedBase, ...scenario })
    );
    if (scenario.complete) {
      assert.match(html, /Entered monthly total/);
      assert.doesNotMatch(html, /Known monthly costs/);
    } else {
      assert.match(html, /Known monthly costs/);
      assert.doesNotMatch(html, /Entered monthly total/);
    }
  }
});

test("land-status synchronization disables and clears inapplicable lot rent", () => {
  const elements = {
    "land-status": { value: "renting" },
    "land-cost-status": {
      value: "unknown",
      disabled: false,
      dataset: {}
    },
    land: { value: "", disabled: false, required: false },
    "lot-rent": { value: "912.34", disabled: true }
  };
  const form = { elements };

  syncLandLine(form);
  assert.equal(elements["lot-rent"].disabled, false);

  elements["land-status"].value = "owned";
  syncLandLine(form);
  assert.equal(elements["lot-rent"].disabled, true);
  assert.equal(elements["lot-rent"].value, "");

  for (const landStatus of ["buying", "unknown", ""]) {
    elements["land-status"].value = landStatus;
    elements["lot-rent"].value = "500";
    syncLandLine(form);
    assert.equal(elements["lot-rent"].disabled, true);
    assert.equal(elements["lot-rent"].value, "");
  }
});

test("zero-interest financing is valid and incomplete financing stays unknown", () => {
  assert.equal(monthlyPayment(60000, 0, 10), 500);

  const complete = calculateBudget(resolvedBase);
  assert.equal(complete.financingComplete, true);
  assert.equal(complete.payment, 500);

  const incomplete = calculateBudget({ ...resolvedBase, interestRate: "" });
  assert.equal(incomplete.financingComplete, false);
  assert.equal(incomplete.payment, null);
  assert.ok(incomplete.warnings.some((warning) => warning.includes("Financing is incomplete")));
});

test("negative input returns invalid and does not calculate", () => {
  const result = calculateBudget({
    ...resolvedBase,
    deliveryStatus: "amount",
    delivery: "-1"
  });

  assert.equal(result.status, "invalid");
  assert.deepEqual(result.invalidFields, ["delivery"]);
});

test("separate utility fields are each counted exactly once", () => {
  const result = calculateBudget({
    ...resolvedBase,
    waterStatus: "amount",
    water: "1000",
    wastewaterStatus: "amount",
    wastewater: "2000",
    electricStatus: "amount",
    electric: "3000",
    contingency: "0"
  });

  assert.equal(result.enteredOneTimeSubtotal, 103000);
  assert.equal(result.contingencyAmount, 0);
});

test("contingency applies only to entered one-time costs", () => {
  const result = calculateBudget({
    startingMode: "estimate",
    projectType: "diy",
    startingAmount: "10000",
    landStatus: "owned",
    deliveryStatus: "amount",
    delivery: "0",
    contingency: "20",
    insurance: "500",
    lotRent: "900",
    loanAmount: "20000",
    interestRate: "8",
    loanTerm: "5"
  });

  assert.equal(result.enteredOneTimeSubtotal, 10000);
  assert.equal(result.contingencyAmount, 2000);
  assert.equal(result.planningSubtotal, 12000);
});

test("amount status requires an explicit valid amount", () => {
  const result = calculateBudget({
    startingMode: "quote",
    projectType: "finished",
    startingAmount: "85000",
    landStatus: "owned",
    deliveryStatus: "amount",
    delivery: "",
    contingency: "20"
  });

  assert.equal(result.status, "invalid");
  assert.deepEqual(result.invalidFields, ["delivery"]);
});

test("HTML accepts exact monetary and APR inputs while loan years stay integer", () => {
  const html = readFileSync(
    new URL("../site/tiny-home-cost-calculator/index.html", import.meta.url),
    "utf8"
  );
  const exactValueIds = [
    "starting-amount",
    "completion",
    "land",
    "delivery",
    "foundation",
    "site-prep",
    "water",
    "wastewater",
    "electric",
    "permits",
    "professional",
    "taxes",
    "other",
    "contingency",
    "loan-amount",
    "interest-rate",
    "insurance",
    "lot-rent"
  ];

  for (const id of exactValueIds) {
    assert.match(
      html,
      new RegExp(`<input[^>]+id="${id}"[^>]+step="0\\.01"`)
    );
  }
  assert.match(html, /<input[^>]+id="loan-term"[^>]+step="1"/);
});
