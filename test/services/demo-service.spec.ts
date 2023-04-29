import { describe, it, expect } from '@jest/globals'
import { getMessage } from '../../src/services/demo-service.js'

describe('demo service test', () => {
  it('getMessage() method should return a string', () => {
    const ret = getMessage()
    expect(ret).toBeDefined()
    expect(typeof ret).toBe('string')
    expect(ret).toBe('Hello from CLI')
  })
})
