/*Question 20: Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
*/
//mountains
var citiesMountainsRivers = ["K2", "Everest", "Nanga Parbat", "Kangchenjunga", "Manaslu", "River Indus", "River Sutlaj", "River Ravi", " River Chunab"];
//printing
console.log("There are ".concat(citiesMountainsRivers.length, " and more even more beautiful cities, rivers & mountains in world "));
citiesMountainsRivers.forEach(function (element) {
    console.log("\n" + "" + element.trim());
});
