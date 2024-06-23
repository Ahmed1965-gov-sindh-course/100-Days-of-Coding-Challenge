/*
Q67 - Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number.
*/
//creating mix-arithmetic function
function mixArithmetic(myn:number,mynstr:string):number{
    //convert mynstr into number
    let mynStr = parseInt(mynstr);
    return myn+mynStr
    
}
console.log(mixArithmetic(10, "4"))