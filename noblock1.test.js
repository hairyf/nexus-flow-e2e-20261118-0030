import assert from 'node:assert/strict'
import { test } from 'node:test'
import { noblock1 } from './noblock1.js'

test('returns the value unchanged', () => {
  assert.equal(noblock1('Nexus'), 'Nexus')
  assert.equal(noblock1(42), 42)
})

test('returns the same reference for objects', () => {
  const value = { id: 1 }
  assert.equal(noblock1(value), value)
})

test('returns undefined and null as-is', () => {
  assert.equal(noblock1(undefined), undefined)
  assert.equal(noblock1(null), null)
})
