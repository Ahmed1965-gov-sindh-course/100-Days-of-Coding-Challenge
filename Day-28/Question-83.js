"use strict";
/*
Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.
*/
//creating upper and lower case function
function convertUpperAndLowerCase(str) {
    let str1 = str.toUpperCase();
    let str2 = str.toLowerCase();
    console.log(`${str1} `);
    console.log();
    console.log(`${str2}`);
}
convertUpperAndLowerCase("Hello");
