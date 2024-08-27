function getNetPrice(price: number, discount: number, format: boolean): unknown {
  let netPrice = price * (1 - discount);
  return format ? `$${netPrice}` : netPrice;
}

const netPrice = getNetPrice(20, 10, true) as string 
netPrice.startsWith('$')