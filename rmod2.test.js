import assert from 'node:assert/strict'
import { test } from 'node:test'
import { rmod2 } from './rmod2.js'

test('doubles a positive integer', () => {
  assert.equal(rmod2(2), 4)
})

test('doubles zero', () => {
  assert.equal(rmod2(0), 0)
})

test('doubles a negative number', () => {
  assert.equal(rmod2(-3), -6)
})

test('doubles a non-integer number', () => {
  assert.equal(rmod2(1.5), 3)
})
