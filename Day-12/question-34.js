/*Question 34: Pizzas: Share your favorite pizzas and express your love for them.*/
var pizzas = ['Pepperoni', 'Hawaiian', 'BBQ Chicken'];
for (var _i = 0, pizzas_1 = pizzas; _i < pizzas_1.length; _i++) {
    var pizza = pizzas_1[_i];
    console.log("".concat(pizza, " Pizza"));
}
pizzas.forEach(function (pizz) {
    console.log("I love ".concat(pizz, " pizza"));
});
console.log("I really love pizzas,\nI love Cheese, Veggie & Sauce Pizzas too. ");
