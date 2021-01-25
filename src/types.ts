export type Transaction = {
    id: number;
    amount: number;
    company: string;
    date: string;
    ledger: string;
}

export type TransactionAPI = {
    Amount: string;
    Company: string;
    Date: string;
    Ledger: string;
}