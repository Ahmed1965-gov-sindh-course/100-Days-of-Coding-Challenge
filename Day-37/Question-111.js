"use strict";
/*
Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
*/
let age = 20;
function categorizeAge(age) {
    if (age == 10) {
        console.log("The person is a child.");
    }
    else if (age == 12) {
        console.log("The person is a teenager.");
    }
    else if (age == 18) {
        console.log("The person is an adult.");
    }
    return age;
}
categorizeAge(12);
