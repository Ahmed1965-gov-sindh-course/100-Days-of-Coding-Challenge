/*
Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.
*/

function identical (name1:string,name2:string):string{
    
    if(name1.toLowerCase() === name2.toLowerCase()){
        return "The strings are identical";
    } else {
        return "The strings are not identical";
    }
    return name1 && name2;
    }
    console.log(identical('hello', "HELLO"));
    
