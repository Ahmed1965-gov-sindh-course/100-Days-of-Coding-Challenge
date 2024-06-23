/*
Q68 - Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.
*/

//creating float function

function floatNumber(nu1:number,nu2:number):number{
    return parseFloat((nu1*nu2).toFixed(2))
}
console.log(floatNumber(23.4,34.9));
