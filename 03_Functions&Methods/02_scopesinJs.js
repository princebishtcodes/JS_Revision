// Date: 23 September 2025
let a = 10; //All these values are Global Scope
const b = 20; //let and const are Block Scoped
var c = 30; //Meanwhile the var is function scoped
//Global Scope means the declaration outside the function block or any {}, it is accessible everywhere in the code
//The curly braces{} are also known as scope
if (true) {
    let a = 100; //All these values are Block Scope
    const b = 200;
    var c = 300;
}
//Block Scope means the declaration inside a block or any {}, it is accessible just inside the block inside the code
// console.log(a); //It is going to print 10
// console.log(b); //It is going to print 20
// console.log(c); //It is printing 300 which means inside of loop value of c, that's why var is avoided as it can open many bugs and let is preferred here

function one(){
    const username = "princebisht@123";

    function two(){
        const website = "youtube.com"
        console.log(username);
    }
    // console.log(website);
//     two();
}
// one();
// It is just like Elders can ask the child for Ice-Cream but Child can't ask for Ice-Cream from Elders 
// This is also Known as Closure(Lexical Scope)
// Inner functions can access variables from their outer functions.

if(true){
    const Uid = "25BCS11758";
    if (Uid === "25BCS11758"){
        const website = " chatgpt";
        // console.log(Uid+website);
    }
}

// Two way of Declaring Functions
//1st Way
// console.log(addOne(5)); //It is going to work as it is global scope here
function addOne(int){
    return int + 1;
}
console.log(num2(5)); // This will show error as it is having block scope

const num2 = function addTwo(num){
    return num+2;
}
