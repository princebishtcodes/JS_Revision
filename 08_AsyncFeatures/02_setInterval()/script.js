// setInterval(), also asks for a reference or callback function, and time to that...
// function time(str){
//     const date = new Date();
//     console.log(str, date.toLocaleTimeString());
// }
// const stop = setInterval(time, 1000, "hi");
// clearInterval(stop);


// Now the question is that when we click, start it should start, and when we click stop, it should stop...

const start = document.getElementById('start');
const stop = document.getElementById('stop');

const changeText = document.querySelector('h1');


// changeText.textContent = time;

function secTime() {
    const date = new Date();
    const time = date.toLocaleTimeString();
    changeText.innerHTML = time;
}

start.addEventListener('click', () => {
    const stopTime = setInterval(secTime, 1000);
    stop.addEventListener('click', () => {
        clearInterval(stopTime);
    })
})
