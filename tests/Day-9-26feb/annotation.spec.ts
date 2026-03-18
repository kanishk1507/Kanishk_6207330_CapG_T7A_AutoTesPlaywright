//Annotation
// We are adding some extra label
/**
 * skip
 * only
 * fixme
 * fail
 * describe
 * slow
 * settimeout
 */

import {test} from "@playwright/test"

test("test1", async()=>{

})

test("test2", async()=>{
    
})

test("test3", async()=>{
    test.slow()
    console.log("test3");
})

test.fixme("test4", async()=>{
    
})

test.describe("test5", async()=>{
    console.log("hi")

    test("",async({page})=>{

    })
})

