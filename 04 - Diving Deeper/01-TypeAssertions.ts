function getNetPrice(price: number, discount: number, format: boolean): number | string {
  let netPrice = price * (1 - discount);
  return format ? `$${netPrice}` : netPrice;
}

const netPrice = <string> getNetPrice(20, 10, true)