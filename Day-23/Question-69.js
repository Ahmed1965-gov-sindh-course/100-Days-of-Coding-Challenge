"use strict";
/*
Q69 - Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
*/
//function division
function divisionAndReminder(t, s) {
    let div = t / s;
    let rem = t % s;
    return { div, rem };
}
console.log(divisionAndReminder(23, 4));
