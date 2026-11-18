import assert from 'node:assert/strict'
import { test } from 'node:test'
import { qmod3 } from './qmod3.js'

test('adds 3 to the given number', () => {
  assert.equal(qmod3(0), 3)
  assert.equal(qmod3(4), 7)
  assert.equal(qmod3(-10), -7)
})

test('handles decimal input', () => {
  assert.equal(qmod3(1.5), 4.5)
})
