"use strict";

const sandwich = require("./sandwich");
const view = require("./sandwichView");



module.exports.createPage = () => {
    view.createDropDown(sandwich.getParts());
    activateSelect();
};

const activateSelect = () => {
    // price = 0.00;
    let selects = [...document.getElementsByTagName("select")];

    selects.forEach((element) => {
        element.addEventListener("change", () => {
            let ingredient = element.options[element.selectedIndex].id;
            sandwich.prices[element.id] = 0.00;
            sandwich.prices[element.id] += +sandwich.getParts()[element.id].add(ingredient);
            view.viewPrice(sandwich.prices);
        });
    });
};

