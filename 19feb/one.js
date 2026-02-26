console.log(window);

console.log("hello");
window.console.log("hello")

console.log(document)
console.log(document.body)
console.log(document.title)
console.log(document.head)


console.log(document.body.childNodes[0]);
console.log(document.body.children[2]);

let btn1=document.body.children[2]
console.log(btn1.parentElement);
console.log(btn1.parentNode);

console.log(document.body.children[3]);
let div1=document.body.children[3];
console.log(div1.firstElementChild);
console.log(div1.lastElementChild);
console.log(div1.nextElementSibling);

let head4=div1.lastElementChild
// console.log(head1.nextElementSibling);
console.log(head4.previousElementSibling);
// console.log(head4.previousSibling);

// document.getElementById("head1")

//!dom direct access methods

// --> it returns one the first element
let h1=document.getElementById("head1")
console.log(h1)




//?get element by class name

let head5=document.getElementsByClassName("h44");
console.log(head5);
let convertedarray=Array.from(head5)
console.log(convertedarray);
convertedarray.map((ele)=>{
    ele.style.color="blue"
    ele.style.backgroundColor="skyblue"
    ele.style.fontsize="50px"

})

let btname=document.getElementsByName("btn")
console.log(btname);

let h11=document.getElementsByTagName("h1")
console.log(h11);

//?query selector
let h12=document.querySelector(".h44")
console.log(h12);

let h13=document.querySelectorAll(".h44")
console.log(h13);

//!createelement

// let img1=document.createElement("img")
// console.log(img1);
// img1.setAttribute("src","")
// img1.setAttribute("alt","broken")
// document.body.append(img1)
// console.log(document.body);



// let btn2=document.getElementById("btn2")
// btn2.onclick=function demo(){
//     alert("Clicked")
// }


let btn2 = document.getElementById("btn2");

btn2.onclick = function () {

    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        btn2.textContent = "Switch to Dark Mode";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        btn2.textContent = "Switch to Light Mode";
    }
}