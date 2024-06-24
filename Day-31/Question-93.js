"use strict";
/*
Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
*/
let fruits = ["Apple", "Orange", "Banana", "Grapes", "Mango"];
let index = fruits.indexOf("Banana");
// Find the index of "Banana"
fruits[index] = "Mango";
console.log(fruits);
