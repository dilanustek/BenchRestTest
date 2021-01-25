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

  async fetchTransactionData() {
    let allData: Transaction[] = [];
    let morePagesAvailable = true;
    let currentTransactionsCount = 0;
    let currentPage = 1;

    while (morePagesAvailable) {
      const response = await fetch(
        `https://resttest.bench.co/transactions/${currentPage}.json`
      );
      let { transactions, totalCount } = await response.json();

      allData = [...allData, ...transactions];

      currentTransactionsCount += transactions.length;
      morePagesAvailable = currentTransactionsCount < totalCount;
      currentPage++;
    }

    return allData;
  }

  componentDidMount() {
    this.fetchTransactionData().then((allData) => {
      this.setState({ transactionsData: allData });
    });
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
