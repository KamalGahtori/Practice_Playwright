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
export class Admin {
    constructor(page) {
        this.page = page;
    }
    async clickOnAdminModule() {
        await this.page.getByText("Admin").click();
    }
    async enterUserName(username) {
        const username1 = this.page.locator("//label[text()='Username']/parent::div/following-sibling::div[1]/input");
        await expect(username1).toBeVisible();
        await username1.fill(username);
    }
    async clickOnUserRoleDropdown() {
        await this.page.locator('//label[text()="User Role"]/parent::div/following-sibling::div/child::div/child::div').click();
    }
    async clickOnAdminOption() {
        await this.page.getByRole('option', { name: 'Admin' }).click();
    }
    async enterEmployeeName(employeeName) {
        await this.page.locator('//label[text()="Employee Name"]/parent::div/following-sibling::div/child::div/child::div/child::div/following-sibling::input').fill(employeeName);
    }
}
