function coinToNumber(coin) {
    const number = Number(coin.replaceAll('.', '').replace(',', '.'));
    return isNaN(number) ? null : number;
}
export default function normalizeTransaction(transaction) {
    return {
        status: transaction.Status,
        id: transaction.ID,
        data: transaction.Data,
        nome: transaction.Nome,
        email: transaction.Email,
        pagamento: transaction['Forma de Pagamento'],
        moeda: transaction['Valor (R$)'],
        valor: coinToNumber(transaction['Valor (R$)']),
        novo: Boolean(transaction['Cliente Novo']),
    };
}
