"use strict";
/*
Q62 - Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.
*/
let student1 = {
    name: 'Nabeel',
    age: 21,
    classes: ['typescript', 'php', 'Laravel'],
};
let student2 = {
    name: "Ali",
    age: 23,
    classes: ['React', 'Nextjs', 'Python'],
};
function printStudentInfo(student) {
    return `Name: ${student.name} \n Age : ${student.age} \n Classes: ${student.classes.join(',')} `;
}
console.log(`${printStudentInfo(student1)}\n`);
console.log(`${printStudentInfo(student2)}\n`);
