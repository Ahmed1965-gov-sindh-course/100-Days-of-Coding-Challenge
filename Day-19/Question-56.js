"use strict";
/*
Q56 - Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
*/
let mixData = [1, 2, "three", 4, "five", 6, "seven", 8, "nine"];
let mixData1 = mixData.map((j) => {
    if (typeof j === 'string') {
        return j;
    }
});
console.log(mixData1);
