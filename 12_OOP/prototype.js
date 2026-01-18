// Target
// const myName = "Prince   ";
// console.log(myName.trueLength())
// It returns the true length in proper wording and removed white spaces

const myHeros = ["Thor", "Superman"];

const myHerosObj = {
    Thor: "Hammer",
    Spiderman: "Sling",
    CapAmerica: "Shield",
    Captain: function () {
        console.log(`His Power is ${this.CapAmerica}`)
    }
}

// Here to declare new method, we can directly use object, cuz its like parent

Object.prototype.Prince = function () {
    console.log(`Everyone has Prince Property`);
}

// myHerosObj.Prince();

// If we only do it on Array then,
Array.prototype.heyPrince = function () {
    console.log(`Prince is Saying Hi!`);
}
myHeros.heyPrince();
// myHerosObj.heyPrince();
// So it only works on Array


// Inheritence

const user = {
    username: "Prince",
    loggesIn: true
}

const Teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TAsupport = {
    func: 'Make Assignments',
    fullTime: true,
    // If we want to combine the properties, we use __proto__ key
    __proto__: Teacher
}

Teacher.__proto__ = user;
// But this is old way of doing this
// New way is using Object.setPrototypeof()
Object.setPrototypeOf(teachingSupport, Teacher);


// Target
const myName = "Prince   ";

String.prototype.trueLength = function(){
    console.log(`The True Length of String is ${this.trim().length}`);
}
console.log(myName.trueLength())
// It returns the true length in proper wording and removed white spaces