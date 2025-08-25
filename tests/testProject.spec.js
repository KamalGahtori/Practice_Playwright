import { test, expect } from '@playwright/test'
import { Login } from '../page/123'

let login;
test.describe("Login", () => {


    test.beforeEach(async ({ page }) => {
        login = new Login(page);
        await login.url();
    })

    test("Login to the application", async ({ page }) => {
        await login.username("standard_user");
        await login.password("secret_sauce");
        await login.loginButton();
    })
})