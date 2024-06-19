"use strict";
/*
Q59 - Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
*/
function addNumber(addNum) {
    return function (number) {
        return addNum + number;
    };
}
const addFive = addNumber(5);
console.log(addFive(10));
