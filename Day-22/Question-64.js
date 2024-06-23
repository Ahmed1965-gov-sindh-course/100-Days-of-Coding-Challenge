"use strict";
/*
Q64 - Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".
*/
//creating a function to combine number and text
function combineNumberText(text, age) {
    return `${text}${age}`;
    //checking user input
}
console.log(combineNumberText("Age: ", 30));
