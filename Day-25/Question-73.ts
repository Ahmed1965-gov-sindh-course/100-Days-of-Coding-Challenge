/*
Question 73: Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.
*/

//creating function with let keyword to declare variable and assign value
function assignAndUpdateVariable(){
    let my_name2= "Muhammad";
    console.log("Initial value of my_name2:",my_name2);
    my_name2="Ahmed";
    console.log("Updated value of my_name2:", my_name2);
}
//calling function
assignAndUpdateVariable();