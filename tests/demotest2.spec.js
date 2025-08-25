import { test, expect } from '@playwright/test'
import { beforeEach } from 'node:test'
import { Login } from '../page/demotest2/login'
import { Logout } from '../page/demotest2/logout';
import { HomePage } from '../page/demotest2/admin';

let login;
let logout;
let homepage;
test.describe("Orange HRM", () => {

    test.beforeEach("Login", async ({ page }) => {
        login = new Login(page);
        await login.openURL("https://opensource-demo.orangehrmlive.com/");
        await login.validateURL();
        await login.enterUserName("Admin");
        await login.enterPassword("admin123");
        await login.clickLogin();
        await login.validateHomePage();
        await login.validateLogo();
    })

    test("Home Page", async ({ page }) => {
        homepage = new HomePage(page);
        await homepage.clickSearchOnHomePage();
        await homepage.searchModule("Admin");
        await homepage.validateSearchOperation();
    })


    test("Logout", async ({ page }) => {
        logout = new Logout(page);
        await logout.clickOnProfileDropdown();
        await logout.validateLogoutButton();
        //await page.pause();
        await logout.clickLogout();
        await logout.validatePageAfterLogout();
        await logout.validatePageURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    })

})