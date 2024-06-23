"use strict";
/*
Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.
*/
let compoundOperators = () => {
    let x = 4;
    x += 2; // x = x + 2; // x = 6
    console.log("After addition: x =", x);
    x -= 3; // x = x - 3; // x = 3
    console.log("After subtraction: x =", x);
    x *= 2; // x = x * 2; // x = 6
    console.log("After multiplication: x =", x);
    x /= 2; // x = x / 2; // x = 3
    console.log("After division: x =", x);
};
compoundOperators();
/*

Explanation:
1. We initialize the variable `x` with the value `4`.
2. We use the compound assignment operator `+=` to add `2` to `x`, resulting in `x = 6`.
3. We use the compound assignment operator `-=` to subtract `3` from `x`, resulting in `x = 3`.
4. We use the compound assignment operator `*=` to multiply `x` by `2`, resulting in `x = 6`.
5. We use the compound assignment operator `/=` to divide `x` by `2`, resulting in `x = 3`.

By using compound assignment operators, we can simplify the arithmetic operations and make the code more readable and concise. The operations are performed on the same variable `x` and do not require reassignment.
*/ 
