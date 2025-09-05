import { expect } from '@playwright/test'
export class RegisterForm {
    constructor(page) {
        this.page = page;
    }

    async openURL(url) {
        await this.page.goto(url);
    }
    async clickOnForm() {
        await this.page.click("#forms");
    }
    async clickOnRegister() {
        await this.page.click("#register");
    }
    async validateRegisterForm() {
        await expect(this.page.locator("#content > nav + h2")).toHaveText("Register Form");
    }
    async enterFirstName() {
        await this.page.fill("#firstName", "First Name");
    }
    async enterLastName() {
        await this.page.fill("#lastName", "Last Name");
    }
    async enterPhoneNumber() {
        await this.page.fill("#phone", "9876543210");
    }
    async openCountryDropdown() {
        await this.page.click("#countries_dropdown_menu");
    }
    async selectCountry() {
        await this.page.locator('#countries_dropdown_menu').selectOption("India");
    }
    async enterEmail() {
        await this.page.fill("#emailAddress", "test@gmail.com");
    }
    async enterPassword() {
        await this.page.fill("#password", "Password");
    }
    async checkTandC() {
        await this.page.click("#exampleCheck1")
    }
    async clickOnRegisterButton() {
        await this.page.click("#registerBtn");
    }
}