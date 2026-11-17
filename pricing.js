const CURRENCY_FORMATTERS = {
  CNY: (amount) => `¥${amount.toFixed(2)}`,
  USD: (amount) => `$${amount.toFixed(2)}`,
}

export function formatPrice(amount, currency) {
  const formatter = CURRENCY_FORMATTERS[String(currency).toUpperCase()]
  if (!formatter) {
    throw new Error(`Unsupported currency: ${currency}`)
  }
  return formatter(Number(amount))
}
