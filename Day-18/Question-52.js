"use strict";
/*
Q52 - Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.
*/
class phones {
    constructor(brand, model, storage, screenSize, batteryLife) {
        this.brand = brand;
        this.model = model;
        this.storage = storage;
        this.screenSize = screenSize;
        this.batteryLife = batteryLife;
    }
    smart_phone(brand, model, storage, screenSize, batteryLife) {
        return `The smartphone's brand is ${brand}, model is ${model}, storage capacity is ${storage} GB, screen size is ${screenSize} inches, and battery life is ${batteryLife} hours.`;
    }
}
const myPhone = new phones("Samsung", "Galaxy S21", 512, 6.2, 8);
console.log(myPhone.smart_phone("Samsung", "Galaxy S21", 512, 6.2, 8));
