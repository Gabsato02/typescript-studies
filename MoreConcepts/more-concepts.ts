// CLASSES

class ComicBook {
	private type = 'comicBook'; // Só pode ser acessada dentro da classe
	protected price: number; // Só pode ser acessada dentro da classe e subclasses
	readonly name: string; // Apenas leitura

	constructor(name: string, price: number) {
		this.name = name;
		this.price = price;
	}

	static formatPrice(price: number) { // Só pode ser acessado dentro da classe
		return `R$ ${price}`;
	}

	getType() {
		return this.type;
	}
}

// TUPLAS - são coleções ordenadas de dados com número fixo de elementos e tipos conhecidos
const productTuple: [string, number] = ['Notebook', 2500];
productTuple[0].toLowerCase();

const person = {
	name: 'João',
	age: 30,
} as const; /* O as const infere o tipo literal mais específico possível, e
marca as propriedades como readonly. É útil para garantir que um objeto não 
seja modificado e que suas propriedades tenham os valores exatos especificados. */

// KEY OF 
interface SportsCar {
	name: string;
	max_speed: number;
}

let prop: keyof SportsCar; // let prop: "name" | "max_speed"
