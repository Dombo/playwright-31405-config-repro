import { test, expect } from "@playwright/test";

test("has title @region-x", async ({ page }) => {
  await page.goto("/");
});
