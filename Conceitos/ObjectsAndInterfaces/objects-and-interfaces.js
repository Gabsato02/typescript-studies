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
    // Uma função que não retorna nada, tem o retorno do tipo void.
    console.log(`Inputed: ${value}`);
}
function neverFunction(message) {
    // Uma função que retorna um erro ou uma interrupção de execução do código, possui o tipo never.
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
/* UNKNOWN PARAMETER - um tipo de variável que é desconhecido, similar ao Any, mas que
permite o uso da variável apenas por meio de TYPE GUARDS.
*/
function typeGuard(value) {
    if (typeof value === 'string') {
        // TYPE GUARD
        return value.toUpperCase();
    }
    return value;
}
typeGuard('Typescript');
typeGuard(200);
/* ARRAY - para verificar o tipo de um array, usa-se o instanceof Array ou o
Array.isArray(). Se tentar com o typeof, o tipo retornado será object. */
const array = [1, 2, 3];
console.log(typeof array); // object
console.log(Array.isArray(array)); // true
console.log(array instanceof Array); // true
/* TYPE PREDICATE - é uma forma de checagem de tipo quando não se possui certeza
de um tipo.

No caso abaixo, a função handleData usa a função isString para verificar o tipo de data.
Porém, o TypeScript não executa funções, portanto, é uma forma informar o Typescript
que o retorno booleano da função isString é uma asserção de tipo.
*/
function isString(value) {
    return typeof value === 'string';
}
function handleData(data) {
    if (isString(data)) {
        return data.toLocaleLowerCase();
    }
}
/* TYPE SAFETY - exemplo

Assegurando que os dados recebidos são uma instância da classe Product,
para então poder executar o método realPrice.

*/
function isProduct(data) {
    //  TYPE PREDICATE
    return data instanceof Product;
}
function handleProduct(data) {
    if (isProduct(data)) {
        // TYPE GUARD
        console.log(data.realPrice());
    }
}
const phone = new Product('Samsung M5', 800);
handleProduct(phone);
/* TYPE ASSERTION - uma forma de indicar ao TS qual o tipo de dado esperado.
Deve ser evitado, pois está sujeito a erros/enganos.

O tipo indicado deve ser relacionado de alguma forma, ou seja, não é possível
indicar que um HTMLElement será uma string.

Pode ser usado para indicar o tipo de um dado any, como o retorno de uma API.

Também existe o ASSERTION OPERATOR (!), que serve pra indicar que algo não possui
a possibilidade de ser nulo ou indefinido.

*/
const video = document.querySelector('.player'); // TYPE ASSERTION e suas sintaxes
const video2 = document.querySelector('.player');
const video3 = document.querySelector('.player');
const video4 = document.querySelector('.player');
video4?.volume;
document.querySelector('a').href = 'https://google.com'; // ASSERTION OPERATOR
/* DESESTRUCTURING

Abaixo um exemplo de desestruturação de objeto onde o tipo é inferido.

const { variavel }: { variavel: string } = objeto;

Abaixo a mesma lógica, mas com o uso de uma classe.
*/
function desestructureData({ name, price }) {
    console.log(name.toLowerCase(), price);
}
desestructureData(phone);
