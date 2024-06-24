"use strict";
/*
Question 92: Write a function to remove the last element from an array and return the removed element.
*/
function removedLastElement(text) {
    return text.pop(); // The ! operator is used to remove the undefined value from the array
    console.log(text);
}
console.log(removedLastElement(["Apple", "Orange", "Banana"]));
