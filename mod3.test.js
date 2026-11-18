import assert from 'node:assert/strict'
import { test } from 'node:test'
import { mod3 } from './mod3.js'

test('multiplies the input by three', () => {
  assert.equal(mod3(7), 21)
})
