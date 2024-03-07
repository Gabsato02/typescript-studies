"use strict";
// TYPE ANNOTATIONS - indicar o tipo de uma variável ou expressão
const product = 'Movie';
const movie = {
    title: 'Lord of the Rings',
    budget: 93000000,
};
// INFERENCE - o TypeScript identifica o tipo da variável em sua declaração
const director = 'Peter Jackson';
typeof director; // string
/* OBS: para declarações de variáveis, em boa parte dos casos, não é necessário
anotar o tipo. Sempre anotar ao lidar com parâmetros e retornos de funções. */
function calculateBoxOffice(ticketPrice, soldTickets) {
    return ticketPrice * soldTickets;
}
calculateBoxOffice(15, 1000);
// UNION TYPES - descreve um valor que pode ter vários tipos (evitar usar no retorno)
let releaseDate;
function isOldMovie(releaseYear) {
    const currentYear = new Date().getFullYear();
    const age = currentYear -
        (typeof releaseYear === 'number' ? releaseYear : Number(releaseYear));
    return age >= 20;
}
;
function fillMovieData(data) {
    return `${data.title}, lançado em ${data.release_year}, dirigido por ${data.director}${data.restricted ? ' (+18)' : ''}`;
}
fillMovieData({
    title: 'Halloween',
    release_year: 1978,
    director: 'John Carpenter',
    restricted: true,
});
// ARRAYS
const numbers = [10, 20, 30, 40];
function biggerThan(data, comparison) {
    return data.filter(n => n > comparison);
}
function filterNumbers(data) {
    return data.filter(item => typeof item === 'number');
}
function printCar(car) {
    console.log(car.horse_power);
}
