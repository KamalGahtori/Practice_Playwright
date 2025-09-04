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
}

export class AddItemToCart {
    constructor(page) {
        this.page = page
    }

    async addIphone12ToCart() {
        const iphoneItem = this.page.locator(".shop-item")
            .filter({ hasText: "Apple iPhone 12, 128GB, Black" });
        const addToCartButton = iphoneItem.getByRole('button', { name: 'ADD TO CART' });

        await addToCartButton.click();

        // ✅ Assert cart total updates
        //await expect(this.page.getByText("Total $905.99")).toBeVisible({ timeout: 10000 });
    }

    // const button = this.page.locator('//span[contains(text(),"Apple iPhone 12")]/following-sibling::div//button');
    // await button.scrollIntoViewIfNeeded();
    // await button.waitFor({ state: 'visible' });
    // await button.click({ force: true });
    //this.page.getByRole('button', { name: 'ADD TO CART' }).first().click();

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
    async enterPhoneNumber() {
        await this.page.fill("#phone", "9876543210")
    }
    async enterStreet() {
        await this.page.locator('[name="street"]').fill("Street 1");
    }
    async enterCity() {
        await this.page.locator('[name="city"]').fill("Delhi");
    }

    async selectCountry() {
        // Select India from the country dropdown
        await this.page.locator('#countries_dropdown_menu').selectOption({ label: 'India' });

        // Optional: assert that the dropdown value is updated
        await expect(this.page.locator('#countries_dropdown_menu')).toHaveValue('India');
    }
    async clickOnSubmitOrder() {
        await this.page.locator("#submitOrderBtn").click();
    }
    async validateConfirmationTextIsVisible() {
        await expect(this.page.locator("#message")).toBeVisible();
    }
    async validateConfirmationText() {
        await expect(this.page.locator("#message")).toHaveText("Congrats! Your order of  $905.99  has been registered and will be shipped to Street 1, Delhi - India.");
    }
}

export class Logout {
    constructor(page) {
        this.page = page
    }

    async clickOnLogoutButton() {
        this.page.click("#logout");
    }

}
