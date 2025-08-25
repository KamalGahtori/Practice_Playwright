export class Login {

    constructor(page) {
        this.page = page;
    }

    async url() {
        await this.page.goto("https://www.saucedemo.com/")
    }

    async username(username) {
        await this.page.locator('[id="user-name"]').fill(username);
    }

    async password(password) {
        await this.page.locator('.input_error.form_input[name="password"]').fill(password);
    }

    async loginButton() {
        await this.page.locator("#login-button").click();
    }

}