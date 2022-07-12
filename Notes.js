/**
 *  
 * TypeScript : 
 * 
 * What is type Script ?
 * 
 * - TypeScript is created by Microsoft.
 * - TypeScript in build on javascript.
 * - It is statically type language like (Java, c++);
 * - It is Javascript with type checking.
 * 
 * features :
 * 
 *  1. Type checking.
 *  2. Code completion.
 *  3. Refactoring
 *  4. New features.
 * 
 * Drawbacks : 
 * 
 * - Browsers dont understand TypeScript. Hence we need to give additional compiler to convert TS to JS.
 *   (Transpilation)
 *    .ts -> compiler ->.js
 * - Discipline in writing code.
 * 
 * JS - for simple applications.
 * TS - for Medium to large complex projects 
 * 
 * Commands : 
 * 
 * - npm i typescript // installs typescript
 * - tsc -v // version 
 * - tsc index.ts // runs ts code.
 * - tsc index.ts -w // no need to recompile every time.
 * 
 *  Commands for powershell : (admin access) 
 * - Set-ExecutionPolicy RemoteSigned // so we can access tsc in vs terminal
 * 
 *
 * Any ts code is valid js code.
 * 
 * 
 * Type Assertion :
 * 
 * 
 * 
 * Interfaces : 
 * 
 * - Interfaces are the custom types in Typescript(non-primitive type) 
 * 
 * 
 * class :
 * 
 * - A class encapsulate the data for the object.
 * - It is the blueprint for creating the objects.
 * 
 * 
 * 
 * Object 
 * 
 * - let obj = new Classname()
 * 
 * 
 * 
 * Constructor :
 * 
 * constructor(firstname:string,lastname:string)
 * {
 * 
 * }
 * 
 * let obj = new Classname("constructor parameters");
 * 
 * 
 * Access modifiers :
 * 
 * - public = Accessible from everywhere in file;
 * - private = only accessible in same class;
 * - protected = only accessible in same class and sub class;
 * 
 * 
 * 
 * *** TypeScript Mosh :
 * 
 * 
 * initializing typescript config :
 *  - tsc --init
 * 
 * 
 * //Tuples :  key and value
 * 
 * - Tuples are useful when we have only two values (key, value pair);
 * - let user:[number,string] =[1,"Sachin"];
 * 
 * //Enums :  (enumerated types)
 * 
 * - Data structures of constant length that hold a set of constant values.
 * - Using an enum we can represent the list of related constant.
 * - Enums are useful when setting properties or values that can only be a certain number of possible values
 * - enum Size {Small=1,Medium,Large}
 * - let mySize:Size= Size.Medium
 * 
 * //functions :
 * 
 * - In TypeScript functions can have return type.
 * - e.g 
 *  function calculateTax(income:number):void{
             return ;
       }
 * 
 * 
 * //Objects :  
 * 
 * - Object must have fix numbers of elements and their types declared.
 * let employee:{readonly id:number,name:string}={
    id:101,
    name:"Nitin"
}; 
 * 
 * - readonly // only read and cannot modify.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */