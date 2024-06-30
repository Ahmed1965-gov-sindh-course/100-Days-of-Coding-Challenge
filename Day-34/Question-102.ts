/*
Question 102: Calculate and log the absolute difference between the number -5 and 5.
*/

function calculateDifference(a:number, b:number):number{
    let diff = Math.abs(a-b);
    return diff;
}
let a = 5;
let b = -5;
console.log(`The Absolute Difference between ${a} and ${b} is ` + " " + calculateDifference(a,b));