import assert from 'node:assert/strict'
import { test } from 'node:test'
import { depbase1 } from './depbase1.js'

test('adds one to the given number', () => {
  assert.equal(depbase1(0), 1)
  assert.equal(depbase1(41), 42)
})

test('adds one to negative numbers', () => {
  assert.equal(depbase1(-2), -1)
})
