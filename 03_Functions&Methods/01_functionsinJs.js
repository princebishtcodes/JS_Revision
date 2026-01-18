function sayMyName(){
    console.log("Prince");
}
// sayMyName; //this gives the reference
// sayMyName(); //this gives the call for value

//Function to Add two Numbers
// function twoSum(n1, n2){ //This is not an ideal way of defining function
//     console.log(n1+n2);
// }

// twoSum(34,35);
/*(IMP)
Syntax function Sum(parameters){
    return;
}
sum(arguments)
const func1 = function(n1, n2){
    const sum = n1+n2;
    return sum;
}
*/

//Ideal Way of Defining Function
function twoSum(n1, n2){
    const result = n1+n2;
    return result;
}
// console.log("The sum of Two Numbers is : ", twoSum(34,35)); // its returning undefined

// Give a message after User is Logged in
function isLoggedIn(userName = "Sam"){
    if (!userName){//(userName === undefined) '!' is used for reverting the value
        return `Please Enter a Username`;
    }
    return `${userName} is just Logged In, Have a Nice Day`;
}

// console.log(isLoggedIn("princebishtcodes"));

//*************** Some Practical Applications of Functions*************

function addShoppingCart(val1, val2, ...num1){ //this is Rest Operator
    return num1; //int this case the val1 will get 200, val2 will get 500 and rest in array
}

console.log(addShoppingCart(200, 400, 500)); //Now only 200 will be displayed
// console.log(addShoppingCart(200, 500, 700, 2000)); //insert the value in array due to rest operator

//For Objects in Functions
const newUser = {
    UserName: "Prince@123",
    Price : 99999,
}

function allObjects(newUser){
    console.log(`The User name is ${newUser.UserName} and the Price is ${newUser.Price}`);
}

allObjects({
    UserName: "Priyanshu@123",
    Price : 89999
});
// Arrays in Functions
const allPrice = [1000, 5000, 4800, 7600];
function secondValue(array){
    return array[1];
}

// console.log(secondValue(allPrice));
console.log(secondValue([500, 1300, 750, 7560]));