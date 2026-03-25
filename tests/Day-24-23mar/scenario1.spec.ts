import { test, expect } from '@playwright/test';

test('Handle Simple Alert using event listener (no Promise.all)', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    const dialogPromise = page.waitForEvent('dialog');
    await page.click('#alertBtn');

});