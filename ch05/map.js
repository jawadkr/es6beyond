const prices = ['1.0', '2.15', 'twenty', 24.5, '2.45', 'hello']
const formattedPrices = prices.map(price => parseFloat(price))
    .filter(price => price)

console.log(formattedPrices)