/*Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
 */
//Mr. Jinnah excused to dinner, replacing him with new one
let guestList:string[] = ["Mohammad Ali Jinnah", "Hamza", "Hassan"];
guestList.shift()
guestList.unshift("Mr. jameel");

for(let i=0; i<guestList.length; i++){
    console.log(`Dear ${guestList[i]}, you are cordially invited to dinner.`)
}
// console.log(guestList);
