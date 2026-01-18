// Truthy and Falsey Values in JavaScript(IMP for Interviews)

//Truthy Values means that they evaluate to true in a boolean context. It just assumes if the value is true or not.
//Falsey Values means that they evaluate to false in a boolean context. It just assumes if the value is false or not.

//Truthy Values
// 1. true
// 2. Any non-zero number (positive or negative)
// 3. Any non-empty string (including strings with spaces)
// 4. Objects (including arrays and functions)
// 5. Symbol
// 6. BigInt
// 7. Some Confusing Truthy values for Interviews: "False", "0", " ", [], {}, function(){}

//Falsey Values
// 1. false
// 2. 0 (zero)
// 3. -0 (negative zero)
// 4. 0n (BigInt zero)
// 5. "" (empty string)
// 6. null
// 7. undefined
// 8. NaN (Not-a-Number)

// Example Usage:

const userEmailId = "princebisht@google.com";

if (userEmailId) { // This is a truthy value
    // console.log("Email Id is Valid...");
}
else {
    console.log("EmailId is Invalid...");
}

const name = "";

if (name) { // This is a falsy value
    console.log(`Name is Valid...`)
} else {
    // console.log(`Name is Invalid...`)
}

// To check a empty array
const arr = [];
if (arr.length === 0) {
    // console.log("It is an Empty Array");
}

// To check a empty object
const Obj = {};
if (Object.keys(Obj).length === 0) { // Object.keys(Obj) this converts the object keys into array which can be accessed by using length property of array
    // console.log(`Object is Empty...`);
}

// false == 0, false == ' ', 0 == ' ', it is because it compares it with the boolean algebra of 0s and 1s, where false = 0 and true = 1.

// Nullish Coalescing Operator (??): Mostly used in Fetching values from Database, Mostly Undefined and Null is used 
// Definition: The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let val1;
// val1 = 5 ?? 10; // left-hand side operand is returned
// val1 = null ?? 10; // here, null is not returned, 10 is returned
// val1 = undefined ?? 15; // right-hand side operand is returned
val1 = null ?? 10 ?? 20; // it returns the first non-nullish value, which is 10 here

console.log(val1);

// Ternary Operators(?) : The conditional (ternary) operator is the only JavaScript operator that takes three operands. This operator is frequently used as a shortcut for the if statement.

//Syntax: condition ? expr1 : expr2: expr3
// condition ? true: false

let iceTeaPrice = 200;
iceTeaPrice <= 500 ? console.log(`Is less than 500`) : console.log(`Is greater than 500`);