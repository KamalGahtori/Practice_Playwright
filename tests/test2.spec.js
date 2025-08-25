import { test, expect } from '@playwright/test'

test("My Test 2", async ({ page }) => {
    await page.goto("https://demoblaze.com/");
    await page.pause();
    await page.locator('text=Laptops').click();
})
