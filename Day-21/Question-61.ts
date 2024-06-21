/*
Q61 - Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
*/
enum CategoryCar {
    car = 'car',
    motorcycles = 'motorcycles',
    trucks = 'trucks',
    
}
function enumFunction(){
    return `I love Honda ${CategoryCar.car}`
}
console.log(`${enumFunction()}`);
