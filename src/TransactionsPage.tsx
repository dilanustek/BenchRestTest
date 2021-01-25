import React, { Component } from "react";
import TransactionsTable from "./TransactionsTable";
import { Transaction, TransactionAPI } from "./types";

interface State {
  transactionsData: Transaction[];
}

class TransactionsPage extends Component<{}, State> {
  state = {
    transactionsData: [],
  };

  // Fetch all data dynamically. Number of transactions may have changed in the meantime.
  async fetchTransactionData() {
    let allData: Transaction[] = [];
    let morePagesAvailable = true;
    let currentTransactionsCount = 0;
    let currentPage = 1;

    // sequentially fetch each page
    while (morePagesAvailable) {
      const response = await fetch(
        `https://resttest.bench.co/transactions/${currentPage}.json`
      );

      // anything other than 200 OK will throw an error
      if (response.status !== 200) {
        throw new Error("Unexpected server status: " + response.status);
      }

      let { transactions, totalCount } = await response.json();

      // save each transaction from TransactionAPI to Transaction type to include a unique id
      transactions.forEach((tr: TransactionAPI) => {
        allData.push({
          amount: tr.Amount,
          date: tr.Date,
          company: tr.Company,
          ledger: tr.Ledger,
          id: currentTransactionsCount,
        });
        currentTransactionsCount++;
      });

      morePagesAvailable = currentTransactionsCount < totalCount;
      currentPage++;
    }

    return allData;
  }

  // fetch all transactions on mount and set to state
  componentDidMount() {
    this.fetchTransactionData()
      .then((allData) => {
        this.setState({ transactionsData: allData });
      })
      .catch((error) => {
        console.log("Caught error:", error);
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
