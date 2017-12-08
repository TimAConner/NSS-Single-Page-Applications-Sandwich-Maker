"use strict";

const sandwich = require("./sandwich");
const view = require("./sandwichView");



module.exports.createPage = () => {
    view.createDropDown(sandwich.getParts());
    activateSelect();
};

const activateSelect = () => {
    let selects = [...document.getElementsByTagName("select")];

    selects.forEach((element) => {
        element.addEventListener("change", () => {
            let ingredient = element.options[element.selectedIndex].id;
            let ingredientCategory = element.id;
            let price = +sandwich.getParts()[element.id].add(ingredient);
            
            sandwich.setPrice(price, ingredientCategory);
            view.viewPrice(sandwich.getTotalPrice());
        });
    });
};

