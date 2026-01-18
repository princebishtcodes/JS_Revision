class Prince {
    constructor(username, name, password) {
        this.username = username;
        this.name = name;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`;
    }

    userNameUpper() {
        return `${this.username.toUpperCase()}`
    }
}

const userOne = new Prince('PrinceBisht', 'Prince Bisht', 'PrinceBisht@123');
console.log(userOne.encryptPassword());
console.log(userOne.userNameUpper());