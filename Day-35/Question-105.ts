/*
Question 105: Simulate a dice roll using JavaScript and return a random integer between 1 and 6.
*/

function diceRoll():number{
    let dice = Math.floor(Math.random()*6)+1;
    return dice;
}
console.log(`The Dice Number is ${diceRoll()}`)
