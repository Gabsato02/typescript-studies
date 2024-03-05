"use strict";
// CLASSES
class ComicBook {
    type = 'comicBook'; // Só pode ser acessada dentro da classe
    price; // Só pode ser acessada dentro da classe e subclasses
    name; // Apenas leitura
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    static formatPrice(price) {
        return `R$ ${price}`;
    }
    getType() {
        return this.type;
    }
}
// TUPLAS - são coleções ordenadas de dados com número fixo de elementos e tipos conhecidos
const productTuple = ['Notebook', 2500];
productTuple[0].toLowerCase();
const person = {
    name: 'João',
    age: 30,
}; /* O as const infere o tipo literal mais específico possível, e
marca as propriedades como readonly. É útil para garantir que um objeto não
seja modificado e que suas propriedades tenham os valores exatos especificados. */
let prop; // let prop: "name" | "max_speed"
