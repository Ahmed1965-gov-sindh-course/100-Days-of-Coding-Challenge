"use strict";
/*Question 45: Cars: Create detailed car objects with flexible properties*/
function Car(model, manufacturer, make_year, color) {
    let car = {
        model: model.model,
        manufacturer: manufacturer.manufacturer,
        make_year: make_year.make_year,
        color: color.color,
    };
    return ` ${car.model} ${car.manufacturer} ${car.make_year} ${car.color}`;
}
const myAudi = {
    model: "Audi",
    manufacturer: "Audi",
    make_year: 2020,
    color: "Black"
};
const myBMW = {
    model: "BMW",
    manufacturer: "BMW",
    make_year: 2020,
    color: "Red"
};
console.log(Car(myAudi, myAudi, myAudi, myAudi));
console.log(Car(myBMW, myBMW, myBMW, myBMW));
