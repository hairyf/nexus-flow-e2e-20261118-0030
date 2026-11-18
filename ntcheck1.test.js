import assert from 'node:assert/strict'
import { test } from 'node:test'
import { ntcheck1 } from './ntcheck1.js'

test('returns the value it is given', () => {
  assert.equal(ntcheck1('Nexus'), 'Nexus')
})

test('returns numbers unchanged', () => {
  assert.equal(ntcheck1(42), 42)
})

test('returns undefined when called without arguments', () => {
  assert.equal(ntcheck1(), undefined)
})

test('returns the same object reference', () => {
  const value = { ok: true }
  assert.equal(ntcheck1(value), value)
})
