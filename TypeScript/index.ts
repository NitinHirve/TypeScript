export{}

console.log("Hello TypeScript");

//Type in TS :

let age:number = 20 ;
let myName:string = "Nitinn Shankar Hirve";
let myBool:boolean = true;
let myAnyType:any = 12;

let arrNames:string[] =["Sachin","Nitin","Manisha","Diksha"];
let arrAges:number[] =[21,25,22,28];


console.log(age);
console.log(myName);
console.log(myBool);
console.log(myAnyType);

console.log(arrNames)
console.log(arrAges); 


//Type Assertion :

let anyType= "Nitin";
let anyAgeType

console.log((<string>anyType).charAt(0)); // "angle-bracket syntax"

(anyAgeType as number) // as syntax


