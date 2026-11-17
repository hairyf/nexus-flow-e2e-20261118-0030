import assert from 'node:assert/strict'
import { test } from 'node:test'
import { greeting } from './greeting.js'

test('greets the named person', () => {
  assert.equal(greeting('Nexus'), 'Hello, Nexus!')
})

test('defaults to the English greeting', () => {
  assert.equal(greeting('Nexus', undefined), 'Hello, Nexus!')
  assert.equal(greeting('Nexus', 'en'), 'Hello, Nexus!')
})

test('supports the Chinese greeting', () => {
  assert.equal(greeting('Nexus', 'zh'), '你好，Nexus！')
  assert.equal(greeting('Nexus', 'zh-CN'), '你好，Nexus！')
})

test('falls back to English for unknown languages', () => {
  assert.equal(greeting('Nexus', 'fr'), 'Hello, Nexus!')
})
