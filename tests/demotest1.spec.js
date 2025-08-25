import { test, expect } from '@playwright/test'
import { Login } from '../page/demotest1/login'
import { BuyProduct } from '../page/demotest1/buyProduct'
import { Logout } from '../page/demotest1/logout'

let login;
let logout;


test.describe("Verify Home Page", () => {
    // test.beforeAll(async ({ browser }) => {
    //     context = await browser.newContext();
    //     page = await context.newPage();
    //     login = new Login(page)

    test.beforeEach("Login", async ({ page }) => {
        login = new Login(page)

        await login.openURL("https://www.saucedemo.com/");
        await login.enterUserName("standard_user");
        await login.enterPassword("secret_sauce");
        await login.clickLogin();
        await login.verifyHomePage();
        await login.verifyLogo();
    })

    test("Buy a Product", async ({ page }) => {
        const buyProduct = new BuyProduct(page);
        await buyProduct.validateProductDetails();
        await buyProduct.addProductToCart();
        await buyProduct.navigateToCart();
        await buyProduct.validateProductInCart();
        await buyProduct.checkout();
        await buyProduct.enterCheckoutInfo();
        await buyProduct.clickContinue();
        await buyProduct.validateCheckoutOverview();
    })
    test("Logout", async ({ page }) => {
        logout = new Logout(page);
        await logout.clickMenuIcon();
        await logout.validateLogoutButtonIsVisible();
        await logout.clickLogout();
    })
})