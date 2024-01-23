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
console.log(typeof director); // string

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

// OBJECTS and TYPE
type Movie = {
  title: string;
	release_year: number;
	director: string;
	restricted: boolean;
};

function fillMovieData(data: Movie) {
	return `${data.title}, lançado em ${data.release_year}, dirigido por ${
		data.director
	}${data.restricted ? ' (+18)' : ''}`;
}

console.log(fillMovieData({
  title: 'Halloween',
  release_year: 1978,
  director: 'John Carpenter',
  restricted: true,
}));
