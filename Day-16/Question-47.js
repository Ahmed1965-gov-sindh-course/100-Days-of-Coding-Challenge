"use strict";
/*Q47 - Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.*/
//constructing array of laptops
let laptops = ["Dell", "HP", "Windows"];
//Destructuring Array
let [x, y, z] = laptops;
//printing the variables
console.log(x);
console.log(y);
console.log(z);
