const username = "alice123";

const password = "flatironschool";

let isAuthorized;

if(username === "alice123" && password === "flatironschool") {
    isAuthorized = true
} else {
    isAuthorized = false
}

const loginValidationPhrase = (isAuthorized === true) ? "Welcome " + username + "!" : "Invalid username or password";

const randomNumber = Number.parseInt((Math.random()) + 1);
console.log("num", randomNumber);

const luckyNumberPhrase = `Your lucky number is ${randomNumber}!`;

