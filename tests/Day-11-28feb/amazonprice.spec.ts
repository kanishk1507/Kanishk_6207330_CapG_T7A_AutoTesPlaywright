import {test} from "@playwright/test";

test("login using xpath",async({page})=>{
  
    await page.goto("https://www.amazon.com/")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('samsung phones')
    await page.locator('//input[@id="nav-search-submit-button"]').click();
 
    let a=await page.locator('(//span[@class="a-price-whole"])[1]')
    // await page.locator('//span[text()="19,999"]');

    console.log(await a.textContent());
});