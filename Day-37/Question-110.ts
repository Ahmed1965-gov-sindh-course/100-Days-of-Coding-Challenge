/*
Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
*/

let gradeA:number = 100;
let gradeB:number = 70;
let gradeC:number = 60;
let gradeD:number = 50;
let gradeF:string = "Fail";

function assignGrade(score:number):string{
    if (score >= gradeA){
        return "A";
    } else if (score >= gradeB && score < gradeA){
        return "B";
    } else if (score >= gradeC && score < gradeB){
        return "C";
    } else if (score >= gradeD && score < gradeC){
        return "D";
    } else {
        return gradeF;
    }
}
console.log(`You got grade : ${assignGrade(85)}`);