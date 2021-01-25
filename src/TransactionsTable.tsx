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
            <th colSpan={2}>Bench Transactions</th>
          </tr>
        </thead>
        <tbody>
          {this.props.allTransactions.map((entry) => (
            <TransactionRow key={entry.date + entry.amount} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default TransactionsTable;
