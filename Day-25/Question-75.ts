/*
Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.
*/

let compoundOperators = ()=>{
    let x = 4;
    x += 2; // x = x + 2; // x = 6
    console.log("After addition: x =", x);
    x -= 3; // x = x - 3; // x = 3
    console.log("After subtraction: x =", x);
    x *= 2; // x = x * 2; // x = 6
    console.log("After multiplication: x =", x);
    x /= 2; // x = x / 2; // x = 3
    console.log("After division: x =", x);
}
compoundOperators();
