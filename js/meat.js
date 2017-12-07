"use strict";

let types = {
    "None": 0.00,
    "Turkey": 0.90, 
    "Bacon": 1.50
};

module.exports.getTypes = () => {
    return types;
};

module.exports.add = (meat) => {
    return types[meat];
};