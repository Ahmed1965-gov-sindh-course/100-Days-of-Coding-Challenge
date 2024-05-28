/*Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and title case.*/

//creating a variable to store the name
let name1:string = "asharib ali";
//converting name into upper case

let name2= name1.toUpperCase()
//printing
console.log("Printing Name in Upper Case\t \n" + name2)

//lower case
let name3= name1.toLowerCase()
console.log()
console.log("Printing Name in Lower Case\t \n" + name3)

//title case
let name4:string = name1.charAt(0).toUpperCase() + name1.slice(1)
console.log()
console.log("Printing Name in Title Case\t \n" + name4)