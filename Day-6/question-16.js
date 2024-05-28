/*Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.*/
// adding more guest to guest list
var guestList = ["Jameel", "Hamza", "Hassan"];
guestList.push("Ahmed Khan", "Miraz Yousuf", "Imran Khan");
var guestMess = "Found a bigger table and inviting mor guest";
for (var i = 0; i < guestList.length; i++) {
    console.log(guestList[i] + " " + guestMess);
}
