export class Kamal {
    constructor(page) {
        this.page = page;
    }

    async openURL(url) {
        await this.page.goto(url)
    }
}