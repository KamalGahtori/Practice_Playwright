import { test, expect } from '@playwright/test'


test("Loop", async ({ page }) => {
    await page.goto("https://demoblaze.com/#");
    await expect(page).toHaveURL("https://demoblaze.com/#");
    const products = page.locator(".list-group #itemc");
    const count = await products.count();
    for (let i = 0; i < count; i++) {
        if (await products.nth(i).textContent() == "Laptops") {
            await products.nth(i).click();
            break;
        }
    }
    await page.pause();
})