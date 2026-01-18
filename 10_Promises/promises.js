// const promiseOne = new Promise((resolve, reject) => {
//     // Do any async tasks like crypto, networking etc
//     setTimeout(() => {
//         console.log("Async Task Completed!");
//         // here it only prints async, because the .then and resolve is not connected
//         resolve();
//         // here resolve is function which connects the resolve with .then
//     }, 1000)
// });
// // Promise Consumption, .then() plays with resolve...
// promiseOne.then(() => {
//     console.log("Promise Consumed!");

// })

// In production its written like this

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Async Task 2 Completed!");
//         resolve()
//     }, 1000);
// }).then(() => {
//     console.log("Promise Resolved!");
// })

// // Here, we see how data comes to a promise and sent through resolve()
// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({ username: "PrinceBisht", password: "PrinceBisht@123", gmail: "princebisht122@gmail.com" });
//     })
// })

// promiseThree.then((user) => {
//     console.log(user);
// })

// Case of Error
// const promiseFour = new Promise((resolve, reject) => {
//     let error = false;
//     if (!error) {
//         setTimeout(() => {
//             resolve({ username: "PrinceBisht", password: "PrinceBisht@123", gmail: "princebisht122@gmail.com" });
//         }, 1000)
//     }
//     else {
//         reject("Error! SomeThing Went Wrong!");
//     }
// })


// // Chaining of .then()
// promiseFour.then((user) => {
//     return user.username;
// }).then((username) => {
//     console.log(username);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => console.log("Promise is Completed!"));

// Async Await Use

// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             resolve({ username: "PrinceBisht", password: "PrinceBisht@123", gmail: "princebisht122@gmail.com" });
//         }
//         else {
//             reject("Error! Something Went Wrong!");
//         }
//     }, 1000)
// });

// async function consumePromise() {

//     try {
//         const promiseCon = await promiseFive;
//         console.log(promiseCon);
//     } catch (error) {
//         console.log("Error is Here!")
//     }
// }

// consumePromise();

// Here it throws an error if it's present, so we need to add a try and catch block

// Using fetch

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://api.github.com/users/princebishtcodes');
//         const data = await response.json();
//         console.log(data);
//     }
//     catch (error) {
//         console.log("E : ", error);
//     }
// }

// getAllUsers();

// using then and catch
// fetch returns a promise
fetch('https://api.github.com/users/princebishtcodes')
    .then((response) => { return response.json() })
    .then((data => {
        console.log(data);
    }))
    .catch(() => console.log("Its an error"));