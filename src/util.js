export function getTotals(cart) {
  console.log(cart)
  let totalAmount = 0
  let totalCost = 0
  // for (item in Array.from(cart.toArray())) {
  //   const amount = item.amount
  //   totalCost += item.price * amount
  //   totalAmount += amount
  // }
  return { totalAmount, totalCost }
}
