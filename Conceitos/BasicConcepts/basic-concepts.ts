// TYPE ANNOTATIONS - indicar o tipo de uma variável ou expressão
const product: string = 'Movie';

const movie: {
	title: string;
	budget: number;
} = {
	title: 'Lord of the Rings',
	budget: 93000000,
};

// INFERENCE - o TypeScript identifica o tipo da variável em sua declaração
const director = 'Peter Jackson';
typeof director; // string

/* OBS: para declarações de variáveis, em boa parte dos casos, não é necessário
anotar o tipo. Sempre anotar ao lidar com parâmetros e retornos de funções. */

function calculateBoxOffice(ticketPrice: number, soldTickets: number): number {
	return ticketPrice * soldTickets;
}

calculateBoxOffice(15, 1000);

// UNION TYPES - descreve um valor que pode ter vários tipos (evitar usar no retorno)
let releaseDate: string | number;

function isOldMovie(releaseYear: string | number): boolean {
	const currentYear = new Date().getFullYear();

	const age =
		currentYear -
		(typeof releaseYear === 'number' ? releaseYear : Number(releaseYear));

	return age >= 20;
}

/* OBJECTS, TYPE and INTERFACE

Em TypeScript, tanto "types" quanto "interfaces" são utilizados para definir tipos de dados,
mas há diferenças sutis entre eles.

Interfaces:
	- As interfaces são mais frequentemente utilizadas para definir contratos para objetos.
		Elas descrevem a forma que um objeto deve ter.
	- Permitem a herança, o que significa que você pode estender uma interface a partir de outra.
	- Podem ser usadas para declarar tipos de objetos, funções, classes e até mesmo arrays.

	Use interfaces quando estiver trabalhando principalmente com objetos e precisar de recursos
	como herança de tipos e extensibilidade para criar contratos claros para estruturas de dados.

Types:
  - Os tipos (types) são mais versáteis e podem ser usados para criar tipos de união, tipos literais,
		tipos condicionais, e outras construções mais avançadas.
  - Permitem criar tipos que não se limitam apenas a objetos, podendo ser usados para definir
		tipos para qualquer valor, inclusive primitivos.

	Use tipos quando precisar de recursos mais avançados ou quando estiver trabalhando com tipos que
	não são exclusivamente objetos. Eles são mais adequados para situações em que você precisa criar
	tipos complexos ou uniões de tipos.
*/
type Director = string;

interface InterfaceMovie {
	title: string;
	release_year: number;
	director: Director;
	restricted: boolean;
	rating?: number; // Propriedade opcional
};

function fillMovieData(data: InterfaceMovie) {
	return `${data.title}, lançado em ${data.release_year}, dirigido por ${
		data.director
	}${data.restricted ? ' (+18)' : ''}`;
}

fillMovieData({
  title: 'Halloween',
  release_year: 1978,
  director: 'John Carpenter',
  restricted: true,
});

// ARRAYS
const numbers = [10, 20, 30, 40];

function biggerThan(data: number[], comparison: number) {
	return data.filter(n => n > comparison);
}

function filterNumbers(data: (string | number)[]) {
	return data.filter(item => typeof item === 'number');
}

// INTERSECTION 
type Car = {
	wheels: number;
	doors: number;
}

type SportCar = Car & {
	// Um type pode ser associado com outro em sua criação
	horse_power: number;
};

function printCar(car: Car & SportCar) { // Ou também na checagem de tipo
	console.log(car.horse_power);
}

// Também é possível adicionar mais propriedades a uma interface, caso necessário
interface Motorbike {
	wheels: 2;
}

interface Motorbike {
	is_chopper: true;
}

