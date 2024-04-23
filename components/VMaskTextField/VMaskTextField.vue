<script setup lang="ts">
import { ref } from 'vue'
import { vMaska } from 'maska'
import { SetIcon } from '@/constants/icons'
import { isValidDate } from '@/utils/isValidDate'

interface ValidationRule {
  (value: string): true | string; // 戻り値がtrueまたはエラーメッセージのstring
}

const props = withDefaults(defineProps<{
  label?: string
  type: string
  modelValue: string
  placeholder: string
  bgColor?: string
  baseColor?: string
  color?: string
  variant?: 'plain' | 'outlined' | 'underlined' | 'filled' | 'solo' | 'solo-inverted' | 'solo-filled' | undefined
  tile?: boolean
  autofocus?: boolean
  centerAffix?: boolean
  clearable?: boolean
  flat?: boolean
  prependIcon?: any
  prependInnerIcon?: any
  clearIcon?: any
  validationValue?: string,
  maskPattern: string,
  fieldType: 'date' | 'phone' | 'recurring'
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
  clearIcon: undefined,
  maskPattern: '####-##-##',
  fieldType: 'date'
})

const FORMAT = {
  BOTH: 'YYYY-MM-DD'
}

const setValue = ref(props.modelValue)
const options = {
  mask: props.maskPattern
}
const rules: Record<string, ValidationRule> = {
  required: (value: string) => !!value || '必須項目です',
  isValidDate: (value: string) => {
    if (props.fieldType !== 'date') { return true } // 日付型以外はチェックしない
    return isValidDate(value) || '存在する日付を入力してください'
  },
  isBeforeCurrentDate: (value: string) => {
    if (props.fieldType !== 'date') { return true } // 日付型以外はチェックしない
    if (!isValidDate(value)) {
      return '存在する日付を入力してください' // isValidDateのチェックを先に行う
    }
    const inputDate = new Date(value)
    const currentDate = new Date()
    currentDate.setHours(0, 0, 0, 0) // 時間情報をクリアして日付のみの比較を行う

    return currentDate < inputDate || '現在の日付より前の日付は入力できません'
  }
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
      v-maska:[options]
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
      :rules="[rules.required, rules.isValidDate, rules.isBeforeCurrentDate]"
      @update:model-value="onValueChange"
      @click:clear="clearMessage"
    />
  </div>
</template>
