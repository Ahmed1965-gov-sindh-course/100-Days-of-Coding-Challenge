"use strict";
/*
Q58 - Write a simple program that can take lots of scores and find their average.
*/
let score = [120, 20, 300, 290];
let sumOfScore = score.reduce((a, b) => a + b, 0);
console.log(sumOfScore / score.length);
