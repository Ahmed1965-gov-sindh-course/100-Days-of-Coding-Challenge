/*Question 41: Magicians: Display magician names from an array.*/
//naming famous magicians 
var famousMagicians = ["David Copperfield", "Penn Jillette", "Teller"];
//printing famous magicians
function showMagicians(famousMagicians) {
    for (var _i = 0, famousMagicians_1 = famousMagicians; _i < famousMagicians_1.length; _i++) {
        var famous = famousMagicians_1[_i];
        console.log("".concat(famous));
    }
}
showMagicians(famousMagicians);
