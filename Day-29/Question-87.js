"use strict";
/*
Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.
*/
let myArr = ["This is typescript, and I am learning it to code better"];
//slicing
myArr.forEach(element => {
    console.log(element.slice(0, 10).trim());
});
