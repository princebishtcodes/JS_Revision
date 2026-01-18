const score = 100;
// console.log(score);
const balance = new Number(400);
// console.log(balance);

// console.log(balance.toString());
// Will convert the number to String
// console.log(balance.toFixed(2));
// toFixed(IMP): It is used to give Number its Decimal Place, here (2) refers to two decimal points

const number1 = 123.8998;
// console.log(number1.toPrecision(3));
// toPrecision: It is used for Rounding off the Decimal on the basis of Priority

const number2 = 10000000;
// console.log(number2);
// console.log(number2.toLocaleString('en-IN'));
// toLocaleString() is used to convert Number into string and then put commas that removes confusion, used in storing large integers
//Here the default system is US system but can be converted to Indian using this syntax


// ****************************Mathematics in JavaScript******************************

console.log(Math);
console.log(Math.abs(-4));
// Abs() is  basically like mod function, convert neg to pos, but pos remains same
console.log(Math.round(2.2));
// round() is used for rounding off the values in decimal to integers
console.log(Math.ceil(2.2));
console.log(Math.floor(2.6));
// ceil() converts it into higher int but floor() coverts into lower no
// Mostly used Function in Math is Random() function

console.log(Math.random());
// This returns value between 0 and 1 in decimals
console.log(Math.floor((Math.random()*10)+1))
// Now this will give random numbers between 1 and 10

// Trick for Random Number;

const max = 20;
const min = 10;

console.log(Math.floor((Math.random()*(max-min+1))) + min);
// This is for range of 11 to 20
// Main is this Formula, just know how to use it
// console.log(Math.floor((Math.random()*(max-min+1))) + min);


console.log(Math.floor(((Math.random())*(max-min)+1)) + min);