export function getTotals(cart) {
  console.log(cart)
  let totalAmount = 0
  let totalCost = 0
  for (let item of cart.values()) {
    const { price, amount } = item
    totalCost += price * amount
    totalAmount += amount
  }
  return { totalAmount, totalCost }
}
