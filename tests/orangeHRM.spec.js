import { test, expect } from '@playwright/test'

test("Login", async ({ page }) => {
    //Open URL
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    //Assertion to check Page URL
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //Enter text in a text field
    await page.locator('input[name="username"]').fill("Admin");
    await page.locator('[name = "password"]').fill("admin123");
    //Click on an element
    await page.locator('.oxd-button').click();
    //Verify text on page
    await expect(page.locator('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')).toHaveText("Dashboard");
    //Store value of a locator in a constant
    const logo = page.locator('[class="oxd-brand-banner"]');
    //Verify is an element is visible on the page
    await expect(logo).toBeVisible();
    //Enter text in a text field without using the locator property
    await page.fill('[class="oxd-input oxd-input--active"]', "Admin");
    // await page.pause();
    // await page.locator('[class="oxd-main-menu-item active"]').click({ timeout: 10000 })
    // await expect(page.locator('[class="oxd-text oxd-text--h5 oxd-table-filter-title"]')).toHaveText("System Users")


    //Pause the page to debug
    //await page.pause();


})