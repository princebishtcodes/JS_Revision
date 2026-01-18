// Important For Real World Projects

// 1st) for of loop
// Definition: The for of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc. It provides a simpler and cleaner syntax compared to traditional loops.

//Syntax
/*
for (const element of object) {
    content here
}
*/
const myHeros = ["Rohit", "Neeraj", "Virat"];
for (const index of myHeros) {  // for of
    // console.log(index);
}

//Use in Strings
const greetings = "Hello World!";
for(const greet of greetings){
    // console.log(`Each char is ${greet} `);
}

// Maps in JavaScript
// A Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type. Also, Maps holds a unique set of keys.

const map = new Map();

map.set('In', 'India');
map.set('USA', 'United States of America');
map.set('Fr', 'France');

// console.log(map) // Printed is the form of Object

for (const key of map) {
    // console.log(key); // Printed in the form of Array
}

for (const [key, values] of map) {
    // console.log(key, values); // Printed in Normal Form
}

// for of in Objects

const myObj = {
    Name: "Steve Rogers",
    Age: 102,
    Address: "Manhatten, New York, USA",
    Role: "Captain America"
}

// for (const [keys, values] of myObj) {
    // console.log(`${keys} : ${values}`); 
// }

// This will give error as Objects are not iterable, so it is not iterable by for of loop, but it can be iterable...

// 2nd) for in loop
// Definition: The for in loop is used to iterate over the enumerable properties of an object. It is primarily used for objects, but can also be used with arrays (though not recommended for arrays).
// It is generally used to loop through the properties of an object as the for of loop does not work with objects.

// Syntax
/*
for (const key in object) {
    content here
}
*/

for (const key in myObj) {
    // console.log(`${key} is ${myObj[key]}...`); 
}
// Here, key represents the property names of the object, and myObj[key] gives the corresponding values.

// for in loop in Arrays

for (const key in myHeros) {
    // console.log(key);
}

// Here, the value is not printed because in for in loop, it iterates over the indices of the array, not the values. To access the values, you would need to use myHeros[key] inside the loop.

for (const key in myHeros){
    // console.log(myHeros[key]);
}

// for in loop in Maps

for (const key in map) {
    // console.log(`${key} : ${map[key]}`); // Printed undefined as map is not iterable by for in loop
}

// Summary:
// Use for of loop for iterating over arrays, strings, maps, and sets.
// Use for in loop for iterating over the properties of objects.