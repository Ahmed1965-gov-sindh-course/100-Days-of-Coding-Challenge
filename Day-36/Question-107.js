"use strict";
/*
Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
*/
function isDivisibleBy2And3(number) {
    return (number % 2 === 0 && number % 3 === 0);
}
console.log(isDivisibleBy2And3(5));
