import countBy from './countBy.js';

type TransactionValue = Transaction & { valor: number };

function filterValue(
	transaction: Transaction
): transaction is TransactionValue {
	return transaction.valor !== null;
}

export default class Stats {
	private transactions;
	private week;
	total;
	payment;
	status;
  bestDay;

	constructor(transactions: Transaction[]) {
		this.transactions = transactions;
		this.total = this.setTotal();
		this.payment = this.setPayment();
		this.status = this.setStatus();
		this.week = this.setWeek();
    this.bestDay = this.setBestDay();
	}

	private setTotal() {
		return this.transactions.filter(filterValue).reduce((acc, cur) => {
			return acc + cur.valor;
		}, 0);
	}

	private setPayment() {
		return countBy(this.transactions.map(({ pagamento }) => pagamento));
	}

	private setStatus() {
		return countBy(this.transactions.map(({ status }) => status));
	}

	private setWeek() {
		return countBy(
			this.transactions.map(({ data }) =>
				new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(data)
			)
		);
	}

  private setBestDay() {
    return Object.entries(this.week).sort((a, b) => b[1] - a[1])[0];
  }
}
