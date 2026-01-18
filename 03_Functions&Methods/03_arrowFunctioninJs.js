const user = {
    Username: "Prince@123",
    Price: 999,
    Name: "Prince",

    WelcomeMessage : function(){
        console.log(`${this.Username}, Welcome to the Website`); // here (this.) function is used to get the current context of the block scope
        // console.log(this); //Used to check the current context
        
    }
}

// user.WelcomeMessage();
// user.Username = "Priyanshu@123"; //The context is changed
// user.WelcomeMessage(); //This is the benefit of this. as it changes the value with change in context

// console.log(this); //here the context is empty in the form of object, only in node environment
// but in browser console it shows window: in browser the most used datatype is window

function thisFunction(){ //This is the syntax of a normal function
    userName = "Prince@123"
    // console.log(this.userName);  //According to new versions of node, now functions also use this function and it works, in older versions, it doesn't work
}

thisFunction();

// Arrow Function Syntax

const funct1 = () => {
    Username1 = "PrinceBisht123";
    console.log(this.Username1);
}

// funct1();

//syntax
// () => {}
// 1st Way of Using the Arrow Function
const Sum1 = (num1, num2) => {
    return num1+num2;
}

console.log(Sum1(45,46));

// 2nd Way of Using the Arrow Function

const Subs2 = (num1, num2) => num1 - num2;
//no need to write return here
console.log(Subs2(45, 30));

//3rd Way of using the Arrow Function

const Mult3 = (num1, num2) => (num1*num2);
// wrap it inside a parenthesis, use arrow as it is indicating the return value
console.log(Mult3(3,6));
// this is also known as Arrow Implicit Function

// For Objects it is Confusing
const objFunc = (num1) => ({Name: "Prince"}); //should wrap the object in ()
console.log(objFunc());