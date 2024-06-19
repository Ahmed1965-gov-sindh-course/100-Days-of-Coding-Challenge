"use strict";
/*Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.*/
//original list of magicians
let magicians = ["Harry Houdini", "David Blaine", "Teller"];
function greatMagicians(magicians) {
    let make_great = [];
    magicians.forEach(magician => {
        make_great.push(`${magician} the great`);
    });
    return make_great;
}
let make_great = greatMagicians(magicians.slice());
console.log("Original magician list :");
console.log(magicians);
console.log("Modified magician list :");
console.log(greatMagicians(magicians));
