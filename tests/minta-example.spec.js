const { test, expect } = require('@playwright/test');

test.describe('app.withminta.com main page on Prod', () => {

    const baseURL = 'https://app.withminta.com/'

    test('Page exists', async({ page }) => {
        await page.goto(baseURL);

        const locator1 = page.locator('h1') 
        await expect(locator1).toHaveText('Connect Minta to your online store');

        const locator2 = page.locator('h2') 
        await expect(locator2).toHaveText('Minta helps sellers promote their products on social media');
      });

    test('Has correct URL', async({ page }) => {
        await page.goto(baseURL);
        
        await expect(page).toHaveURL(/.*signin/);
      });
    test('Has title', async ({ page }) => {
        await page.goto(baseURL);

        await expect(page).toHaveTitle(/Minta/);
    });

    test('Has platform button', async ({ page }) => {
        await page.goto(baseURL);

        await page.getByRole('button', { name: 'Sign in with Shopify' }).click();
        await expect(page).toHaveURL('https://apps.shopify.com/minta?');
    });

    test('Has Enterprise button', async ({ page }) => {
        await page.goto(baseURL);

        await page.getByRole('button', { name: 'Continue with Enterprise Account' }).click();
        
        const locator3 = page.locator('h4') 
        await expect(locator3).toHaveText('Sign in with Email');

        const locator4 = page.locator('.apply-name-form-button')
        await expect(locator4).toHaveText('Log In');
    });


})