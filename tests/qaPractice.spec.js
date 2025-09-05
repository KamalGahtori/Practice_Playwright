import { test, expect } from '@playwright/test'
import { beforeEach } from 'node:test'
import { Login, AddItemToCart, Logout } from '../page/qaPractice'
import testdata from '../Test Data/testData.json'



let login;
let logout;
let addItemToCart;
test.describe("Ecommerce", () => {

    test.beforeEach("Login to the Ecommerce", async ({ page }) => {
        login = new Login(page);
        await login.openURL(testdata.url);
        await login.validateURL(testdata.url);
        await login.clickOnEcommerceLogin();
        await login.validateLoginScreen();
        await login.enterEmail(testdata.email);
        await login.enterPassword(testdata.password);
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