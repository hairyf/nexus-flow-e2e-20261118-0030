import assert from 'node:assert/strict'
import { test } from 'node:test'
import { farewell, feature1, greeting } from './greeting.js'

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

test('feature1 prefixes the name', () => {
  assert.equal(feature1('Nexus'), 'feature1:Nexus')
})

test('falls back to English for unknown languages', () => {
  assert.equal(greeting('Nexus', 'fr'), 'Hello, Nexus!')
})

test('says goodbye in English by default', () => {
  assert.equal(farewell('Nexus'), 'Goodbye, Nexus')
  assert.equal(farewell('Nexus', undefined), 'Goodbye, Nexus')
})

test('says goodbye in English when requested', () => {
  assert.equal(farewell('Nexus', 'en'), 'Goodbye, Nexus')
})

test('says goodbye in Chinese', () => {
  assert.equal(farewell('Nexus', 'zh'), '再见，Nexus')
  assert.equal(farewell('Nexus', 'zh-CN'), '再见，Nexus')
})

test('farewell falls back to English for unknown languages', () => {
  assert.equal(farewell('Nexus', 'fr'), 'Goodbye, Nexus')
})
