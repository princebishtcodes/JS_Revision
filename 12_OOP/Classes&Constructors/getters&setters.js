class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return `${this._email}@prince.com`;
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return `${this._password.toUpperCase()}`;
    }

    set password(value) {
        this._password = value;
    }
}

// The use of getters and setters to restrict the access
// Getters and Setters are used in pairs

const newUser = new User('princebisht@google.com', 'abc@123');
console.log(newUser.password)
console.log(newUser.email)