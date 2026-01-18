// Approach used in Event Listeners
// 1. Using onClick in HTML

// 2. Using onclick in JS

// document.getElementById('owl').onclick = ()=>{
//     alert("Hi! Using JS");
// }

// .on(jQuery)
// attachEvent
// 
// 3. Using addEventListener (Best Way)
// document.getElementById('owl').addEventListener('click', (event) => {
//     console.log(event);
//     // here event which is used as argument in function is an object which has its own properties...
// }, false) // Here false is the default case

// Event Propagation
// Here we have two terms,

// 1st: Event Bubbling, we keep value as false

// document.getElementById('images').addEventListener('click', (event) => {
//     console.log("Ul is Clicked...");
// }, false)

// document.getElementById('owl').addEventListener('click', (event) => {
//     console.log("Owl is Clicked...");
// }, false)

// Bubble starts from center, so therefore, first the element which is image and then the ul, just like a bubble.

// 2nd: Event Capturing, we keep value as true

// document.getElementById('images').addEventListener('click', (event) => {
//     console.log("Ul is Clicked...");
//     event.stopPropagation();
// }, true)

// document.getElementById('owl').addEventListener('click', (event) => {
//     console.log("Owl is Clicked...");
// }, true)

// // Capturing always happens from top to bottom.
// // Now what if we want to stop propagation here, for ul
// // we use the event object property stopPropagation()


// // event.preventDefault() is a event object property which prevents the default use, used in links, forms etc...

// document.getElementById('google').addEventListener('click', (event)=>{
//     event.preventDefault();
//     console.log('You clicked on Google...');
// }, false);

// Project Style Learning

// Create Program such that we click on image and it is removed automatically

document.getElementById('images').addEventListener('click', (event) => {
    // console.log(event.target);
    // It shows us the target html
    // If we want to access the parent element here, we use .parentNode, tagName can be used to get the IMG etc
    if (event.target.tagName === "IMG") {
        let removeIt = event.target.parentNode;
        removeIt.remove();
    }

})