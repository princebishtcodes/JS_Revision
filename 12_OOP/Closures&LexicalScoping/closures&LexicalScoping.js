// function inIt() {
//     let userName = 'princebisht212';
//     function displayName() {
//         console.log(userName);
//     }
//     displayName();
// }

// inIt();

// // Here lexical scoping means that child function gets the access of parent variable inside a parent function.

// function inIt() {
//     let userName = 'princebisht212';
//     function displayName() {
//         let secret = "PriyanshuisGay"
//         console.log(userName);
//     }
//     displayName();

//     function displayName2() {
//         console.log(userName);
//         // console.log(secret) Here it is visible that parent has access of child, and child also have access of parent, but siblings can't share it...
//     }
//     displayName2();
// }

// // inIt();


// Closure

// function inIt() {
//     let userName = 'princebisht212';
//     function displayName() {
//         console.log(userName);
//     }
//     return displayName();
// }
// const display = inIt()
// inIt();

// Closure means that if child fn is returned then, also whole lexical scope returns with the function...

// Practical Use Case

// const orange = document.getElementById('orange');
// const green = document.getElementById('green');
// const body = document.querySelector('body');

// orange.addEventListener('click', ()=>{
//     body.style.backgroundColor = "Orange";
// })

// green.addEventListener('click', ()=>{
//     body.style.backgroundColor = "Green";
// })

const orange = document.getElementById('orange');
const green = document.getElementById('green');
const body = document.querySelector('body');

// orange.onclick = function(){
// body.style.backgroundColor = "orange";
// }
// This is lengthy for multiple objects

function onClickHandler(color) {
    return () => {
        body.style.backgroundColor = `${color}`;
    }
}

// This is real usecase of closures

orange.onclick = onClickHandler('Orange');
green.onclick = onClickHandler('Green');
// Here it is visible that color changes without click, we need a new function