"use strict";

let types = {
    "None": 0.00,
    "Ketchup": 1.90, 
    "Mayonnise": 2.50
};

module.exports.getTypes = () => {
    return types;
};

module.exports.addCondiments = (condiments) => {
    return types[condiments];
};