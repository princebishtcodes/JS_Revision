// setTimeout(()=>{
//     console.log("Prince");
// }, 2000)

// So here setTimeout funtions ask for a reference and time in ms...

// const name = ()=>{
//     console.log("Prince");
// }

function name() {
    console.log("Prince");
}

setTimeout(name, 2000);

function nameChange() {
    document.querySelector('h1').textContent = "Best JS Series";
}

const clear = setTimeout(nameChange, 3000);

// What if we want to remove timeout, here clearTimeout() is used;

// clearTimeout(clear); // It asks for reference of setTimout.

document.querySelector('#stop').addEventListener('click', () => {
    clearTimeout(clear);
    console.log('Stopped!');
    
})