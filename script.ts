import fetchData from "./src/fetchData.js";
import normalizeTransaction from "./src/normalizeTransaction.js";


async function getTransactions() {
	try {
		const resp = await fetchData<TransactionAPI[]>(
			'https://api.origamid.dev/json/transacoes.json?'
		);
		if (!resp) return;
    const transactions = resp.map(normalizeTransaction);
    console.log(transactions);
	} catch (err) {
		console.log('Erro', err);
	}
}

getTransactions();
