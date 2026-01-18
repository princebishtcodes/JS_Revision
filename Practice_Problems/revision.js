// let var1 = "12";
// // console.log(typeof var1);

// let num1 = Number(var1);
// // console.log(typeof num1);

// const num2 = null;
// // console.log(typeof num2);

// // String Methods
// // const str1 = "          PrinceBisht@123       ";
// // console.log(str1.__proto__);
// // console.log(str1.length);
// // console.log(str1.charAt(3));
// // console.log(str1.indexOf("@"));
// // console.log(str1.includes("b"))
// // console.log(str1.substring(0, 4))
// // console.log(str1.slice(0, 4))
// // console.log(str1.trim())
// // const url = "princebisht.com/prince%20bisht";
// // console.log(url.replace('%20', '-'))
// // console.log(url.split('/'))

// // Switch Case

// // const Month = 4;
// // switch (Month) {
// //     case 1: console.log("January");
// //         break;

// //     case 2: console.log("Feburary");
// //         break;

// //     case 3: console.log("March");
// //         break;

// //     case 4: console.log("April");
// // }

// // Checking if Array is empty or not

// const myArr = [];
// if (myArr.length === 0) {
//     // console.log("It is an empty array...")
// }

// // Checking is Object is empty or not

// const myObj = {};
// if (Object.keys(myObj).length === 0) {
//     // console.log("It is an empty object...")
// }

// // Nullish Coalescing Operator
// // Returns the left hand side val if only clean numbers are present on both side otherwise returns the RHS operator if NaN, or null is present on LHS
// // const myNum = 5 ?? 10;
// // console.log(myNum);

// // const myNum1 = null ?? 5 ?? 10;
// // console.log(myNum1);

// // const myNum2 = undefined ?? 10 ?? null;
// // console.log(myNum2);
// // comes in handy when fetching values from DB

// // Ternary Operator

// let mySum = 10;
// // (mySum > 5) ? console.log(`Greater than 5`) : console.log(`Lesser then 5`)

// // Looping on an array

// const myArr1 = ["Batman", "Captain America", "Iron Man"];

// // for (let index = 0; index < myArr1.length; index++) {
// //     const element = myArr1[index];
// //     console.log(element);
// // }

// // for of loop

// for (const element of myArr1) {
//     console.log(element);
// }

// // Maps in JS

// const map1 = new Map();

// map1.set('In', 'India');
// map1.set('US', 'United States of America');
// map1.set('Fr', 'France');

// // console.log(map1);

// // for of is majorly used for arrays and maps

// // 

// // for of is majorly used for arrays and map

// // for (const element of map1) {
// //     console.log(element);
// // }

// // for (const [key, value] of map1) {
// //     console.log(key, value);
// // }

// // const myObj1 = {
// //     Name: "Steve Rogers",
// //     Age: 102,
// //     Address: "Manhatten, New York, USA",
// //     Role: "Captain America"
// // }

// // for (const key in myObj1){
// //     console.log(`The Key is ${key} and value is ${myObj1[key]}`)
// // }

// // for of

// // for(const element of MyArr){
// //     console.log(element);
// // }

// // in Maps const map1 = new Map();
// // for (const [key, value] of map1) {
// //     console.log(key, value);
    
// // }

// // for of is majorly used for arrays and maps

// // for in is used for objects

// // for(const key in object){
// //     console.log(`The key is ${key} and value is ${object(key)}`)
// // }