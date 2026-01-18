// JS is a prototype based language which means it is not natively a OOP language.

// JS works on prototypal inheritence, which means it just keep searching to find the null value

// Array --> Object --> Prototype --> null
// String --> Object --> null
// Even, function -> object -> null

// So, in JS everything can be accessed as an object...

// function multiplyByFive(num) {
//     return num * 5;
// }

// console.log(multiplyByFive(3));
// console.log(multiplyByFive.power = 2);
// console.log(multiplyByFive.prototype); // It is also an object here

function createUser(username, score) {
    this.username = username;
    this.score = score;
    return this;
}

// here new methods can also be created

createUser.prototype.increment = function (score) {
    return this.score++;
}

createUser.prototype.printMe = function (score) {
    console.log(`The price of ${this.username} is ${this.score}`);
}

const Chai = new createUser("Chai", 10);
const tea = createUser("Tea", 250);

Chai.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/