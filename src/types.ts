export type Transaction = {
    id: number;
    amountInCents: number;
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