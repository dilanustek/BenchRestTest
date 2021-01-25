import React, { Component } from "react";
import { Transaction } from "./types";

interface Props {
  transactionItem: Transaction;
}

class TransactionRow extends Component<Props, {}> {
  render() {
    return (
      <tr>
        <td>{this.props.transactionItem.Date}</td>
        <td>{this.props.transactionItem.Company}</td>
        <td>{this.props.transactionItem.Ledger}</td>
        <td>{this.props.transactionItem.Amount}</td>
      </tr>
    );
  }
}

export default TransactionRow;
