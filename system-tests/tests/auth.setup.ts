import { test as setup, expect } from "@playwright/test";

const authFile = "playwright/.auth/user.json";

setup("authenticate", async ({ page }) => {
    await page.goto("http://dnd-manager.local/");
    await page.getByRole("button", { name: "Sign in" }).click();
    await page.getByPlaceholder("jsmith").fill("tester");
    await page.getByLabel("Password").fill("tester");
    await page
        .getByRole("button", { name: "Sign in with Credentials" })
        .click();
    await expect(page.getByText("Signed in as tester Sign out")).toBeVisible();

    await page.context().storageState({ path: authFile });
});
