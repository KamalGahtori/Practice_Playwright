import { expect } from '@playwright/test'

export class Logout {
    constructor(page) {
        this.page = page;
    }
    async clickOnProfileDropdown() {
        await this.page.click(".oxd-userdropdown-tab");
    }
    async validateLogoutButton() {
        await expect(this.page.getByText("Logout")).toBeVisible();
    }
    async clickLogout() {
        await this.page.getByText("Logout").click();
    }
    async validatePageAfterLogout() {
        await expect(this.page.locator("h5.oxd-text.oxd-text--h5")).toHaveText("Login");
    }
    async validatePageURL(url) {
        await expect(this.page).toHaveURL(url)
    }
}