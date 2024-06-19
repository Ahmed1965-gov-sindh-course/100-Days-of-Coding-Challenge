"use strict";
/*Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
*/
//preparing the guest list
let gustList = ["Mohammad Ali Jinnah", "Hamza", "Hassan"];
//inviting the guest list
let guestMessage = `I Would like to invite you on Dinner.`;
for (let i = 0; i < gustList.length; i++) {
    console.log(`Dear Mr. ${gustList[i]} ${guestMessage}`);
}
