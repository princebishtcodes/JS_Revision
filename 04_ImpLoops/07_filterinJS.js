const myHeros = ["Captain America", "Hulk", "Thor"];

myHeros.forEach(   (items) => {
    // console.log(items);
}   )

// The problem with forEach is that it does not return anything, so it's values cannot be stored in a variable for later use.

// Here the functions like filter, map, reduce come into play. These functions return values and can be stored in variables for later use.

// Filter: It filters out items which meet certain criteria and returns a new array.
// Syntax: array.filter( (currentValue, index, arr) => { // return condition } )

let myNums = [1,2,3,4,5,6,7,8,9,10];

const numbers = myNums.filter(   (num) => num > 4   );
// console.log(numbers);

// A rookie mistake here can be that if we use curly braces in the arrow function, we need to explicitly use the return statement.

const numbers2 = myNums.filter(   (num) => {
    // num > 4; // This will return undefined, don't forget to use return
    return num > 4;
}   )
// console.log(numbers2);

// A way to do the same using traditional forEach loop

const num2 = [];

myNums.forEach(  (num1) => {
    if(num1 > 4){
        num2.push(num1);
    }
}  )
// console.log(num2);

// Practice of Filters

const myBooks = [
  {
    name: "The Silent Patient",
    genre: "Thriller",
    edition: "3rd",
    publishedYear: 2019
  },
  {
    name: "Gone Girl",
    genre: "Thriller",
    edition: "2nd",
    publishedYear: 2012
  },
  {
    name: "The Girl on the Train",
    genre: "Thriller",
    edition: "4th",
    publishedYear: 2015
  },
  {
    name: "Dune",
    genre: "Science Fiction",
    edition: "6th",
    publishedYear: 1965
  },
  {
    name: "Neuromancer",
    genre: "Science Fiction",
    edition: "5th",
    publishedYear: 1984
  },
  {
    name: "The Martian",
    genre: "Science Fiction",
    edition: "3rd",
    publishedYear: 2014
  },
  {
    name: "Atomic Habits",
    genre: "Self-Help",
    edition: "5th",
    publishedYear: 2018
  },
  {
    name: "The Subtle Art of Not Giving a F*ck",
    genre: "Self-Help",
    edition: "3rd",
    publishedYear: 2016
  }
];
// For Genre Specific Filtering and Published Year
const thrillerGenre = myBooks.filter(  (book) => {
    return book.genre == "Thriller" && book.publishedYear >= 2000;
}  )
// console.log(thrillerGenre);
// For Published Year Specific Filtering
const publishYear = myBooks.filter(  (books) => books.publishedYear <= 2000  )
// console.log(publishYear);