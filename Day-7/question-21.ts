/* Question 21: Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
 */

//declaring an interface for creating objects

interface myObject {
    
    name: string,
    age: number,
    address: string,
    
}

//creating an object
const person:myObject={
    name: "Ahmed",
    age: 30,
    address: "Karachi, Pakistan",

}
