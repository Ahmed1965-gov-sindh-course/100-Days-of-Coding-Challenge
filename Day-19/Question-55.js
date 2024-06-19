"use strict";
/*
Q55 - Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
*/
let numb = [2, 4, 6, 8, 9];
numb = numb.map((e) => {
    return e * 2;
});
console.log(numb);
