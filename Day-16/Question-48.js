"use strict";
/*
Q48 - Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
*/
//creating type of laptops
// type laptop = {
//     brand:string,
//     price:number
// }
// let lenovo:laptop ={
//     brand:"Lenovo",
//     price:50000,
// }
// let apple:laptop = {
//     brand:"apple",
//     price:100000
// }
// let acer:laptop = {
//     brand: "acer",
//     price: 30000
// }
// let lap_tops:laptop[] = [lenovo,apple,acer]
// let lap_top1 = [...lap_tops].sort((n1,n2)=>n1.price-n2.price)
// console.log(lap_top1)
let lap_top2 = [
    {
        brand: "Apple",
        price: 100000,
    }
];
let lap_top3 = [
    {
        brand: "Lenovo",
        price: 50000,
    }
];
let lap_top4 = [...lap_top2, ...lap_top3].sort((a, b) => b.price - a.price);
console.log(lap_top4);
