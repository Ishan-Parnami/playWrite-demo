import { test, type Browser, type Page, expect } from '@playwright/test';
import { chromium, webkit, firefox } from 'playwright';



test('login test', async () => {
    const myBrowser:Browser = await chromium.launch({ headless: false });
    const myPage:Page = await myBrowser.newPage();
    await myPage.goto(''); // to enter the url
    await myPage.waitForLoadState('networkidle');
    await myPage.click('input[name="email"]');
    await myPage.fill('input[name="email"]', '');
    await myPage.click('input[name="password"]');
    await myPage.fill('input[name="password"]', '');
    await myPage.click('button[type="submit"]');
    await myPage.waitForTimeout(2000);
    const popup = await myPage.waitForSelector('div[id="sessionModal"]');
    // const popup = await page.waitForEvent('popup');
    if(popup !== null) { 
        await myPage.click('button[name="forcein"]');
    }
    await myPage.waitForLoadState('networkidle');
    await myPage.screenshot({ path: 'screenshot2.png' });
    await myPage.waitForTimeout(10000);
    await myPage.close();
    
    await myBrowser.close();
})
