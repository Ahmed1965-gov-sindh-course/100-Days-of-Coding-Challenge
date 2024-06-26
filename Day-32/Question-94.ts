/*
Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.
*/

let myArray = ['apple', 'banana', 'orange', 'kiwi', 'mango'];

let myArray2 = myArray.map((item) => item.length);

console.log(myArray2); //[5,6,6,4,5]
