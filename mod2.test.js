import assert from 'node:assert/strict'
import { test } from 'node:test'
import { mod2 } from './mod2.js'

test('doubles the given number', () => {
  assert.equal(mod2(21), 42)
})
