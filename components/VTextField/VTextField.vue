<script setup lang="ts">
import { ref } from 'vue'
import { SetIcon } from '@/constants/icons'

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
  centerAffix?: boolean
  clearable?: boolean
  flat?: boolean
  prependIcon?: any
  prependInnerIcon?: any
  clearIcon?: any
}>(), {
  label: '',
  type: 'text',
  bgColor: '',
  baseColor: '',
  color: '',
  variant: 'underlined',
  tile: false,
  autofocus: false,
  centerAffix: false,
  clearable: false,
  flat: false,
  prependIcon: undefined,
  prependInnerIcon: undefined,
  validationValue: undefined,
  clearIcon: undefined
})

const setValue = ref(props.modelValue)
const rules = {
  required: (value: string) => !!value || '必須項目です'
}

const emits = defineEmits<{
  'update:modelValue': [modelValue: string]
}>()

const onValueChange = (value: string) => {
  setValue.value = value
  emits('update:modelValue', setValue.value)
}
const clearMessage = () => {
  setValue.value = ''
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
      :center-affix="props.centerAffix"
      :clearable="props.clearable"
      :flat="props.flat"
      :prepend-icon="SetIcon[props.prependIcon]"
      :prepend-inner-icon="SetIcon[props.prependInnerIcon]"
      :validation-value="setValue"
      :clear-icon="SetIcon[props.clearIcon]"
      :rules="[rules.required]"
      @update:model-value="onValueChange"
      @click:clear="clearMessage"
    />
  </div>
</template>
