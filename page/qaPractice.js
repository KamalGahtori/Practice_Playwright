import { expect } from '@playwright/test'
export class Login {
    constructor(page) {
        this.page = page;
    }
    async openURL(url) {
        await this.page.goto(url)
    }
    async validateURL(url) {
        await expect(this.page).toHaveURL(url)
    }
    async clickOnEcommerceLogin() {
        await this.page.locator("#auth-shop").click();
    }
    async validateLoginScreen() {
        await expect(this.page.locator("#loginSection > h2")).toHaveText("Login - Shop")
    }
    async enterEmail(email) {
        await this.page.fill("#email", email);
    }
    async enterPassword(password) {
        await this.page.fill("#password", password);
    }
    async clickSubmit() {
        await this.page.click("#submitLoginBtn");
    }
    async validateHomePage() {
        await expect(this.page.locator(".section-header")).toHaveText("SHOPPING CART");
    }
    async addIphone12ToCart() {
        await this.page.locator(".shop-item").filter({ hasText: "Apple iPhone 12, 128GB, Black" }).getByRole('button', { name: 'Add to cart' }).click();
        // const button = this.page.locator('//span[contains(text(),"Apple iPhone 12")]/following-sibling::div//button');
        // await button.scrollIntoViewIfNeeded();
        // await button.waitFor({ state: 'visible' });
        // await button.click({ force: true });
        //this.page.getByRole('button', { name: 'ADD TO CART' }).first().click();

    }
    async validateCartItem() {
        const validateCartItem = this.page.locator(".cart-item-title");
        // await validateCartItem.scrollIntoViewIfNeeded()
        // await validateCartItem.waitFor({ state: 'visible' });
        await expect(validateCartItem).toHaveText("Apple iPhone 12, 128GB, Black");
    }

    async removeItemFromCart() {
        await this.page.click(".btn.btn-danger");
    }
    async validateCartItemIsRemoved() {
        await expect(this.page.locator(".cart-item-title")).toBeHidden();
    }
    async clickOnProceedToCheckout() {
        await this.page.click(".btn.btn-primary.btn-purchase");
    }
    async validateCheckoutPage() {
        await expect(this.page.locator("#shipping-address > h2")).toHaveText("Shipping Details");
    }

}