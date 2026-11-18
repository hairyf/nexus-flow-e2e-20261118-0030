import assert from 'node:assert/strict'
import { test } from 'node:test'
import { qmod1 } from './qmod1.js'

test('adds one to a positive integer', () => {
  assert.equal(qmod1(1), 2)
})

test('adds one to zero', () => {
  assert.equal(qmod1(0), 1)
})

test('adds one to negative numbers', () => {
  assert.equal(qmod1(-3), -2)
})

test('adds one to decimal numbers', () => {
  assert.equal(qmod1(1.5), 2.5)
})
