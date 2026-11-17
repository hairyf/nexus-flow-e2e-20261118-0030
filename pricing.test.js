import assert from 'node:assert/strict'
import { test } from 'node:test'
import { formatPrice } from './pricing.js'

test('formats CNY amounts with the yuan symbol and two decimals', () => {
  assert.equal(formatPrice(12.5, 'CNY'), '¥12.50')
})

test('formats USD amounts with the dollar symbol and two decimals', () => {
  assert.equal(formatPrice(7, 'USD'), '$7.00')
})

test('formats JPY amounts with the yen symbol and no decimals', () => {
  assert.equal(formatPrice(120, 'JPY'), '¥120')
})

test('throws for negative amounts', () => {
  assert.throws(() => formatPrice(-1, 'CNY'), /negative/)
})

test('throws for unknown currencies', () => {
  assert.throws(() => formatPrice(1, 'EUR'), /Unsupported currency: EUR/)
})
