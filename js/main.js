"use strict";

const listaSpesa = ["Vino", "Birra", "Vodka", "Scampi", "Gin"];

const shoppingList = document.getElementById("lista-spesa");

let i = 0;

while(i <= listaSpesa.length - 1){
    let item = document.createElement("li");

    item.innerHTML = listaSpesa[i];

    shoppingList.append(item);

    i++;
}