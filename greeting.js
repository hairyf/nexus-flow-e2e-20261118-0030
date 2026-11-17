const GREETINGS = {
  en: (name) => `Hello, ${name}!`,
  zh: (name) => `你好，${name}！`,
}

const DEFAULT_LANGUAGE = 'en'

export function feature1(name) {
  return `feature1:${name}`
}

export function greeting(name, language = DEFAULT_LANGUAGE) {
  const code = String(language ?? DEFAULT_LANGUAGE).toLowerCase()
  const key = code.startsWith('zh') ? 'zh' : 'en'
  return GREETINGS[key](name)
}
