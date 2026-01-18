// //Dates in JavaScript

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// // console.log(myDate.toISOString());
// // console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// // console.log(myDate.toLocaleTimeString());
// // console.log(myDate.toTimeString());
// // console.log(myDate.getHours());
// // These are the Methods but the most effective here is .toDateString()
//.toLocaleString also gives time with date
// console.log(typeof(myDate)); // Date is an Object

let myCurrentDate = new Date(2025, 0 , 17, 12, 6); //format is (Year, Month, Date)
console.log(myCurrentDate); // here the month starts from 0
console.log(myCurrentDate.toLocaleString());

// let myDate1 = new Date("2025-10-12"); //yyyy-mm-dd US Format
let myDate1 = new Date("09-04-2025"); // mm-dd-yyyy Indian Format
console.log(myDate1.toLocaleString());

// Time Stamps (IMP for Quizzes and Time related WebApps)

let timeStamp = Math.floor((Date.now()/1000)); //Answer will always come in milliseconds ms
console.log(timeStamp);
console.log(myDate1.getTime()); //Now these values can be Compared

//Conversion in Second from ms

console.log(myDate1.getMonth() + 1);

let abc = `The month is ${myDate1.getMonth()}.`;
console.log(abc);

console.log(myDate1.toLocaleString('default', {
    weekday: "long"
}
));