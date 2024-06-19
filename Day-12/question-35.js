"use strict";
/*Question 35: Animals: Highlight animals with a common trait.*/
//animals
let animals = ['Dog', 'Cat', 'Horse'];
/*common trait
1.  The Ability to Move
2. The Ability to Ingest Food
3. Advanced Nervous Systems

*/
for (let animal of animals) {
    console.log(animal);
}
animals.forEach(anim => {
    console.log(`${anim} are great pet`);
});
animals.forEach(an => {
    console.log(`The common trait of ${an} are:
1.  The Ability to Move.
2. The Ability to Ingest Food.
3. Advanced Nervous Systems.
`);
});
