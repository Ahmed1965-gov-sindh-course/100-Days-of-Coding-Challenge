/*Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
 */
//Mr. Jinnah excused to dinner, replacing him with new one
let guest_List:string[] = ["Mohammad Ali Jinnah", "Hamza", "Hassan"];
guest_List.shift()
guest_List.unshift("Mr. jameel");

for(let i=0; i<guest_List.length; i++){
    console.log(`Dear ${guest_List[i]}, you are cordially invited to dinner.`)
}
// console.log(guestList);
