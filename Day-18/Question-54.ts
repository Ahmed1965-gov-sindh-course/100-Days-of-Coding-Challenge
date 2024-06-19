/*
Q54 - Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
*/
//making list of object keys

interface Label {
    [key:string]:string
}
let userPreference:Label = {
    name:"John",
    occupation: "Software Engineer",
}
console.log(userPreference);