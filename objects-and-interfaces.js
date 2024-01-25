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
// EVENTS
const button = document.querySelector('button');
function handleClick(event) {
    console.log(event);
}
button?.addEventListener('click', handleClick);
