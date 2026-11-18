import assert from 'node:assert/strict'
import { test } from 'node:test'
import { rmod1 } from './rmod1.js'

test('rmod1 returns the value multiplied by one', () => {
  assert.equal(rmod1(5), 5)
})

test('rmod1 keeps zero and negative values unchanged', () => {
  assert.equal(rmod1(0), 0)
  assert.equal(rmod1(-3), -3)
})

test('rmod1 returns floating point values unchanged', () => {
  assert.equal(rmod1(2.5), 2.5)
})
