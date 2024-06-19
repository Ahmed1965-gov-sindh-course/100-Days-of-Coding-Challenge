"use strict";
/*Question 32: Checking Usernames: Ensure uniqueness in usernames.*/
let currentUsers = ["user1", "admin", "user3", "user4", "user5"];
let newUsers = ["User1", "User6", "user7", "admin", "User9"];
//creating function to check if username is unique
function checkUsername(currentUsers, new_user) {
    let currentUsersLowerCase = currentUsers.map(i => i.toLocaleLowerCase());
    for (const newUsers of new_user) {
        const newUsersLowerCase = newUsers.toLowerCase();
        if (currentUsersLowerCase.includes(newUsersLowerCase)) {
            console.log(`${currentUsers}  already exists. Please enter a new username`);
        }
        else {
            console.log(`${newUsers} is available`);
        }
    }
}
checkUsername(currentUsers, newUsers);
// tsc returning an error in question 32. to fix it use command: tsc question-32.ts --target 2016 && node question-32.js 
