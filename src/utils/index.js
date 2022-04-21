export function moneyFormat (money, type) {
  return (type + (Number(money).toFixed(2) || 0.00 ))
}