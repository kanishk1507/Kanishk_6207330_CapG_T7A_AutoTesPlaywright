import test from "@playwright/test"

// test('basic test', async ({ page }) => {
//   await page.goto('https://ui.vision/demo/webtest/frames/');

//   let frame = await page.frames()
//   console.log(frame.length);
//   console.log(frame);

// //   for (let i of frame ) {
// //     console.log("frame name",i.name())
// //     console.log(i.url())
    
// //   }
// //   await page.title()

// //   let frame2= await page.frameLocator('//frame[@src="frame_2.html"]')

//   for(const fram of frame){
//         console.log(await fram.title());
//     }
//     console.log(frame.length);
//     const pageframe=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})
//     await pageframe?.locator('//div/input[@name="mytext3"]').fill("hello")



//   // // using framelocator
//   // const frame2 = page.frameLocator('frame[src="frame_2.html"]');
//   // await frame2.locator('input[name="mytext2"]').fill("Hello Playwright");



//   // using framelocator
//   const frame3 = page.frameLocator('frame[src="frame_3.html"]');

//   const googleForm = frame3.frameLocator('iframe');

//   await googleForm.getByText("I am a human").click();

//   await page.waitForTimeout(2000);
// });


test('basic test', async ({ page }) => {
    page.on("dialog",async(d)=>{
        await page.waitForTimeout(2000)
        if(d.type()=="Simple Alert"){
            
            await d.accept("")
        }
        else if(d.type()=="confirm"){
            await d.dismiss()
            await d.message()

        }
        else if(d.type()=="prompt"){
            // await d.accept("hello")
            // await d.defaultValue()

            if(d.defaultValue()=="tom"){
                console.log((await d.defaultValue()));
                await d.accept()
            }
            else{
                await d.accept("tom")
            }

        }

    })

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('//button[@id="alertBtn"]').click()
    await page.getByRole("button",{name:"Confirmation Alert"}).click()
    await page.getByRole("button",{name:"Prompt Alert"}).click()


    await page.waitForTimeout(5000);
});