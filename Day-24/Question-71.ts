/*
Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
*/
let my_Name:string = "Ahmed"
my_Name = "Ali" // reassignment is allowed with let
console.log(my_Name);
const myAge:number = 25;
// myAge = 30; // reassignment is not allowed with const

