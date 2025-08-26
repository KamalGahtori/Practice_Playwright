import { test, expect } from '@playwright/test'

export class Kamal {
    constructor(page) {
        this.page = page
    }

    async openURL() {
        await this.page.goto("https://google.com")
    }
}