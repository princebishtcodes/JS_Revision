/* Data Types are of 2 types in JavaScript:
1: Primitive (Call by Value)
2: Non Primitive (Call by Reference)

Primitive Datatypes are basically those DataTypes whose Values are stored as copy of
value in Memory
They are 7 in JS : String, Number, Boolean, Number, null, undefined, Symbol, BigInt

Non Primitive Datatypes are basically those Datatypes whose Values are stored as pointers
or as a Reference in Memory
They are 3 in JS : Arrays, Objects(IMP), Functions
Documentations used:  Ecma Script JavaScript : https://262.ecma-international.org/5.1/#sec-11.4.3
MDN JavaScript Documentation : https://developer.mozilla.org/en-US/docs/Web/JavaScript
Main Documentation : https://tc39.es/ecma262/
*/

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Prince",
    age: 18,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myObj);

// *******************Memory Usage in JavaScript***********************
// Memory in JS are of Two types : 
// 1: Stack(Primitive) = It basically stores a copy of value
let userName = "princebishtcodes";
let anotherName = userName;
anotherName = "priyanshubisht";
console.log(anotherName);
console.log(userName);
// Only one value got changed as it has copy
// 2: Heap(Non-Primitive) = It basically stores a reference of value

let myObject = {
    Name: "Prince",
    Email: "princebisht@google.com",
    City: "Chandigarh"
}

let myObject1 = myObject;
myObject1.Email = "priyanshu@google.com"
console.log(myObject.Email);
console.log(myObject1.Email);
// Both the values got changed as it has reference