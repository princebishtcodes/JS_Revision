const myHeroes = ["Abhishek", "Rohit", "Neeraj"];
const hisHeroes = ["Virat", "Kane", "Musiala"];
// myHeroes.push(hisHeroes);
// console.log(myHeroes);//The elements of 2nd array got inside the 1st
// console.log(myHeroes[3]);//Whole 2nd Array has the index 3
// console.log(myHeroes[3][2]);//To access the elements of the Array

const fullHeroes = myHeroes.concat(myHeroes);//concat() merges both array into single array, still not effective as only two arrays can be merged
console.log(fullHeroes);

const myFullHeroes = [...hisHeroes, ...myHeroes];//this is the spread method, it is the most effective method as more than two arrays can be merged here
console.log(myFullHeroes);

const myArr = [0,1,2,[1,2,3],3,4,5,[3,4,5,6],6,7,[7,8,9,[1,2,3,4,5]]];
const fullArr = myArr.flat(Infinity); //.flat() function just spreads out the subarrays into the full arrays to reduce the unreadability
console.log(fullArr);

console.log(Array.isArray("Prince"));
console.log(Array.from("Prince")); //Array.from() converts array from any string, object etc
let marks1 = 100;
let marks2 = 98;
let marks3 = 94;
console.log(Array.of(marks1,marks2,marks3));//Array.of() puts the value of variables etc into an array