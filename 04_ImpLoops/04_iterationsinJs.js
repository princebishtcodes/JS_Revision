// What is Iterations/ Looping
// Definition: Iteration is the process of repeating a block of code multiple times until a certain condition is met. In programming, this is typically done using loops.
// Loops are used to automate repetitive tasks, making code more efficient and easier to read. There are several types of loops in JavaScript:
/*
1. for Loop
2. while Loop
3. do while Loop
*/

// 1. for Loop
// The for loop is used when the number of iterations is known beforehand. It consists of three main parts: initialization, condition, and increment/decrement.
//Syntax
/*
for (let i = 0; i < n; i++) {
    console.log("");
}
*/
// for(initialization; condition; increment/decrement){ }

// A simple for Loop program to print natural numbers from 1 to 10
for(let i = 1; i <= 10; i++ ){
    // console.log(i);
}

// We can also mix the for loop with if-else conditions
for(let j = 1; j <= 10; j++){
    const element = j;
    if(element == 5){
        // console.log("DSA is Best!");
    }
    // console.log(element);
}

// Nested Looping : A loop inside another loop is called a nested loop.

for(let i = 0; i <= 10; i++){
    // console.log(`Outer Loop Value is ${i}`);
    for(let j = 0; j <= 10; j++){
        // console.log(`Inner Loop Value is ${j} and Outer Loop Value is ${i}...`);
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}

// The main for loop is generally performed on arrays and objects to iterate through their elements or properties.

myHeroes = ["Captain America", "Iron man", "Thor"];
for (let index = 0; index < myHeroes.length; index++) {
    const element = myHeroes[index];
    // console.log(element);
}

// Break and Continue Statements
// The break statement is used to exit a loop prematurely when a certain condition is met.
// The continue statement is used to skip the current iteration of a loop and move to the next iteration.

// Example of break statement

for(let i = 1; i <= 20; i++){
    const element = i;
    if(element == 5){
        // console.log(`5 is detected...`);
        break;
    }
    // console.log(`The value of i : ${i}`);
}

// Example of continue statement

for(let i = 1; i <= 20; i++){
    const element = i;
    if(element == 5){
        // console.log(`5 is detected...`);
        continue;
    }
    // console.log(`The value of i : ${i}`);
}

// while Loop
// The while loop is used when the number of iterations is not known beforehand. It continues to execute the block of code as long as the specified condition is true.
// Syntax
/*
while(condition){
    // code to be executed
    // increment/ decrement operator
}
*/

// A simple while Loop program to print natural numbers from 1 to 10
let i = 1;
while(i <= 10){
    // console.log(i);
    i++;
}

// For Arrays
const dcHeros = ["Flash", "Superman", "Batman"];
let index = 0;
while(index < dcHeros.length){
    // console.log(`The Element is ${dcHeros[index]}`);
    index++;
}

// do while Loop
// The do while loop is similar to the while loop, but it guarantees that the block of code will be executed at least once, regardless of the condition.

// Syntax of do while Loop
/*
while{
    code to be executed
    increment/decrement operator
} do(condition);
*/

let h = 11;
do{
    // console.log(`The value is ${h}...`);
    h++;
}while(h<=10);