// An object in JavaScript is a key-value pair collection, where:
// Keys are strings (called properties).
// Values can be anything: numbers, strings, arrays, functions, or even other objects.

//Literals are the Objects used mostly, it always creates a singleton object(IMP)

const sym1 = Symbol("Key1"); //IMP for Interviews
//To insert the Key inside an Object, the syntax is to use a Square Brace
const jsUser = {
    Name : "Prince",
    "Full Name" : "Prince Bisht",
    [sym1] : "Key1",
    Age : 18,
    EmailId : "princebisht@google.com",
    Location: "Panchkula",
    isLoggedIn : false,
    lastLoggedIn : ["Sunday", "Tuesday", "Friday"]
}

// console.log(jsUser.lastLoggedIn); //This is 1st way but not effective
// console.log(jsUser["EmailId"]); //This is Effective
// console.log(jsUser["Full Name"]);
// console.log(jsUser[sym1]);

jsUser.EmailId = "princebisht@perplexity.com";
// console.log(jsUser);

// Object.freeze(jsUser); //freeze is used to lock the object from any changes
jsUser.EmailId = "princebisht@chatgpt.com"
// console.log(jsUser);

const greeting = function(){
    console.log("Good Evening");
}
console.log(greeting());

const greeting2 = function(){
    console.log(`Good Evening, ${this.Name}, Have a Great day...`);
}
console.log(greeting2());

//Constructors are the Objects which are used as custom objects and they can be used in multiple ways just like Functions