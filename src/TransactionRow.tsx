import React, { Component } from "react";
import { Transaction } from "./types";
import "./TransactionRow.css";
import { getReadableAmount } from "./currencyHelpers";

interface Props {
  transactionItem: Transaction;
}

class TransactionRow extends Component<Props, {}> {
  render() {
    return (
      <tr className="row">
        <td className="cell">{this.props.transactionItem.date}</td>
        <td className="cell">{this.props.transactionItem.company}</td>
        <td className="cell">{this.props.transactionItem.ledger}</td>
        <td className="cell">
          {getReadableAmount(this.props.transactionItem.amount)}
        </td>
      </tr>
    );
  }
}

export default TransactionRow;
