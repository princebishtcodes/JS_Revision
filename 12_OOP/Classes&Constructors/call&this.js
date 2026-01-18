function setUsername(username) {
    this.username = username;
    console.log("called");
    
}

function createUsername(username, password, email) {
    this.email = email;
    this.password = password;

    setUsername.call(this, username); // Here, the function is not called, .call() is used
}

const chai = new createUsername('PrinceBisht@123', "PrinceBisht@123", "prince@google.com");
console.log(chai);
