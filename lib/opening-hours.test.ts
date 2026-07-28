// Run: npm test
import { test } from "node:test";
import assert from "node:assert/strict";
// Extension is required — Node's ESM resolver does not guess it. Do not strip.
import { toDayOfWeek, to24h } from "./opening-hours.ts";

test("toDayOfWeek expands ranges, wrapping over the weekend", () => {
  assert.deepEqual(toDayOfWeek("Mon-Fri"), [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ]);
  assert.deepEqual(toDayOfWeek("Sat"), ["Saturday"]);
  assert.deepEqual(toDayOfWeek("Sat-Sun"), ["Saturday", "Sunday"]);
  assert.deepEqual(toDayOfWeek("Fri-Mon"), ["Friday", "Saturday", "Sunday", "Monday"]);
  assert.deepEqual(toDayOfWeek("Public Holidays"), []);
});

test("to24h converts 12-hour times and passes 24-hour ones through", () => {
  assert.equal(to24h("6:00pm"), "18:00");
  assert.equal(to24h("09:00am"), "09:00");
  assert.equal(to24h("12:00am"), "00:00"); // midnight, not noon
  assert.equal(to24h("12:30pm"), "12:30"); // noon stays 12
  assert.equal(to24h("18:00"), "18:00");
  assert.equal(to24h("by appointment"), "by appointment");
});
