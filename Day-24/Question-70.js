"use strict";
/*
Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.
*/
function printFiveNumberInLoop() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
printFiveNumberInLoop();
//Explanation
/*
1. Block Scope:
The "let" keyword introduces block-scoped variables. This means that the variable i is scoped to the for loop block itself, and it's not visible outside of the loop block. Attempting to access i outside of the loop block will result in an error because i is limited to the scope of the for loop.

2.  let variables are only accessible after their declaration point within the block.
3. The for loop itself is not scoped, so the loop variable i is accessible within the loop block.
*/ 
