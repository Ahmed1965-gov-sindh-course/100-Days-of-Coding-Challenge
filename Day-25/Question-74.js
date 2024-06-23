"use strict";
/*
Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.
*/
function swappingVariables(a1 = 5, b1 = 10) {
    let a2 = 5; // = a as per question
    let b2 = 10; // = b as per question
    console.log("Initial values: a =", a2, "and b =", b2);
    let temp = a2;
    a2 = b2;
    b2 = temp;
    console.log("Swapped values: a =", a2, "and b =", b2);
    function swappingVariablesByAddingAndSubtracting(a3 = 5, b3 = 10) {
        b3 = b3 - a3;
        a3 = a3 + b3;
        console.log(`The function "swappingVariablesByAddingAndSubtracting"\n`);
        console.log(`Initial Value of a3 is : ${a3} and b3 is : ${b3}`);
    }
    swappingVariablesByAddingAndSubtracting();
}
swappingVariables();
