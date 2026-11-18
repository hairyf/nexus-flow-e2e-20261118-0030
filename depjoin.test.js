import assert from 'node:assert/strict'
import { test } from 'node:test'
import { depjoin } from './depjoin.js'

test('combines depbase1 and depbase2', () => {
  assert.equal(depjoin(0), 3)
  assert.equal(depjoin(10), 23)
})

test('combines depbase1 and depbase2 for negative numbers', () => {
  assert.equal(depjoin(-3), -3)
})
