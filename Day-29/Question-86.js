"use strict";
/*
Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.
*/
function checkString(text) {
    let myText = text.toLowerCase();
    if (myText.includes("javascript")) {
        return "true";
    }
    else {
        return "false";
    }
}
console.log(checkString("I love JavaScript")); //true
console.log(checkString("I love TypeScript")); //false
