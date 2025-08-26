import { test, expect } from '@playwright/test'
import { Kamal } from '../page/kamal'
let kamal;
test.describe("My Tests", () => {
    test("My first test", async ({ page }) => {
        kamal = new Kamal(page)
        await kamal.openURL();
    })
})