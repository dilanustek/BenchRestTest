import React, { Component } from "react";
import TransactionsTable from "./TransactionsTable";
import { Transaction } from "./types";

interface State {
  transactionsData: Transaction[];
}

class TransactionsPage extends Component<{}, State> {
  state = {
    transactionsData: [],
  };

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
          this.setState({
            transactionsData: transactions,
          });
        }
      );
  }

  render() {
    return (
      <div>
        <TransactionsTable allTransactions={this.state.transactionsData} />
      </div>
    );
  }
}

export default TransactionsPage;
