import { test } from "@playwright/test"
import Example from "../PageObjectModel/example.page"

test("pom learning", async ({ page }) => {

    let examplepage = new Example(page)

    await examplepage.loginWithJson("https://practicetestautomation.com/practice-test-login/")

    await page.waitForTimeout(1000)

})