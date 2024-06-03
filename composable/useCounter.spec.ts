import { test, expect } from 'vitest'
import { useCounter } from './useCounter'

test('useCounter', () => {
  const { count, increment, decrement } = useCounter()

  expect(count.value).toBe(0)

  increment()
  expect(count.value).toBe(1)

  decrement()
  expect(count.value).toBe(0)
})
