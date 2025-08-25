import { expect } from '@playwright/test'

export class Logout {

    constructor(page) {
        this.page = page;
    }

    async clickMenuIcon() {
        await this.page.click('[id="react-burger-menu-btn"]');
    }

    async validateLogoutButtonIsVisible() {
        await expect(this.page.locator("#logout_sidebar_link")).toBeVisible();
    }
    async clickLogout() {
        await this.page.click("#logout_sidebar_link");
    }
}