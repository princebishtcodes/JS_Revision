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

console.log(thrillerGenre);