/*Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.*/
console.log('Unfortunately, the dinner table is not arriving on time, so I can only invite two friend');
var guestList = ["Jameel", "Hamza", "Hassan", "Ahmed Khan", "Mirza Yousuf", "Imran Khan"];
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry ".concat(removedGuest, " I can't invite you to dinner"));
}
guestList.forEach(function (guest) {
    console.log("\nHello ".concat(guest, " Your are still invited to dinner"));
});
