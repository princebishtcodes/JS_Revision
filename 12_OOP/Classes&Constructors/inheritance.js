class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username is : ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, password, email) {
        super(username);
        this.username = username;
        this.password = password;
        this.email = email;

    }

    addCourse() {
        console.log(`New Course Added! by ${this.username}`);

    }
}


const newTeacher = new Teacher("princebisht@123", "princebisht@1223", 'princebisht@google.com');
newTeacher.addCourse();
const newUser = new User("PrinceBisht");
newUser.logMe();

console.log(Teacher instanceof User);