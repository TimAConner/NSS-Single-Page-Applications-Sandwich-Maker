"use strict";

let types = {
    "None": 0.00,
    "Lettuce": 1.90, 
    "Tomato": 2.50
};

module.exports.getTypes = () => {
    return types;
};

module.exports.add = (veggie) => {
    return types[veggie];
};