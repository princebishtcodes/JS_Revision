// create a function to add languages
// Create

function addLanguage(langName) {
    const li = document.createElement('li');
    li.innerHTML = `${langName}`;
    document.querySelector('.language').appendChild(li);
}

addLanguage("Python");
addLanguage("CPP");
addLanguage("Java");

// in an optimized way

function addOptiLang(codeName){
    const element = document.createElement('li');
    element.appendChild(document.createTextNode(codeName));
    document.querySelector('.language').appendChild(element);
}

addOptiLang("GoLang");

// Edit

const secLang = document.querySelector('li:nth-child(2)');
const myLi = document.createElement('li');
myLi.textContent = "C Language";
secLang.replaceWith(myLi);

// Edit/ Replace
const thirdLang = document.querySelector('li:nth-child(3)');
const newElement = document.createElement('li');
newElement.textContent = "Rust";
thirdLang.replaceWith(newElement);

// Remove

const lastLang = document.querySelector("li:last-child");
lastLang.remove();