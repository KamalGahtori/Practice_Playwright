import { test, expect } from '@playwright/test'
import { beforeEach } from 'node:test'
import { Login, AddItemToCart, Logout } from '../page/qaPractice'


let login;
let logout;
let addItemToCart;
test.describe("Ecommerce", () => {

    test.beforeEach("Login to the Ecommerce", async ({ page }) => {
        login = new Login(page);
        await login.openURL("https://qa-practice.netlify.app/");
        await login.validateURL("https://qa-practice.netlify.app/");
        await login.clickOnEcommerceLogin();
        await login.validateLoginScreen();
        await login.enterEmail("admin@admin.com");
        await login.enterPassword("admin123");
        await login.clickSubmit();
        await login.validateHomePage();
    })
    test("Add Item to Cart", async ({ page }) => {
        addItemToCart = new AddItemToCart(page);

        await addItemToCart.addIphone12ToCart();
        await addItemToCart.validateCartItem();
        await addItemToCart.removeItemFromCart();
        await addItemToCart.validateCartItemIsRemoved();
        await addItemToCart.addIphone12ToCart();
        await addItemToCart.clickOnProceedToCheckout();
        await addItemToCart.validateCheckoutPage();
        await addItemToCart.enterPhoneNumber();
        await addItemToCart.enterStreet();
        await addItemToCart.enterCity();
        await addItemToCart.selectCountry();
        await addItemToCart.clickOnSubmitOrder();
        await addItemToCart.validateConfirmationTextIsVisible();
        await addItemToCart.validateConfirmationText();
        await page.pause();
    })
    test("Logout", async ({ page }) => {
        logout = new Logout(page)
        await logout.clickOnLogoutButton();
        await login.validateLoginScreen();
    })
})