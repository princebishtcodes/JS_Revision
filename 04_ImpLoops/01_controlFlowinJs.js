/*
The Control Flow or Logic Control in JavaScript are of three types:
1. Conditional Statements
2. Looping Statements
3. Jump Statements
*/

//1st (Conditional Statements)
//The conditional statements checks the conditions, if the condition is true then it will execute the block of code otherwise it will skip the block of code.

//There are 4 types of conditional statements in JavaScript:
//1. if statement
//2. if...else statement
//3. if...else if...else statement
//4. switch statement

//1. if statement
// if statements checks the condition, if the condition is true then it will execute the block of code else it will be skipped

//Syntax
/*
if (condition) {
    
}
*/
// Condition Operators: <(less than),>(greater than),<=(lesser than equals to),>=(greater than equals to),==(Evaluation of Condition),===(Strict Type Checking),=(Assignment Operator)

const isUserLoggedIN = true;
if (isUserLoggedIN) {
    // console.log("User is Logged In...");
}

const age = "17";
if (age >= 18) {
    // console.log("You are Eligible to Vote");
}

//2. if else statement
// if else statements checks the condition, if the condition is true then it will execute the if block of the code else it will execute the else block of code
// Syntax 
/*
if (condition) {
    
} else {
    
}
*/
if (age >= 18) {
    // console.log("You are Eligible to Vote");
}
else {
    // console.log("You are not Eligible to Vote")
}

const score = 500;
if (score >= 250) {
    const ability = "Fly";
    // console.log(`You can ${ability}`);
}
// console.log(`You can ${ability}`);// This will create error due to block scoping

//Short way of Writing if statements
// if(score>=250) console.log("Score is Greater than 250");//but it is not a good practice

//3. if...else if...else statement
// if...else if...else statements checks the multiple conditions, if the first condition is true then it will execute the first block of code else it will check for the second condition and so on. If none of the conditions are true then it will execute the else block of code
// Syntax 
/*
if(condition){

}
else if (condition) {
    
} else {
    
}
    */
const balance = 350;
if (balance < 500) {
    // console.log("The Balance is less than 500")
}
else if (balance < 750) {
    // console.log("The Balance is less than 750")
}
else {
    // console.log(`The Balance is Greater than 1000`)
}

// Interesting case
let userLoggedin = true;
let debitCard = true;
// In if else statements, multiple statements can be checked using relational operators
// &&(logical and) which stands for and, both should be true, then the code will be Executed
if (userLoggedin && debitCard) {
    console.log("Allowed to Buy Any Course");
}

let loggedInFromGoogle = true;
let loggedInFromEmail = false;
// ||(logical or) which stands for or, one should be true, then the code will be Executed
if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User is Logged In...")
}