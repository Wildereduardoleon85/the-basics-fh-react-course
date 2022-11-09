import { getSaludo } from '../../src/bases/02-template-string'

describe(`tests in "02-template-strings" `, () => {
  test(`function must return "Hello Wilder"`, () => {
    expect(getSaludo('Wilder')).toBe('Hello Wilder')
  })
})
