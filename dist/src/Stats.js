import countBy from './countBy.js';
function filterValue(transaction) {
    return transaction.valor !== null;
}
export default class Stats {
    transactions;
    week;
    total;
    payment;
    status;
    bestDay;
    constructor(transactions) {
        this.transactions = transactions;
        this.total = this.setTotal();
        this.payment = this.setPayment();
        this.status = this.setStatus();
        this.week = this.setWeek();
        this.bestDay = this.setBestDay();
    }
    setTotal() {
        return this.transactions.filter(filterValue).reduce((acc, cur) => {
            return acc + cur.valor;
        }, 0);
    }
    setPayment() {
        return countBy(this.transactions.map(({ pagamento }) => pagamento));
    }
    setStatus() {
        return countBy(this.transactions.map(({ status }) => status));
    }
    setWeek() {
        return countBy(this.transactions.map(({ data }) => new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(data)));
    }
    setBestDay() {
        return Object.entries(this.week).sort((a, b) => b[1] - a[1])[0];
    }
}
