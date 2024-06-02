/*Question 35: Animals: Highlight animals with a common trait.*/
//animals
var animals = ['Dog', 'Cat', 'Horse'];
/*common trait
1.  The Ability to Move
2. The Ability to Ingest Food
3. Advanced Nervous Systems

*/
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
animals.forEach(function (anim) {
    console.log("".concat(anim, " are great pet"));
});
animals.forEach(function (an) {
    console.log("The common trait of ".concat(an, " are:\n1.  The Ability to Move.\n2. The Ability to Ingest Food.\n3. Advanced Nervous Systems.\n"));
});
