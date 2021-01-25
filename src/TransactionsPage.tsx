import React, { Component } from "react";
import TransactionsTable from "./TransactionsTable";
import { Transaction, TransactionAPI } from "./types";
import ErrorState from "./ErrorState";
import Spinner from "./Spinner";
import "./TransactionsPage.css";

interface State {
  transactionsData: Transaction[];
  isError: boolean;
}

class TransactionsPage extends Component<{}, State> {
  state = {
    transactionsData: [],
    isError: false,
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
          amount: parseFloat(tr.Amount),
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
        this.setState({ isError: true });
        // normally you would log this in your error tracker
        console.log("Caught error:", error);
      });
  }

  getReturnComponent() {
    if (this.state.isError) {
      return <ErrorState />;
    }
    if (this.state.transactionsData.length === 0) {
      return <Spinner />;
    }
    return <TransactionsTable allTransactions={this.state.transactionsData} />;
  }

  render() {
    return <div className="transactionsPage">{this.getReturnComponent()}</div>;
  }
}

export default TransactionsPage;
