"use strict";
/*Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.*/
//laptop object
let laptop = {
    make: "Dell",
    model: "Inspire",
    year: 2022,
    describe: function () {
        console.log(`This is a ${this.make} ${this.model} from ${this.year}.`);
    }
};
