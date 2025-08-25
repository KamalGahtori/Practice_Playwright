import { test, expect } from '@playwright/test'
import { Kamal } from '../page/kamal';

let kamal;

test.describe("My tests", () => {

    test("My 1st test", async ({ page }) => {
        kamal = new Kamal(page)
        await kamal.openURL("https://opensource-demo.orangehrmlive.com/");
        await page.pause();
    })
})