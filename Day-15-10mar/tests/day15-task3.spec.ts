import test from '@playwright/test';
test('Mouse click and hover', async ({page, context}) => {

    // await page.goto('https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4')

    // await page.locator('#submit').dispatchEvent('click');
    // await page.waitForTimeout(5000);

    // await page.goto('https://demoapps.qspiders.com/ui/scroll/newTabVertical')
    // await page.locator('//input[@type="checkbox"]').scrollIntoViewIfNeeded();
    // await page.locator('//input[@type="checkbox"]').click();
    // await page.getByText('Accept Our Policy').click();

    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
    await page.locator('//input[@id="name"]').click()
    await page.keyboard.insertText("Kanishk")
    await page.keyboard.press('Tab')
    await page.keyboard.insertText('Kanishk@gmail.com')
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.keyboard.press('Tab') 
    await page.keyboard.press('Control+V') 
    await page.keyboard.down('Enter')
    await page.keyboard.up('Enter')
    



    // await page.locator('//input[@id="email"]').click()
    // await page.keyboard.insertText("abc@gmail.com")
    // await page.locator('//input[@id="password"]').click()
    // await page.keyboard.insertText("abcde@12345")
    // await page.locator('//input[@id="password"]').()


    await page.waitForTimeout(5000);
   
    

}) 
