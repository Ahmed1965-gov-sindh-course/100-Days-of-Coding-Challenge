/*
Question 90: Generating Random Numbers: Write a function that generates a random number between 1 and 10, inclusive.
*/
function generateRandomNumbers(number:number):number{
    let my_Num = Math.floor(Math.random()*10)+1;
    return my_Num;

}
console.log(generateRandomNumbers(1));

