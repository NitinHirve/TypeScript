"use strict";
console.log("Hello Mosh TypeScript");
let sales = 123456789;
let course = 'TypeScript';
let is_published = true;
let level;
let marks = [20, 40, 50, 89, 65];
let students = ["Manisha", "Diksha", "Nitin", "Sachin"];
let user = [1, "Sachin"];
console.log(user);
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
function calculateTax(income, taxYear) {
    if (taxYear || 2022 < 2022)
        return income * 1.2;
    else
        return 0;
}
let calculateTax2 = () => {
    return;
};
console.log(calculateTax(60000));
let employee = {
    id: 101,
    name: "Nitin",
    retire: (date) => {
        console.log(date);
    }
};
const date = new Date();
employee.retire(date);
let person = {
    name: "Aditya",
    age: 18
};
console.log(person);
let myAge;
myAge = "h";
console.log(myAge);
//# sourceMappingURL=index.js.map