"use strict";
/*
Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
*/
let numbers = [1, 12, 5, 25, 10, 15];
function filterNumbers(numbers) {
    return numbers.filter((num) => num > 10);
}
console.log(filterNumbers(numbers)); //[12,25,15]
