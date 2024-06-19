/*
Q57 - Find the Average Grade: Given a list of grades, calculate the average grade.
*/
let grades:number[]=[85, 92, 78, 90, 82];
let averageGrade:number=grades.reduce((acc,curr)=>acc+curr,0)/grades.length;
console.log(averageGrade)