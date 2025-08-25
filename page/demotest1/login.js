import { expect } from '@playwright/test'


export class Login {
    constructor(page) {
        this.page = page;
    }
    async openURL(url) {
        await this.page.goto(url);
    }
    async enterUserName(username) {
        await this.page.locator("#user-name").fill(username);
    }
    async enterPassword(password) {
        await this.page.locator("#password").fill(password)
    }
    async clickLogin() {
        await this.page.locator("#login-button").click();
    }
    async verifyHomePage() {
        await expect(this.page.locator(".app_logo")).toBeVisible();
    }
    async verifyLogo() {
        await expect(this.page.locator(".app_logo")).toHaveText("Swag Labs");
    }
}
