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
var num1 = 10;
var num2 = 5;
if (num1 > num2) {
    console.log("\n".concat(num1, " is greater than ").concat(num2));
}
var num3 = 20;
var num4 = 10;
if (num3 > num4) {
    console.log("".concat(num4, " is less than ").concat(num3));
}
var num5 = 20;
var num6 = 10;
if (num5 >= num6) {
    console.log("".concat(num5, " is greater or equal to ").concat(num6));
}
var num7 = 20;
var num8 = 10;
if (num8 <= num7) {
    console.log("".concat(num8, " is less or equal to ").concat(num7));
}
var num9 = 10;
var num10 = 10;
if (num9 === num10) {
    console.log("".concat(num9, " is equal to ").concat(num10));
}
var num11 = 20;
var num12 = 10;
if (num11 !== num12) {
    console.log("".concat(num11, " is not equal to ").concat(num12));
}
