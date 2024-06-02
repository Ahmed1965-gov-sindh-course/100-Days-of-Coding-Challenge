/*Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.*/
var stageOfLife = function (age, stage) {
    if (age < 2) {
        stage = "Baby";
    }
    else if (age < 4) {
        stage = "Toddler";
    }
    else if (age < 13) {
        stage = "Kid";
    }
    else if (age < 20) {
        stage = "Teenager";
    }
    else if (age <= 65) {
        stage = "Adult";
    }
    else {
        stage = "Elder";
    }
    return stage;
};
console.log(stageOfLife(10, ""));
