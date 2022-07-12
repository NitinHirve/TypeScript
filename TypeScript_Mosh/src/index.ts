console.log("Hello Mosh TypeScript")

//built in types :
let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;
let level: any; //we should avoid uning any type in typescript.


//arrays :
let marks: number[] = [20, 40, 50, 89, 65];
let students: string[] = ["Manisha", "Diksha", "Nitin", "Sachin"];

//Tuples :  key and value
let user: [number, string] = [1, "Sachin"];
// user.push(2); // bug in tuples
console.log(user)

//Enums : 

enum Size { Small = 1, Medium, Large }

let mySize: Size = Size.Medium
console.log(mySize)

//functions : 

function calculateTax(income: number, taxYear?: number): number {
    if (taxYear || 2022 < 2022)
        return income * 1.2
    else
        return 0
}

let calculateTax2 = (): void => {
    return;
}

console.log(calculateTax(60_000))

//Objects :

let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 101,
    name: "Nitin",
    retire: (date: Date) => {
        console.log(date);
    }
};

const date = new Date()
employee.retire(date);

//type : (Interface and Type both are same)

type Person = {
    name :string,
    age :number
}

let person :Person ={
    name : "Aditya",
    age :18
}

console.log(person);

//union : (|) // if we wanted the age to be number or string we can use union sign "|"

let myAge:number | string;

myAge ="h"

console.log(myAge);

// void : returns undefined 
//never : does not returns anything.







