"use strict";
/*
Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.
*/
function greeting() {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    if (hours < 12) {
        console.log("Good Morning");
    }
}
greeting();
