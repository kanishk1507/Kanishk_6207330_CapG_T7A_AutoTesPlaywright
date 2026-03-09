import test from "@playwright/test"
import {expect} from "@playwright/test"

test("get by Elements", async ({page})=>{
    await page.goto("https://www.amazon.in/")
  
    // await page.getByLabel("Username",{exact:true}).type("student")
    // await page.getByLabel("Username",{exact:true}).type("student1")
    // await page.getByLabel("Password").fill("password123")
    // await page.getByLabel("Password").fill("password1234")
    
    await page.locator("input#twotabsearchtextbox").fill("shoes")
    await page.keyboard.press("Enter")
    await page.locator('//[@id="61119e00-f331-4fb6-970f-5341dbadd27a"]/div/div/div/div/span/div/div/div[3]/div[1]/div[2]/h2/span').first().waitFor()
    let ele = await page.locator('//[@id="61119e00-f331-4fb6-970f-5341dbadd27a"]/div/div/div/div/span/div/div/div[3]/div[1]/div[2]/h2/span').all()
})