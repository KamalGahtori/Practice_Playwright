import { test, expect } from "@playwright/test";
import { Kamal } from "../page/kamal";
let kamal;

test("My first test", async ({ page }) => {
    kamal = new Kamal(page);
    await kamal.openURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await kamal.validateURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
})