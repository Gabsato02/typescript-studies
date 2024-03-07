declare global {
  type TransacaoPagamento = 'Boleto' | 'Cartão de Crédito';
	type StatusPagamento =
		| 'Pago'
		| 'Recusada pela operadora de cartão'
		| 'Aguardando pagamento'
		| 'Estornada';

	interface TransactionAPI {
		Status: StatusPagamento;
		ID: number;
		Data: string;
		Nome: string;
		Email: string;
		['Forma de Pagamento']: TransacaoPagamento;
		['Valor (R$)']: string;
		['Cliente Novo']: number;
	}

  interface Transaction {
		status: StatusPagamento;
		id: number;
		data: string;
		nome: string;
		email: string;
		pagamento: TransacaoPagamento;
		moeda: string;
    valor: number | null;
		novo: boolean;
	}
}

function coinToNumber(coin: string): number | null {
  const number = Number(coin.replaceAll('.', '').replace(',', '.'));
  return isNaN(number) ? null : number;
}

export default function normalizeTransaction(transaction: TransactionAPI) {
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
