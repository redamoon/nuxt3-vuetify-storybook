<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(defineProps<{
  label?: string
  type: string
  modelValue: string
  placeholder: string
  bgColor?: string
  baseColor?: string
  color?: string
  variant?: string
  tile?: boolean
  autofocus?: boolean
}>(), {
  label: '',
  type: 'text',
  bgColor: '',
  baseColor: '',
  color: '',
  variant: 'underlined',
  tile: false,
  autofocus: false
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
    <v-text-field
      :model-value="setValue"
      :base-color="props.baseColor"
      :bg-color="props.bgColor"
      :label="props.label"
      :type="props.type"
      :placeholder="placeholder"
      :color="props.color"
      :tile="props.tile"
      :variant="props.variant"
      :autofocus="props.autofocus"
      @update:model-value="onValueChange"
    />
  </div>
</template>
