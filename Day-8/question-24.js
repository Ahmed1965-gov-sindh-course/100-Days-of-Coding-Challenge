"use strict";
/*Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons. */
/*Conditional operator are
1. Greater than,
2. Less than,
3. Greater than or equal to,
4. Less than or equal to,
5. Equal to,
6. Not equal to.
*/
//creating Greater Than >
let num1 = 10;
let num2 = 5;
if (num1 > num2) {
    console.log(`\n${num1} is greater than ${num2}`);
}
let num3 = 20;
let num4 = 10;
if (num3 > num4) {
    console.log(`${num4} is less than ${num3}`);
}
let num5 = 20;
let num6 = 10;
if (num5 >= num6) {
    console.log(`${num5} is greater or equal to ${num6}`);
}
let num7 = 20;
let num8 = 10;
if (num8 <= num7) {
    console.log(`${num8} is less or equal to ${num7}`);
}
let num9 = 10;
let num10 = 10;
if (num9 === num10) {
    console.log(`${num9} is equal to ${num10}`);
}
let num11 = 20;
let num12 = 10;
if (num11 !== num12) {
    console.log(`${num11} is not equal to ${num12}`);
}
