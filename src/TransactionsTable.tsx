import React, { Component } from "react";
import TransactionRow from "./TransactionRow";
import { Transaction } from "./types";

interface Props {
  allTransactions: Transaction[];
}
class TransactionsTable extends Component<Props, {}> {
  /*   Compute balance when table is rendered so that if there are changes
    to transactions, the balance can change dynamically */
  computeBalance() {
    let balance = 0;
    this.props.allTransactions.forEach((tr) => {
      balance += parseFloat(tr.amount);
    });
    return balance;
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Company</th>
            <th>Ledger</th>
            <th>{this.computeBalance()}</th>
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
