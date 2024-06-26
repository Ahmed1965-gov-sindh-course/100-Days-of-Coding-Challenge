"use strict";
/*
Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
*/
let myArray3 = [12, 20, 25];
let myArray4 = myArray3.reduce((a, b) => a + b, 0);
console.log(myArray4);
