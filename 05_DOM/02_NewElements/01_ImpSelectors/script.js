const weekDays = document.querySelector('.parent');
// console.log(weekDays);
// console.log(weekDays.children); // It is used to get the children on the parent class, returns a HTML Collection

// console.log(weekDays.children[1].innerHTML);

// for (let index = 0; index < weekDays.children.length; index++) {
//     const element = weekDays.children[index].innerHTML;
//     console.log(element);
    
// }

// weekDays.children[0].style.backgroundColor = "darkcyan";

// console.log(weekDays.firstElementChild); // Used to get the first element child
// console.log(weekDays.lastElementChild); // Used to get the last element child

const dayOne = document.querySelector(".weekdays");
console.log(dayOne);
// console.log(weekDays.parentElement); // parent element
console.log(dayOne.nextElementSibling); // next element sibling(baaju wala)
// console.log("Nodes : ",dayOne.childNodes) used to get node list of all childs