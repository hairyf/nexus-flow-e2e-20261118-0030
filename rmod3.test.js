import assert from 'node:assert/strict'
import { test } from 'node:test'
import { rmod3 } from './rmod3.js'

test('multiplies a positive number by three', () => {
  assert.equal(rmod3(4), 12)
})

test('multiplies zero by three', () => {
  assert.equal(rmod3(0), 0)
})

test('multiplies a negative number by three', () => {
  assert.equal(rmod3(-2), -6)
})

test('multiplies a decimal by three', () => {
  assert.equal(rmod3(1.5), 4.5)
})
