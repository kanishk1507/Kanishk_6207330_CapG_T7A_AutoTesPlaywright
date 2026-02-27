let array=[1,2,3,4,5,6,7,8,9,10]
let arr1=[1,"bcd",true , null,undefined]
console.log(arr1)
console.log(array)
console.log(arr1[1])
delete arr1[1]
console.log(arr1[1])
let student={name :"ram",
            age:20,
            college:"jecrc"}
console.log(student)

let ar="abc"
console.log(ar[1])

//delete ar[1]
console.log(ar[1])


const a=function(){
    console.log("hi");
    return 10
}
console.log(a());
a();

(function(){
    console.log("hello");
})()



/**
Declaration
initialization
re Declaration
re initialization
dec+init in diff line
redec+reinit in same line
redec+reinit in diff line
 */

var e;
e=5 
var e=10
var b=e
console.log(b)
{
    let x=10;
    var y=12;
    const z=13;
    console.log(x);
    console.log(y);
    console.log(z);
}
let g=()=>{
    console.log("hiiii");
    return "hello"
    console.log("class");
}
console.log(g());