import React, { Component } from "react";
import TransactionRow from "./TransactionRow";
import { Transaction } from "./types";

interface Props {
  allTransactions: Transaction[];
}
class TransactionsTable extends Component<Props, {}> {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Company</th>
            <th>Ledger</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {this.props.allTransactions.map((tr) => (
            <TransactionRow key={tr.id} transactionItem={tr} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default TransactionsTable;
