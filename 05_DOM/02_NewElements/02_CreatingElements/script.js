const div = document.createElement('div');
// can be used to create new Elements in js
console.log(div);
div.className = 'main';
div.id = Math.round(Math.random() * 10 + 1);
div.setAttribute = ("title", "maindiv");
div.style.backgroundColor = 'green';
div.style.padding = "14px";
div.style.borderRadius = "10px";

// div.innerText = "Prince Bisht"
// Optimized Way
const text = document.createTextNode("Prince Bisht");
div.append(text);

document.body.appendChild(div);