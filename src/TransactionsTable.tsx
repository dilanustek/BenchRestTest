import React, { Component } from "react";

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
          <td>hello</td>
          <td>world</td>
        </tbody>
      </table>
    );
  }
}

export default TransactionsTable;
