console.log("-------------------------OOPSSss--------------------------");

class car{
    brand: string;
    colour:string;

    display():void{
        console.log("display");
    }
        constructor(brand:string, colour:string){
            this.brand=brand;
            this.colour=colour;
            this.display=()=>{
                console.log("new display")
            };
            this.display()
    }

    start():void{
        console.log("this is my car");
    }
}

let ca=new car("merc","grey")
// ca.brand="merc"
console.log(ca.brand);
console.log(ca);

console.log(ca.display)

console.log(ca.display())



console.log("----------------------Access Modifierss----------------------");

class Person{
    name:string="kanishk"
}

class teacher extends Person{
    company:string="test yantra";

    display(){
        console.log(this.name);
        console.log(this.company);
    }
}
let s=new teacher();
s.display()

//asynchronous programming

console.log("Start");
setTimeout(() => {
   console.log("Task COmpleted"); 
}, 5000);

 setInterval(() => {
    console.log("Task COmpleted 2"); 
}, 1000);
console.log("end");



