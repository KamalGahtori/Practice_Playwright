import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://demoblaze.com/');
    await page.getByRole('link', { name: 'Phones' }).click();
    await page.locator('div:nth-child(3) > .card > a').click();
    page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => { });
    });
    await page.getByRole('link', { name: 'Add to cart' }).click();
    await page.getByRole('link', { name: 'Cart', exact: true }).click();
    await page.getByRole('button', { name: 'Place Order' }).click();
    await page.getByRole('textbox', { name: 'Total: 650 Name:' }).click();
    await page.getByRole('textbox', { name: 'Total: 650 Name:' }).fill('ABC');
    await page.getByRole('textbox', { name: 'Country:' }).click();
    await page.getByRole('textbox', { name: 'Country:' }).fill('XYZ');
    await page.getByRole('textbox', { name: 'City:' }).click();
    await page.getByRole('textbox', { name: 'City:' }).fill('Test City');
    await page.getByRole('textbox', { name: 'Credit card:' }).click();
    await page.getByRole('textbox', { name: 'Credit card:' }).fill('123456');
    await page.getByRole('textbox', { name: 'Month:' }).click();
    await page.getByRole('textbox', { name: 'Month:' }).fill('Jan');
    await page.getByRole('textbox', { name: 'Year:' }).click();
    await page.getByRole('textbox', { name: 'Year:' }).fill('2025');
    await page.getByRole('button', { name: 'Purchase' }).click();
    await page.getByRole('button', { name: 'OK' }).click();
});