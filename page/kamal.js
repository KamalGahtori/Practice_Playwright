import { expect } from '@playwright/test'
export class Kamal {

    constructor(page) {
        this.page = page;
    }

    async openURL(url) {
        await this.page.goto(url)
    }

    async validateURL(url) {
        await expect(this.page).toHaveURL(url)
    }
}