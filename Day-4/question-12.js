"use strict";
/*Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.*/
let myFriend = ["Ahmed", "Ali", "Sara", "Hassan", "Sayed"];
let messge = `it is my pleasure to meet you.`;
for (let i = 0; i < myFriend.length; i++) {
    console.log(myFriend[i] + " " + messge);
}
