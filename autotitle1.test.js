import assert from 'node:assert/strict'
import { test } from 'node:test'
import { autotitle1 } from './autotitle1.js'

test('autotitle1 returns its argument', () => {
  assert.equal(autotitle1('Nexus'), 'Nexus')
})

test('autotitle1 is identity for numbers and objects', () => {
  assert.equal(autotitle1(42), 42)

  const value = { id: 1 }
  assert.equal(autotitle1(value), value)
})
