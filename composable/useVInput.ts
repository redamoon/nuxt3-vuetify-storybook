// useVInput.ts
import { ref } from 'vue'

export function useVInput (initialValue = '') {
  const value = ref(initialValue)
  const error = ref('')
  const isValid = ref(true)

  const validate = (validationFn: (val: string) => boolean, errorMessage: string) => {
    if (!validationFn(value.value)) {
      error.value = errorMessage
      isValid.value = false
    } else {
      error.value = ''
      isValid.value = true
    }
  }

  const trigger = (newValue: string) => {
    value.value = newValue
    error.value = ''
    isValid.value = true
  }

  return {
    value,
    error,
    isValid,
    validate,
    trigger
  }
}
