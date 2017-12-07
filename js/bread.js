"use strict";

let types = {
    "None": 0.00,
    "Wheat": 1.90, 
    "Rye": 2.50
};

module.exports.getTypes = () => {
    return types;
};

module.exports.add = (bread) => {
    return types[bread];
};