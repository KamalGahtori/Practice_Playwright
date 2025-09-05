
import { test, expect } from '@playwright/test'
import data from '../Test Data/registerForm.json'
import { RegisterForm } from '../page/registerForm';

let registerForm;

test("Go to Register Page", async ({ page }) => {
    registerForm = new RegisterForm(page);

    await registerForm.openURL(data.url);
    await registerForm.clickOnForm();
    await registerForm.clickOnRegister();
    await registerForm.validateRegisterForm();
    await registerForm.enterFirstName();
    await registerForm.enterLastName();
    await registerForm.enterPhoneNumber();
    await registerForm.openCountryDropdown();
    await registerForm.selectCountry();
    await registerForm.enterEmail();
    await registerForm.enterPassword();
    await registerForm.checkTandC();
    await registerForm.clickOnRegisterButton();
    await page.pause();

})