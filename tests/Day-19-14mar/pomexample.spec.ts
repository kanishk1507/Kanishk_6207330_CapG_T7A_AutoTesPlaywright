import {test} from "@playwright/test"
import Example from "../PageObjectModel/example.page"
import fs from "fs"
import path from "path"
// let dataitem = fs.readFileSync(path.join(__dirname, "../../testdata/data.json"))
let datafile=fs.readFileSync(path.join(__dirname,"../testdata/data.json"))
let data=JSON.parse(datafile)


test("pom learning",async({page})=>{
    let examplepage=new Example(page)

    // await page.goto("https://practicetestautomation.com/practice-test-login/")
    // await examplepage.usernameTF.fill("Kanishk")
    // await examplepage.passwordTF.fill("abcde12345")
    // await examplepage.SubmitBtn.click("")
    
     for (let d of data) {
        let url = d.url
        let user = d.username
        let pass = d.password
        await page.goto(url)
        await examplepage.usernameTF.fill(user)
        await examplepage.passwordTF.fill(pass)
        await examplepage.SubmitBtn.click()

    }
    
    
    
    await page.waitForTimeout(1000)
})