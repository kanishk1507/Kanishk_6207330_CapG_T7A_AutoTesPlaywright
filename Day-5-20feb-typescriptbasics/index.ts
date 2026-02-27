console.log("hii");

let a = 10;
a = 20;

let b: string = "hello";
let c: number = 20;

let numberValue = 10;   
let str = "Kanishk";
let d: boolean = true;
let e: null = null;
let f: undefined = undefined;

let g: any = 20;
g = "hii";
g = true;

console.log(str);

// Array of numbers
let arr: number[] = [10, 20, 20, 30];
arr.push(50);
console.log(arr);

// Tuple
let arr2: [string, boolean, number, number] = ["bcvhsd", true, 553646, 34567];

console.log(numberValue);
console.log(arr);
console.log(arr2);

// Object type
let stud: {
    name: string,
    age: number,
    rollno?: number
} = {
    name: "kanishk",
    age: 21
};

// Function with return type void
function greet(name: string, age: number): void {
    console.log(`${name} and ${age}`);
}

greet("Kanishk", 21);

// Function with return type number
function add(a: number, b: number): number {
    return a + b;
}

// Arrow function
let sum = (a: number, b: number): number => {
    return a + b;
};

// Union type array
let arr3: (string | number)[] = [234, "fgvbn", 3456, 3456, "cvbn"];

arr3.push(3456);
console.log(arr3);

// Interface
interface Person {
    readonly id:number,
    name: string,
    age: number,
}

let obj: Person = {
    id:34567,
    name: "Kanishk",
    age: 21
}
console.log(obj.id)

interface Animal{
    name: string,
    age:number
}

interface Dog extends Animal{
    bread?:string
}
let mydog:Dog={
    name:"tommy",
    age:2,
    // bread:"bulldog"
}

interface car{
    brand:string,
    colour:string,
    sunroof():string
}

let mycar:car={
    brand:"toyota",
    colour:"black",
    sunroof(){
        return "sunroof"
    }
}
console.log(mycar.sunroof())