import { test, expect } from '@playwright/test'

test.describe("My Tests", () => {
    test("My first test", async ({ page }) => {
        await page.goto("https://www.google.com/")

    })
})