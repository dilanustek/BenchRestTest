import React, { Component } from "react";
import TransactionsTable from "./TransactionsTable";

class TransactionsPage extends Component {
  componentDidMount() {
    const URL = "https://resttest.bench.co/transactions/1.json";

    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then(
        ({
          totalCount,
          transactions,
        }: {
          totalCount: number;
          transactions: [];
        }) => {
          console.log(totalCount, transactions);
        }
      );
  }

  render() {
    return (
      <div>
        <TransactionsTable />
      </div>
    );
  }
}

export default TransactionsPage;
