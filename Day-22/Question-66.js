/*
Q66 - Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.
*/
//creating a boolean function that check two numbers 
var k = 9;
var l = 5;
function checkBoolean(k, l) {
    return k && l;
    //checking numbers
}
if (l != k) {
    console.log("".concat(l, " is not equal to ").concat(k, ": the boolean value is ").concat(checkBoolean(true, false), " \n"));
}
else if (l > k) {
    console.log("".concat(l, " is not Greater to ").concat(k, ": the boolean value is ").concat(checkBoolean(true, false), " \n"));
}
else if (l < k) {
    console.log("".concat(l, " is less than ").concat(k, ": the boolean value is ").concat(checkBoolean(true, false), " \n"));
}
else if (l === k) {
    console.log("".concat(l, " is not equal to ").concat(k, ": the boolean value is ").concat(checkBoolean(true, false), " \n"));
}
else {
    console.log("".concat(checkBoolean(true, false), " and ").concat(checkBoolean(true, false), " are not satisfying any condition"));
}
// console.log(checkBoolean(true,false));
