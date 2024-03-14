import Stats from './src/Stats.js';
import { CountList } from './src/countBy.js';
import fetchData from './src/fetchData.js';
import normalizeTransaction from './src/normalizeTransaction.js';

async function getTransactions() {
	try {
		const resp = await fetchData<TransactionAPI[]>(
			'https://api.origamid.dev/json/transacoes.json?'
		);
		if (!resp) return;
		const transactions = resp.map(normalizeTransaction);
		fillTable(transactions);
		fillStats(transactions);
	} catch (err) {
		console.log('Erro', err);
	}
}

function fillList(list: CountList, elementId: string): void {
	const element = document.querySelector(elementId);

	if (element) {
		Object.keys(list).forEach((key) => {
			element.innerHTML += `<p>${key}: ${list[key]}</p>`;
		});
	}
}

function fillStats(transactions: Transaction[]): void {
	const data = new Stats(transactions);
	
	const totalElement = document.querySelector<HTMLElement>('#total span');
	const bestDayElement = document.querySelector<HTMLElement>('#best-day span');

	fillList(data.payment, '#payment');

	fillList(data.status, '#status');

	if (bestDayElement) {
		bestDayElement.innerText = `${data.bestDay[0]} (${data.bestDay[1]})`
	}

	if (totalElement) {
		totalElement.innerText = data.total.toLocaleString('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		});
	}
}

function fillTable(transactions: Transaction[]): void {
	const table = document.querySelector('#transactions-table tbody');
	if (!table) return;
	transactions.forEach((transaction) => {
		table.innerHTML += `
			<tr>
				<td>${transaction.nome}</td>
				<td>${transaction.email}</td>
				<td>R$ ${transaction.moeda}</td>
				<td>${transaction.pagamento}</td>
				<td>${transaction.status}</td>
			</tr>
		`;
	});
}

getTransactions();
