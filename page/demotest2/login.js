import { expect } from '@playwright/test'

export class Login {
    constructor(page) {
        this.page = page;
    }
    async openURL(url) {
        await this.page.goto(url);
    }
    async validateURL() {
        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }
    async enterUserName(username) {
        await this.page.fill('[placeholder="Username"]', username)
    }
    async enterPassword(password) {
        await this.page.fill('[placeholder="Password"]', password)
    }
    async clickLogin() {
        await this.page.locator('.oxd-button.oxd-button').click();
    }
    async validateHomePage() {
        await expect(this.page.locator(".oxd-text.oxd-text--h6")).toHaveText("Dashboard");
    }
    async validateLogo() {
        await expect(this.page.locator('[class="oxd-brand-banner"]')).toBeVisible();
    }
}