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

            let addFunction = `add${ingredientCategory.charAt(0).toUpperCase() + ingredientCategory.slice(1)}`;

            console.log(addFunction);
            console.log(sandwich.getParts()[element.id]);
            let price = +sandwich.getParts()[element.id][addFunction](ingredient);
            
            sandwich.setPrice(price, ingredientCategory);
            view.viewPrice(sandwich.getTotalPrice());
        });
    });
};

