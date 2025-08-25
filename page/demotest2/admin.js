import { expect } from '@playwright/test'

export class HomePage {
    constructor(page) {
        this.page = page;
    }

    async clickSearchOnHomePage() {
        await this.page.getByPlaceholder("Search").click();
    }
    async searchModule(modulename) {
        await this.page.getByPlaceholder("Search").fill(modulename);
    }
    async validateSearchOperation() {
        await expect(this.page.locator("span.oxd-text.oxd-text--span.oxd-main-menu-item--name")).toHaveCount(1);
        await expect(this.page.locator("span.oxd-text.oxd-text--span.oxd-main-menu-item--name")).toHaveText("Admin");
    }
}