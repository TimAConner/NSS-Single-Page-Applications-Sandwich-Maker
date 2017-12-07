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