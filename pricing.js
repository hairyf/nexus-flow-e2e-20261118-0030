const CURRENCY_FORMATTERS = {
  CNY: (amount) => `¥${amount.toFixed(2)}`,
  JPY: (amount) => `¥${Math.round(amount)}`,
  USD: (amount) => `$${amount.toFixed(2)}`,
}

export function formatPrice(amount, currency) {
  const value = Number(amount)
  if (value < 0) {
    throw new Error('Amount cannot be negative')
  }

  const formatter = CURRENCY_FORMATTERS[String(currency).toUpperCase()]
  if (!formatter) {
    throw new Error(`Unsupported currency: ${currency}`)
  }
  return formatter(Number(amount))
}
