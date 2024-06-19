"use strict";
/*Question 34: Pizzas: Share your favorite pizzas and express your love for them.*/
const pizzas = ['Pepperoni', 'Hawaiian', 'BBQ Chicken'];
for (let pizza of pizzas) {
    console.log(`${pizza} Pizza`);
}
pizzas.forEach(pizz => {
    console.log(`I love ${pizz} pizza`);
});
console.log(`I really love pizzas,
I love Cheese, Veggie & Sauce Pizzas too. `);
