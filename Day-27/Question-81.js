"use strict";
/*
Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
*/
function logObject(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key} : ${obj[key]}`);
        }
    }
}
//usage
const persons = {
    name: "Ahmed",
    age: 25,
    city: "Karachi"
};
logObject(persons);
