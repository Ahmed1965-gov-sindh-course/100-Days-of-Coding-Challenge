/*Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.*/
//original list of magicians
var magicians = ["Harry Houdini", "David Blaine", "Teller"];
function greatMagicians(magicians) {
    var make_great = [];
    magicians.forEach(function (magician) {
        make_great.push("".concat(magician, " the great"));
    });
    return make_great;
}
var make_great = greatMagicians(magicians.slice());
console.log("Original magician list :");
console.log(magicians);
console.log("Modified magician list :");
console.log(greatMagicians(magicians));
