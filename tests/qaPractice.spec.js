import { test, expect } from '@playwright/test'
import { beforeEach } from 'node:test'
import { Login } from '../page/qaPractice'

let login
test.describe("Ecommerce", () => {

    test("Login to the Ecommerce", async ({ page }) => {
        login = new Login(page);
        await login.openURL("https://qa-practice.netlify.app/");
        await login.validateURL("https://qa-practice.netlify.app/");
        await login.clickOnEcommerceLogin();
        await login.validateLoginScreen();
        await login.enterEmail("admin@admin.com");
        await login.enterPassword("admin123");
        await login.clickSubmit();
        await login.validateHomePage();
        await login.addIphone12ToCart();
        await login.validateCartItem();
        await page.pause();
        await login.removeItemFromCart();
        await login.validateCartItemIsRemoved();
        await login.addIphone12ToCart();
        await login.clickOnProceedToCheckout();
        await login.validateCheckoutPage();

        //await page.pause();



    })
})