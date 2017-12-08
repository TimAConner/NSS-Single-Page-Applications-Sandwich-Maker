"use strict";

let types = {
    "None": 0.00,
    "Pepper Jack": 1.90, 
    "American": 2.50
};

module.exports.getTypes = () => {
    return types;
};

module.exports.addCheese = (cheese) => {
    return types[cheese];
};