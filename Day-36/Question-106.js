"use strict";
/*
Question 106: Determine if a given year is a leap year using comparison operators.
*/
let year = 2025;
let isLeapYear = false;
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            isLeapYear = true;
        }
    }
    else {
        isLeapYear = true;
    }
}
console.log(`${year} is ${isLeapYear ? 'a leap year' : 'not a leap year'}`);
