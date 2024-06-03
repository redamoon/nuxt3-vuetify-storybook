// useVInput.test.ts
import { describe, it, expect } from 'vitest'
import { useVInput } from './useVInput'

describe('useVInput', () => {
  it('should initialize with default value', () => {
    const { value, error, isValid } = useVInput()
    expect(value.value).toBe('')
    expect(error.value).toBe('')
    expect(isValid.value).toBe(true)
  })

  it('should trigger and update value', () => {
    const { value, trigger } = useVInput()
    trigger('new value')
    expect(value.value).toBe('new value')
  })

  it('should validate value correctly', () => {
    const { value, error, isValid, validate } = useVInput()
    const isUri = (val: string) => /^https?:\/\/\S+$/.test(val)

    validate(isUri, 'Invalid URI')
    expect(error.value).toBe('Invalid URI')
    expect(isValid.value).toBe(false)

    value.value = 'https://example.com'
    validate(isUri, 'Invalid URI')
    expect(error.value).toBe('')
    expect(isValid.value).toBe(true)
  })

  it('should clear error and validity on trigger', () => {
    const { value, error, isValid, trigger, validate } = useVInput()
    const isText = (val: string) => val.length > 0

    value.value = ''
    validate(isText, 'Text cannot be empty')
    expect(error.value).toBe('Text cannot be empty')
    expect(isValid.value).toBe(false)

    trigger('new value')
    expect(error.value).toBe('')
    expect(isValid.value).toBe(true)
  })
})
