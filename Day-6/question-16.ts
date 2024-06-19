/*Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.*/

// adding more guest to guest list



let guestList4:string[] = ["Jameel", "Hamza", "Hassan"];

guestList4.push("Ahmed Khan", "Miraz Yousuf", "Imran Khan")

let guestMess="Found a bigger table and inviting mor guest";
for(let i=0;i<guestList4.length;i++){
    console.log(guestList4[i] +" " + guestMess);
}


