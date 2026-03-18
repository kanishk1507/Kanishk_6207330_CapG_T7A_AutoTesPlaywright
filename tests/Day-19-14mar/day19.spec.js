import {test} from '@playwright/test'
import excel from 'exceljs'
import path from "path"

// test("Write excel data", async ({page}) => {
//     let book = new excel.Workbook()
//     await book.xlsx.readFile(path.join(__dirname,"../testdata/readexcel.xlsx"))
//     let sheet = await book.getWorksheet("Sheet4")
//     if(!sheet){
//         sheet = await book.addWorksheet("Sheet4")
//     }
//     // sheet.getRow(1).getCell(1).value="PlayWright";
//     // await book.xlsx.writeFile(path.join(__dirname, "../testdata/readexcel.xlsx"))


//     let data = []
//     for(let i = 1; i <= 5; i++){
//         data.push("Playwright " + i)
//     }
//     for(let i = 0; i < data.length; i++){
//         sheet.getRow(i + 1).getCell(1).value = data[i]
//     }
//     await book.xlsx.writeFile(path.join(__dirname,"../testdata/readexcel.xlsx"))

// })


//--Listing product using araay from amazon search results into excel
test("Product listing", async ({page}) => {

    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../testdata/readexcel.xlsx"))
    let sheet = await book.getWorksheet("Sheet4")
    if(!sheet){
        sheet = await book.addWorksheet("Sheet4")
    }
    await page.goto("https://www.amazon.in")
    await page.locator("#twotabsearchtextbox").fill("laptop")
    await page.keyboard.press("Enter")

    await page.waitForTimeout(3000)

    const products = await page.locator("h2 span").allTextContents()
    let productArray = []
    for(let product of products){
        productArray.push(product)
    }
    console.log(productArray)

    for(let i = 0; i < productArray.length; i++){
        sheet.getRow(i + 1).getCell(1).value = productArray[i]
    }
    await book.xlsx.writeFile(path.join(__dirname,"../testdata/readexcel.xlsx"))

})