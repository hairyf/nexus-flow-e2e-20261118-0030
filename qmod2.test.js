import assert from 'node:assert/strict'
import { test } from 'node:test'
import { qmod2 } from './qmod2.js'

test('adds two to a number', () => {
  assert.equal(qmod2(0), 2)
  assert.equal(qmod2(3), 5)
  assert.equal(qmod2(-4), -2)
})

test('adds two to zero and handles negative input', () => {
  assert.equal(qmod2(0), 2)
  assert.equal(qmod2(-2), 0)
})

test('works with decimal numbers', () => {
  assert.equal(qmod2(1.5), 3.5)
})
