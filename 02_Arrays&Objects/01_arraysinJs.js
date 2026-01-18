// Arrays in JavaScripts

const myArr = [0,1,2,3,4,5,6,7];
// const myARR = [1,2,3,4,5,6,7,8,9]
// console.log(myArr[0]); //Indexing starts form 0

// const myHeros = ["Abhishek", "Rohit", "Neeraj"];
// console.log(myHeros[2]);
// const myArr2 = new Array(0,1,2,3,4,5,6);
// console.log(myArr2);

//Methods in Arrays
// myArr2.push(7);//.push() is used to add Element or Number inside the Array at the end
// myArr2.pop();//.pop() is used to remove the Element or Number in Array from the end
// console.log(myArr2);

// myArr2.unshift(9);//.unshift() is used to add element or number in the Start of the Array
// myArr2.shift();//.shift() is used to remove the element from the start in Array
// console.log(myArr2);

// console.log(myArr2.includes(1));//.includes() is used to check whether the element is inside the array or not, it returns Boolean Values
// console.log(myArr2.indexOf(6));//used to check index of given element inside array

// const newArr = myArr2.join();//.join() converts the array into a string
// console.log(newArr);

//Difference between Splice() and Slice() (Often asked in Interviews)

// let myArr2 = [0,1,2,3,4,5,6];
console.log("A : ", myArr);

const myn1 = myArr.slice(1,3);//Slice() function doesn't modify the array, it just passes a shallow copy or copy by value or stack memory to the function
//Also the Slice returns the value of indices from 0 to n-1
console.log("B : ", myn1);

const myn2 = myArr.splice(1,3);//Splice() function does modify the array, it passes the whole array or copy by reference or heap memory to the function
//Also the Slice returns the value of indices from 0 to n
console.log("C : ", myn2);
console.log(myArr); //Look how the values are removed from array, this suggests that the array is modified here