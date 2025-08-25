import { expect } from '@playwright/test'

export class BuyProduct {
    constructor(page) {
        this.page = page;
    }
    async validateProductDetails() {
        await expect(this.page.locator("#item_4_title_link > div")).toHaveText("Sauce Labs Backpack")
    }
    async addProductToCart() {
        await this.page.locator("#add-to-cart-sauce-labs-backpack").click();
    }
    async navigateToCart() {
        await this.page.locator(".shopping_cart_badge").click();
    }
    async validateProductInCart() {
        await expect(this.page.locator("#item_4_title_link>div")).toHaveText("Sauce Labs Backpack");
    }
    async checkout() {
        await this.page.locator("#checkout").click();
    }
    async enterCheckoutInfo() {
        await this.page.fill("#first-name", "Test");
        await this.page.fill("#last-name", "User");
        await this.page.fill("#postal-code", "12345");
    }
    async clickContinue() {
        await this.page.click("#continue");
    }

    async validateCheckoutOverview() {
        await expect(this.page.locator("#item_4_title_link>div")).toHaveText("Sauce Labs Backpack");
        await expect(this.page.locator('[class=inventory_item_price]')).toHaveText("$29.99")
    }

}