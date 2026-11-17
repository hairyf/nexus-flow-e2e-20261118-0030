const GREETINGS = {
  en: (name) => `Hello, ${name}!`,
  zh: (name) => `你好，${name}！`,
}

const FAREWELLS = {
  en: (name) => `Goodbye, ${name}`,
  zh: (name) => `再见，${name}`,
}

const DEFAULT_LANGUAGE = 'en'

function resolveLanguage(language) {
  const code = String(language ?? DEFAULT_LANGUAGE).toLowerCase()
  return code.startsWith('zh') ? 'zh' : 'en'
}

export function greeting(name, language = DEFAULT_LANGUAGE) {
  return GREETINGS[resolveLanguage(language)](name)
}

export function farewell(name, language = DEFAULT_LANGUAGE) {
  return FAREWELLS[resolveLanguage(language)](name)
}

export function feature4(name) {
  return `feature4:${name}`
}
