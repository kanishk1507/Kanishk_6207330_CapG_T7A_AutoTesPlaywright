import fs from "fs"
import path from "path"

class Example {
    constructor(page){
        this.page = page
        this.usernameTF = page.locator("#username")
        this.passwordTF = page.locator("#password")
        this.SubmitBtn = page.locator("#submit")
    }
    async loginWithJson(url){
        let datafile = fs.readFileSync(path.join(__dirname,"../testdata/data.json"))
        let data = JSON.parse(datafile)

        for (let d of data){

            let user = d.username
            let pass = d.password

            await this.page.goto(url)
            await this.usernameTF.fill(user)
            await this.passwordTF.fill(pass)
            await this.SubmitBtn.click()
        }

    }

}

export default Example