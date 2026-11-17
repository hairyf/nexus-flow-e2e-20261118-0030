import assert from 'node:assert/strict'
import { test } from 'node:test'
import { greeting } from './greeting.js'
test('greets the named person', () => {
  assert.equal(greeting('Nexus'), 'Hello, Nexus!')
})
test('always returns the fixed English greeting', () => {
  assert.equal(greeting('someone else'), 'Hello, Nexus!')
})
