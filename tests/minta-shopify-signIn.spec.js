const { test, expect } = require('@playwright/test');

import * as credentials from '../framework/config/index';

test.describe('app.withminta.com main page on Prod', () => {

    const baseURL = 'https://app.withminta.com/'

    test.only('Sign in with Shopify', async ({ page }) => {
        await page.goto(baseURL);

        await page.getByRole('button', { name: 'Sign in with Shopify' }).click();
        await expect(page).toHaveURL('https://apps.shopify.com/minta?');

        // add app button
        // go to https://accounts.shopify.com/
        // login using email & password 
        // choose store https://apps.shopify.com/minta?show_store_picker=1 
        // choose an account gmail
        // go to https://app.withminta.com/ 

        // create separate shopify store account for cypress!!


    });

})