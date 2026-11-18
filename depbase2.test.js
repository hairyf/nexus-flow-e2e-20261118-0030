import assert from 'node:assert/strict'
import { test } from 'node:test'
import { depbase2 } from './depbase2.js'

test('depbase2 adds 2 to positive numbers', () => {
  assert.equal(depbase2(3), 5)
})

test('depbase2 adds 2 to zero', () => {
  assert.equal(depbase2(0), 2)
})

test('depbase2 adds 2 to negative numbers', () => {
  assert.equal(depbase2(-5), -3)
})

test('depbase2 works with fractional values', () => {
  assert.equal(depbase2(0.5), 2.5)
})
