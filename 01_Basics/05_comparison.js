// console.log(2 > 4);
// console.log(2 < 4);
// console.log(2 <= 5);
// console.log(2 >= 5);
// console.log(4 == 5);
// console.log(4 != 5);
// All will return boolean values
console.log("2" > 4); //harkate nhi krni chahiye, isliye typescript ki demand h
// Interesting Cases
console.log(null > 0); // false
console.log(null == 0); // here also false because it is equality check
console.log(null >= 0); // here true because comparison converts it into int
// we infer that equality check and comparison are different as equality check doesn't 
// change the type but comparison does
console.log(undefined == 0);
// All the conditions are false
// Now === this is used for strict check as it also matches the datatype strictly
console.log("2" === 2);