"use strict";

const parts = {
    bread: require("./bread"),
    meat: require("./meat"),
    condiments: require("./condiments"),
    veggies: require("./veggies"),
    cheese: require("./cheese")
};

module.exports.getParts = () => {
    return parts;
};

module.exports.prices = {
    "meat":  0.00,
    "veggies":  0.00,
    "cheese":  0.00,
    "condiments":  0.00,
    "bread":  0.00,
};

module.exports.setPrice = (value, category) => {
    this.prices[category] = value;
};

module.exports.getTotalPrice = () => {
    let totalPrice = 0.00;
    for(let price in this.prices){
        totalPrice += this.prices[price];
    }
    return totalPrice;
};