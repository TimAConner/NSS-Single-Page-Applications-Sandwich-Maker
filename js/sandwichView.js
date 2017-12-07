"use strict";

module.exports.createDropDown = (ingredientsArray) => {
    let output = document.getElementById("ingredients");
    
    for(let prop in ingredientsArray){
        let ingredients = ingredientsArray[prop].getTypes();

        let labelDOM = document.createElement("label");
        let labelText = document.createTextNode(prop);
        labelDOM.setAttribute("for", prop);
        labelDOM.appendChild(labelText);

        let selectDOM = document.createElement("select");
        selectDOM.id = prop;
        for(let ingredient in ingredients){
            let option = document.createElement("option");
            option.innerText = ingredient;
            option.id = ingredient;
            selectDOM.appendChild(option);
        }

        output.appendChild(labelDOM);
        output.appendChild(selectDOM);
    }
};

module.exports.viewPrice = (pricesArray) => {
    let totalPrice = 0.00;
    for(let price in pricesArray){
        totalPrice += pricesArray[price];
    }
    document.getElementById("final-order").innerHTML = "$" + totalPrice.toFixed(2);
};