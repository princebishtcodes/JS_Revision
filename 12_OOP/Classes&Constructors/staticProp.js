class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username is ${this.username}`);
    }
    // Now if we want to stop this action for some particular users, then use static property
    static randomId() {
        return 1233;
    }
}

const newUser = new User('PrinceBisht123');
// console.log(newUser.randomId());

class Teacher extends User {
    constructor(username, password, email) {
        super(username);
        this.username = username;
        this.password = password
        this.email = email;
    }
}

const newTeacher = new Teacher('Prince', '1234457', 'princebi@google.com');
// console.log(newTeacher.randomId());
newTeacher.logMe();
// This tells use that static also blocks the method for the instancesof the main class