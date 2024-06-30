"use strict";
/*
Question 103: Write a function that returns a random boolean value, true or false.
*/
function randomBoolean() {
    let randomTrueFalse = Math.random() >= 0.5;
    return randomTrueFalse;
}
console.log(randomBoolean()); // Output: true or false
