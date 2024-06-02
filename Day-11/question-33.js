/*Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.*/
//creating an array of numbers
var allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//creating a function to display ordinal numbers
// function ordinalNumbers(allNumbers:number[]){
for (var _i = 0, allNumbers_1 = allNumbers; _i < allNumbers_1.length; _i++) {
    var numbers = allNumbers_1[_i];
    var ordinal = "";
    if (numbers === 1) {
        ordinal = "st";
        console.log("".concat(numbers).concat(ordinal));
    }
    else if (numbers === 2) {
        ordinal = "nd";
        console.log("".concat(numbers).concat(ordinal));
    }
    else if (numbers === 3) {
        ordinal = "rd";
        console.log("".concat(numbers).concat(ordinal));
    }
    else {
        ordinal = "th";
        console.log("".concat(numbers).concat(ordinal));
    }
}
