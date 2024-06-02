/*Question 30: Hello Admin: Greet users differently, especially 'admin'.*/
//creating an array
var usernames = ['admin', 'John', 'Jane', 'Jack'];
//using for loop
for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log("Hello ".concat(usernames[i], ", thank you for logging in again."));
    }
}
