import {test} from "@playwright/test"
import fs from "fs"
import path from "path"
let datafile=fs.readFileSync(path.join(__dirname,"../testdata/data.json"))

let data=JSON.parse(datafile)

// test("json", async({page})=>{
//     // console.log(data.greet);
//     data.forEach(d=>{
//         console.log(d.greet);
//     });
// })

test("test automation login", async({page})=>{
    
    // await page.goto(data.url)
    // await page.getByLabel("Username").fill(data.username)

    for(let d of data){
        let url=d.url
        let username=d.username
        let password=d.password

        await page.goto(url)
        console.log(page.title);
    }
    
    

})