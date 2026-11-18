import assert from 'node:assert/strict'
import { test } from 'node:test'
import { delegate1 } from './delegate1.js'

test('delegate1 returns the value it was given', () => {
  assert.equal(delegate1('Nexus'), 'Nexus')
  assert.equal(delegate1(42), 42)
  assert.equal(delegate1(true), true)
})

test('delegate1 returns the same reference for objects and arrays', () => {
  const value = { id: 1, tags: ['a'] }
  assert.equal(delegate1(value), value)
  const list = [1, 2, 3]
  assert.equal(delegate1(list), list)
})

test('delegate1 passes through nullish and special values', () => {
  assert.equal(delegate1(undefined), undefined)
  assert.equal(delegate1(null), null)
  assert.equal(delegate1(0), 0)
  assert.equal(delegate1(''), '')
})

test('delegate1 passes functions through unchanged', () => {
  const fn = () => 'delegated'
  assert.equal(delegate1(fn), fn)
  assert.equal(delegate1(fn)(), 'delegated')
})
