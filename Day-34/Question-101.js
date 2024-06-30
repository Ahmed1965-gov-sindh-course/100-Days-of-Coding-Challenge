"use strict";
/*
Question 101: Generate a random integer between 1 and 10.
*/
function randomNumber() {
    let random = Math.floor(Math.random() * 10) + 1;
    return random;
}
console.log(`The Random Number is ` + " " + randomNumber());
