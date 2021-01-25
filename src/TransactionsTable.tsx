import React, { Component } from "react";
import TransactionRow from "./TransactionRow";

class TransactionsTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th colSpan={2}>Bench Transactions</th>
          </tr>
        </thead>
        <tbody>
          <TransactionRow />
        </tbody>
      </table>
    );
  }
}

export default TransactionsTable;
