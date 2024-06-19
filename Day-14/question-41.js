"use strict";
/*Question 41: Magicians: Display magician names from an array.*/
//naming famous magicians 
let famousMagicians = ["David Copperfield", "Penn Jillette", "Teller"];
//printing famous magicians
function showMagicians(famousMagicians) {
    for (let famous of famousMagicians) {
        console.log(`${famous}`);
    }
}
showMagicians(famousMagicians);
