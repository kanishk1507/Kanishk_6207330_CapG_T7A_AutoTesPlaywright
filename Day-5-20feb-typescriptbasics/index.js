console.log("hii");
var a = 10;
a = 20;
var b = "hello";
var c = 20;
var numberValue = 10;
var str = "Kanishk";
var d = true;
var e = null;
var f = undefined;
var g = 20;
g = "hii";
g = true;
console.log(str);
// Array of numbers
var arr = [10, 20, 20, 30];
arr.push(50);
console.log(arr);
// Tuple
var arr2 = ["bcvhsd", true, 553646, 34567];
console.log(numberValue);
console.log(arr);
console.log(arr2);
// Object type
var stud = {
    name: "kanishk",
    age: 21
};
// Function with return type void
function greet(name, age) {
    console.log("".concat(name, " and ").concat(age));
}
greet("Kanishk", 21);
// Function with return type number
function add(a, b) {
    return a + b;
}
// Arrow function
var sum = function (a, b) {
    return a + b;
};
// Union type array
var arr3 = [234, "fgvbn", 3456, 3456, "cvbn"];
arr3.push(3456);
console.log(arr3);
var obj = {
    id: 34567,
    name: "Kanishk",
    age: 21
};
console.log(obj.id);
var mydog = {
    name: "tommy",
    age: 2,
    // bread:"bulldog"
};
var mycar = {
    brand: "toyota",
    colour: "black",
    sunroof: function () {
        return "sunroof";
    }
};
console.log(mycar.sunroof());
