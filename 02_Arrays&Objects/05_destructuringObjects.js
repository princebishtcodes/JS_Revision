const myPerson = {
    name: "Prince",
    age: 18,
    Uid: 2511758
};

const { name, age, Uid } = myPerson;

// Earlier we had to do myPerson.name, but now name has the value.
console.log(name);
// Destructuring is extracting the values and then storing them in variables

// 1. Renaming Variables
const myMarks = {
    Subject: "Maths",
    Marks: 98
}
const { Subject: Course, Marks: Score } = myMarks;

// Rule here is const {oldKeyName : newVarName}
console.log(Course);

// 2. Default Fallbacks
const settings = {
    theme: "dark"
}

const { theme, fontSize = 16 } = settings;
console.log(fontSize);

// 3. Nested Objects Destructuring
const student = {
    profile: {
        nameUid: "Prince",
        branch: "Engineering"
    },

    marks: {
        maths: 98,
        cs: 95
    }
}

const {
    profile: { nameUid, branch },
    marks: { maths }
} = student;

// 4. Nested Object Destructuring with Var Name Changing

const weather = {
    location: {
        name: "Mumbai"
    },
    current: {
        temp_c: 30
    }
};

const {
    location: { name: City },
    current: { temp_c: temperature }
} = weather;

console.log(temperature);


// Practice Questions

const book = {
    info: {
        title: "Atomic Habits",
        author: "James Clear"
    },
    price: 499
};

const {
    info: { title: bookName, author: writer },
    price: bookPrice
} = book;

console.log(bookName)
console.log(writer)
console.log(bookPrice)

const data = {
    user: {
        id: 101,
        profile: {
            username: "alpha"
        }
    }
};

const {
    user: { profile: { username: name1 } }
} = data;

console.log(name1);