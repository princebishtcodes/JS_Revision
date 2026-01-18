// Object Literals
// It is making of a Object

const myObj = {
    userName: "PrinceBisht",
    Name: "Prince Bisht",
    isSignedIn: true,

    dbConnected() {
        // console.log(`Username: ${username}`); Here it will give error, because context is not intialized
        // console.log(`Username: ${this.userName}`);
        // console.log(this);
        // Here, this prints the current context which is myObj
    }
}

// console.log(myObj.dbConnected());
// console.log(this) //If we don't have any context, it returns an empty object

// .this is an object used majorly as a prototype fn, its function is to give the context of the variable


// Constructors

// const promiseOne = new Promise(()=>{}); here new is a constructor which creates an object or class

const func1 = (username, name, isLoggedIn) => {
    this.username = username;
    this.name = name;
    this.isLoggedIn = isLoggedIn;
    return this;
}

const userOne = func1('PrinceBisht', "Prince Bisht", true);
// Here it is visible that it overwrites the value, that's why we use new as constructor
const userTwo = func1('Priyanshubisht', "Priyanshu Bisht", false);
console.log(userOne);