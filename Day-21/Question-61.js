"use strict";
/*
Q61 - Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
*/
var CategoryCar;
(function (CategoryCar) {
    CategoryCar["car"] = "car";
    CategoryCar["motorcycles"] = "motorcycles";
    CategoryCar["trucks"] = "trucks";
})(CategoryCar || (CategoryCar = {}));
function enumFunction() {
    return `I love Honda ${CategoryCar.car}`;
}
console.log(`${enumFunction()}`);
