"use strict";
/*
Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
*/
{
    let my_name1 = "Ahmed";
    console.log(my_name1);
    const myAge1 = 25;
    console.log(myAge1);
}
console.log(`out side block scope //error can not find my_name1`);
console.log(`out side block scope //error can not find myAge1`);
