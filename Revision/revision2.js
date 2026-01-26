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

const thrillerGenre = myBooks.filter((book) => book.genre == "Thriller" && book.publishedYear > 2000);

// console.log(thrillerGenre);

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

// Find out price using reduce

const totalPrice = shoppingCart.reduce((acc, item) => { return acc + (item.quantity * item.price) }, 0);
console.log(totalPrice)

// Total no. of Items

const totalItems = shoppingCart.reduce((acc, item) => { return acc + item.quantity }, 0);
console.log(totalItems);