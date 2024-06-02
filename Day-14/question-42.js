/*Question 42: Great Magicians: Add "the Great" to magician names.*/
var famousMagician = ["David Copperfield", "Penn Jillette", "Teller"];
function makeGreat(famousMagician) {
    for (var _i = 0, famousMagician_1 = famousMagician; _i < famousMagician_1.length; _i++) {
        var famous = famousMagician_1[_i];
        console.log("The great magicians ".concat(famous));
    }
}
makeGreat(famousMagician);
