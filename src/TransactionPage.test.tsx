import React from "react";
import { render, screen } from "@testing-library/react";
import TransactionsPage from "./TransactionsPage";
import { server } from "./mocks/server";
import { rest } from "msw";

describe("initial", () => {
  test("renders page header", () => {
    render(<TransactionsPage />);
    const header = screen.getByRole("banner");
    expect(header).toHaveTextContent("Bench Transactions");
  });
});

describe("success", () => {
  test("renders table headers", async () => {
    render(<TransactionsPage />);
    const date = await screen.findByText("Date");
    expect(date).toBeInTheDocument();
    const company = screen.getByText("Company");
    expect(company).toBeInTheDocument();
    const ledger = screen.getByText("Ledger");
    expect(ledger).toBeInTheDocument();
    const total = screen.getByTestId("total");
    expect(total).toHaveTextContent("$7.50");
  });

  test("renders table content", async () => {
    render(<TransactionsPage />);
    const date = await screen.findByText("20-10-2021");
    expect(date).toBeInTheDocument();
    const company = screen.getByText("TestCompany");
    expect(company).toBeInTheDocument();
    const ledger = screen.getByText("TestLedger");
    expect(ledger).toBeInTheDocument();
    const amount = screen.getByText("-$2.50");
    expect(amount).toBeInTheDocument();
  });
});

describe("error", () => {
  // We are testing with a 500. We could also test for other error codes like 404, 300 etc.
  test("server error", async () => {
    server.use(
      rest.get(
        `https://resttest.bench.co/transactions/1.json`,
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );

    render(<TransactionsPage />);
    const errorMessage = await screen.findByText(
      "We are having technical difficulties. Please try again later!"
    );
    expect(errorMessage).toBeInTheDocument();

    const errorImg = screen.getByAltText("sad puppy");
    expect(errorImg).toBeInTheDocument();
  });
});

describe("loading", () => {
  test("spinner initially invisible", () => {
    render(<TransactionsPage />);

    const spinnerContainer = screen.getByTestId("spinnerContainer");
    expect(spinnerContainer).toBeInTheDocument();
    expect(spinnerContainer).toBeEmptyDOMElement();
    const spinner = screen.queryByLabelText("audio-loading");
    expect(spinner).toBeNull();
  });

  test("server delay", async () => {
    server.use(
      rest.get(
        `https://resttest.bench.co/transactions/1.json`,
        (req, res, ctx) => {
          return res(ctx.delay(2000));
        }
      )
    );

    render(<TransactionsPage />);

    const spinner = await screen.findByLabelText("audio-loading");
    expect(spinner).toBeInTheDocument();
  });
});
