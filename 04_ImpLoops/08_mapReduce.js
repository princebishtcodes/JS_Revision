// Map: It executes a provided function once for each array element and returns a new array.
// Syntax: array.map( (currentValue, index, arr) => { // return element for new_array } )

let myNumbers = [1,2,3,4,5,6,7,8,9,10];

// const newNum = myNumbers.map(  (num) => {num+10}  );
// console.log(newNum); // This will return an array of undefined because we didn't return anything from the arrow function. (Rookie Mistake)

const newNum = myNumbers.map(  (num) => {return num+10}  );
// console.log(newNum);

// Basically map creates a new array by performing the operation defined in the arrow function on each element of the original array.

// A way to do the same using traditional forEach loop

const newNum1 = [];
newNum.forEach(  (num1) => {
    return newNum1.push(num1);
}  )
// console.log(newNum1);

// Chaining Functions: We can chain multiple map and filter functions together to perform a series of transformations on an array.

const chainNum = myNumbers.map(  (num3) => num3*10  ).map(  (num3) => num3+1  );
// console.log(chainNum);

// Chaining Functions has many use cases in real world applications.

// Reduce: It executes a reducer function on each element of the array, resulting in a single output value.
// Syntax: array.reduce( (accumulator, currentValue, index, arr) => { // return the updated accumulator }, initialValue )

// Basic Example of Reduce

let numbers = [1,2,3];
// Traditional Function
const myTotal = numbers.reduce(  function(acc, currval) {
    // console.log(`acc: ${acc} , curr: ${currval}`);
    return acc+currval}, 0  );

// console.log(myTotal);
// IIFE Function
const myArr = [1,2,3,4,5];
const myTotal1 = myArr.reduce(
    (acc1, currval1) => {return acc1+currval1}, 0  )
// console.log(myTotal1);

// Real Life Application of Reduce function, "Shopping Cart"

const shoppingCart = [
  {
    item: "Wireless Mouse",
    category: "Electronics",
    price: 25.99,
    quantity: 2
  },
  {
    item: "Mechanical Keyboard",
    category: "Electronics",
    price: 79.99,
    quantity: 1
  },
  {
    item: "Water Bottle",
    category: "Accessories",
    price: 15.49,
    quantity: 3
  },
  {
    item: "Notebook",
    category: "Stationery",
    price: 4.99,
    quantity: 5
  },
  {
    item: "Desk Lamp",
    category: "Home",
    price: 32.5,
    quantity: 1
  },
  {
    item: "Bluetooth Speaker",
    category: "Electronics",
    price: 49.99,
    quantity: 1
  },
  {
    item: "Backpack",
    category: "Accessories",
    price: 45.0,
    quantity: 1
  },
  {
    item: "Pen Set",
    category: "Stationery",
    price: 9.99,
    quantity: 2
  }
];

// Total Cost of Items
const shopCartTotal = shoppingCart.reduce(  (acc, item) => (acc+item.price*item.quantity),0  )
// console.log(`The Total Price is : ${shopCartTotal}`);

// Total Number of Items
const shopCartItems = shoppingCart.reduce(  (acc, item) => (acc+item.quantity), 0  )
// console.log(`The Total Items are ${shopCartItems}`);

// Filtering by Category
const shopCartCat = shoppingCart.filter(  (cat) => cat.category == "Electronics"  )
// console.log(shopCartCat);