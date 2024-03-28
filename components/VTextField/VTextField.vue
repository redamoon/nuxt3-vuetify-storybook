<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(defineProps<{
  label: string
  type: string
  modelValue: string
  placeholder: string
}>(), {
  type: 'text'
})

const setValue = ref(props.modelValue)

const emits = defineEmits<{
  'update:modelValue': [modelValue: string]
}>()

const onValueChange = (value: string) => {
  setValue.value = value
  emits('update:modelValue', setValue.value)
}
</script>

<template>
  <div>
    <v-text-field :model-value="setValue" :label="props.label" :type="props.type" :placeholder="placeholder" @update:model-value="onValueChange" />
  </div>
</template>
