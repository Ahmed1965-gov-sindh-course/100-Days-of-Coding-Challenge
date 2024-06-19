"use strict";
/*Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.*/
console.log('Unfortunately, the dinner table is not arriving on time, so I can only invite two friend');
let guestList2 = ["Jameel", "Hamza", "Hassan", "Ahmed Khan", "Mirza Yousuf", "Imran Khan"];
while (guestList2.length > 2) {
    let removedGuest = guestList2.pop();
    console.log(`Sorry ${removedGuest} I can't invite you to dinner`);
}
guestList2.forEach(guest => {
    console.log(`\nHello ${guest} Your are still invited to dinner`);
});
