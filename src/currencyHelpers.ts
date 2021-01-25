export function getReadableAmount(amountInCents: number) {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return formatter.format(amountInCents/100);
  }