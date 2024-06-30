"use strict";
/*
Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
*/
let gradeA = 100;
let gradeB = 70;
let gradeC = 60;
let gradeD = 50;
let gradeF = "Fail";
function assignGrade(score) {
    if (score >= gradeA) {
        return "A";
    }
    else if (score >= gradeB && score < gradeA) {
        return "B";
    }
    else if (score >= gradeC && score < gradeB) {
        return "C";
    }
    else if (score >= gradeD && score < gradeC) {
        return "D";
    }
    else {
        return gradeF;
    }
}
console.log(`You got grade : ${assignGrade(85)}`);
