"use strict"; // treat all the JS code in new version
// alert("Hello World") This only works in browser, not in node

console.log(6+6);
// Code Readabilty should be there
console.log("Prince Bisht");
//Let's Discuss some Data Types
let Name = "Prince" //String
let Age = 18 //Integer
let isLoggedin = false //boolean
let Temp;// undefined
let temp1 = null; //null
console.table([Name, Age, isLoggedin, Temp, temp1])
 /*
 DataTypes in JavaScript are int, string, boolean, character, null
 int is defined without any quotes, just number like python
 string is always used in double quotes ("")
 boolean is true or false
 null is a standalone value
 undefined is used when value is not defined
 */
console.log(typeof Age) //Typeof is used to know the type of variable
console.log(typeof null) //output is object
console.log(typeof undefined)// output is undefined only