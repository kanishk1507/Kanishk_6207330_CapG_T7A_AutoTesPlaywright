import {test, expect} from "@playwright/test"
test.use({actionTimeout: 2000})

test("assertions", async ({page})=>{
    await page.goto("https://www.google.com")
    // await expect(page.locator("cvbb")).toBeAttached()
    // await page.screenshot({path:"screenshot.png"})
    // await expect(page).toHaveScreenshot("screenshot.png");
    await expect(page.locator("textarea[name='q']")).toBeVisible()
    await expect(page.locator("textarea[name='q']")).toBeEnabled()
    await expect(page.locator("textarea[name='q']")).toHaveAttribute("title","Search")
    await expect(page.locator("textarea[name='q']")).toHaveAttribute("name","q")
    let c = "Hola Welocme to google"
    await expect(c).toContain("google");
    const d = page.locator("textarea[name='q']")
    await expect(d).toBeEmpty()
    await d.fill("Playwright")
    await expect(d).not.toBeEmpty()
    await expect(d).toContainText("");
    const e = page.locator("span.Br0MEf")
    await expect(e).toContainText("New")
    
    // const f=page.locator("")

})