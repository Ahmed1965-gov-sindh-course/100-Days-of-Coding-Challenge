/*
Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.
*/
// Function Declaration
function square(a:number):number{
    return a*a;

}
// Function Expression
const square2 = function(a:number){
    return a*a;

}
console.log(square(4));
console.log(square2(4));

