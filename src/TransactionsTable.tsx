import React, { Component } from "react";
import TransactionRow from "./TransactionRow";
import { Transaction } from "./types";
import "./TransactionsTable.css";
import { getReadableAmount } from "./currencyHelpers";

interface Props {
  allTransactions: Transaction[];
}
class TransactionsTable extends Component<Props, {}> {
  /*   Compute balance when table is rendered so that if there are changes
    to transactions, the balance can change dynamically */
  computeBalance() {
    let balance = 0;
    this.props.allTransactions.forEach((tr) => {
      balance += tr.amountInCents;
    });
    return balance;
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr className="headerRow">
            <th className="cell">Date</th>
            <th className="cell">Company</th>
            <th className="cell">Ledger</th>
            <th className="cell">{getReadableAmount(this.computeBalance())}</th>
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
