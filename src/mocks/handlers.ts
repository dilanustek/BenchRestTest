import { rest } from "msw";
export const handlers = [
  rest.get(`https://resttest.bench.co/transactions/1.json`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        total_count: 1,
        transactions: [
          {
            Ledger: "TestLedger",
            Company: "TestCompany",
            Date: "20-10-2021",
            Amount: "10",
          },
          {
            Ledger: "TestLedger2",
            Company: "TestCompany2",
            Date: "20-9-2021",
            Amount: "-2.5",
          },
        ],
      })
    );
  }),
];
