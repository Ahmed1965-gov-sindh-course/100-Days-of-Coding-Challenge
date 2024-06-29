"use strict";
/*
Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".
*/
//creating date function
function printCurrentDate() {
    const currentDate = new Date();
    const day = String(currentDate.getDate()); //.padStart(2,'0');
    let month = String(currentDate.getMonth() + 1); //.padStart(2, '0');
    const year = currentDate.getFullYear();
    return `${day}-${month}-${year}`;
}
console.log(printCurrentDate()); // 26-6-2024
