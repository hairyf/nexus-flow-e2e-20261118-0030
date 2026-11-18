import assert from 'node:assert/strict'
import { test } from 'node:test'
import { mod1 } from './mod1.js'

test('mod1 returns the value multiplied by one', () => {
  assert.equal(mod1(7), 7)
})
