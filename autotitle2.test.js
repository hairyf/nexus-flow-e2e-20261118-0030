import assert from 'node:assert/strict'
import { test } from 'node:test'
import { autotitle2 } from './autotitle2.js'

test('returns the given string unchanged', () => {
  assert.equal(autotitle2('Nexus'), 'Nexus')
})

test('returns the given number unchanged', () => {
  assert.equal(autotitle2(42), 42)
})

test('returns the given object unchanged', () => {
  const value = { title: 'autotitle2' }
  assert.equal(autotitle2(value), value)
})

test('returns undefined and null unchanged', () => {
  assert.equal(autotitle2(undefined), undefined)
  assert.equal(autotitle2(null), null)
})
