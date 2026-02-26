// import {add,name} from "./index";
// console.log(add(40,50));
// console.log(name);

// asynchronous programming
/**
 * timer function
 * promises
 * async and await --> ES8 --> 2017
 */

function taskA(){
    console.log("task1");
    
}
function taskB(){
    console.log("task2");
    
}
taskA();
taskB();

//?setTimeout ---->3000 ---->one time
//?setInterval ---->3000 ---->after each interation it will execute

console.log("start");

setTimeout(()=>{
    console.log("task completed 1");
},3000);

// let x:number =setInterval((): void=>{
//     console.log("task completed 2");
// },3000);

// console.log("end");

//?Promises
//!fullfilled or resolved
//!rejected
//!pending

let p1 = new Promise<string>((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("login successful");
    } else {
        reject("login unsuccessful");
    }
});

// p1.then((ele)=>{
//     console.log(ele);

// }).catch(()=>{

// }).finally(()=>{

// })

function getUser():Promise<string>{
    return new Promise((resolve,reject)=>{
        resolve("User is there")
        reject("User not found")
        
    })
}

getUser().then((ele)=>{
    console.log(ele);
}).then((res)=>{console.log(res);
});


let p2 = new Promise<number> ((resolve) =>{
    resolve(42);
})
p2.then((value :  number) =>{
    console.log("Resolved value with operations:", value*4);
})
p2.then((value) =>{
    console.log("Resolved value with operations:", value**4);
})
p2.then((value) =>{
    console.log("Resolved value with operations:", value/4);
});


let pr2 = new Promise<number>((resolve)=>{
    resolve(100)
})

p2.then(num=>num*2 //20
).then((res)=> res*2
).then((res)=>{
    console.log(res);
})