"use strict";
// DEFINIÇÃO DE CLASSE
class Product {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    realPrice() {
        return `R$ ${this.price}`;
    }
}
// INSTÂNCIA
class Book extends Product {
    author;
    constructor(name, price, author) {
        super(name, price); // acessando propriedades da herança da classe
        this.author = author;
    }
}
const book = new Book('The Lord of the Rings', 80, 'J. R. R. Tolkien');
console.log(book instanceof Book); // true - Verificando se o objeto é uma instância de uma classe
console.log(book instanceof Product); // true - Pois a classe Book herda de Produto
/* DOM

Os elementos do DOM, possuem uma herança de várias classes:

EventTarget > Node > Element > HTMLElement > HTMLAnchorElement (classe específica)

Ao verificar uma dessas classes com o instaceof, é possível acessar métodos e propriedades dela

*/
const a = document.querySelectorAll('a');
console.log(a instanceof NodeList); // true
/* GENERIC & EXTENDS

function functionName<Generic>(arg: Generic) {}

O Generic funciona como o tipo Any, porém não ocorre a perda da informação de
qual tipo foi passado como parâmetro. Dessa forma, ainda é possível acessar métodos e
propriedades do tipo do parâmetro, através da inferência feita pelo compilador.

O Extends indica que um tipo genérico deve herdar de uma interface específica.

*/
function extractText(element) {
    return {
        text: element.innerText,
        element,
    };
}
const anchor = document.querySelector('a');
if (anchor)
    console.log(extractText(anchor).element.href);
// FUNCTIONS
function voidFunction(value) {
    console.log(`Inputed: ${value}`);
}
function neverFunction(message) {
    throw new Error(message);
}
function normalize(value) {
    if (typeof value === 'string') {
        return value.trim().toLowerCase();
    }
    else {
        return value.map((v) => v.trim().toLowerCase());
    }
}
