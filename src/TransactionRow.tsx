import React, { Component } from "react";
import { Transaction } from "./types";

interface Props {
  transactionItem: Transaction;
}

class TransactionRow extends Component<Props, {}> {
  render() {
    return (
      <tr>
        <td>{this.props.transactionItem.date}</td>
        <td>{this.props.transactionItem.company}</td>
        <td>{this.props.transactionItem.ledger}</td>
        <td>{this.props.transactionItem.amount}</td>
      </tr>
    );
  }
}

export default TransactionRow;
