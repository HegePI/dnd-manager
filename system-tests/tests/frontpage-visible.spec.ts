import { test, expect } from "@playwright/test";

test("Frontpage visible", async ({ page }) => {
  await page.goto("http://dnd-manager.local/");
  await expect(
    page.getByRole("heading", { name: "Hello, world!" }),
  ).toBeVisible();
  await expect(page.getByRole("img", { name: "crewmate" })).toBeVisible();
  await expect(page.getByText("DND manager")).toBeVisible();
});
