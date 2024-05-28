/*Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”*/
// transport array
var transport = ["car", "bike", "bus", "train"];
var myStatement = "I would like to own a Honda ";
for (var i = 0; i < transport.length; i++) {
    console.log(myStatement + transport[i - 1]);
}
