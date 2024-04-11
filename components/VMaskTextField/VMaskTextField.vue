<script setup lang="ts">
import { ref } from 'vue'
import { vMaska } from 'maska'
import { SetIcon } from '@/constants/icons'
import { isValidDate } from '@/utils/isValidDate'

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
  clearIcon?: any,
  validationValue?: string
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
const options = {
  mask: '####/##/##'
}
const rules = {
  required: (value: string) => !!value || '必須項目です',
  date: (value: string) => value.match(/^\d{4}\/\d{2}\/\d{2}$/) || '日付の形式が正しくありません', // YYYY/MM/DD
  isValidDate: (value: string) => isValidDate(value) || '存在する日付を入力してください', // YYYY/MM/DD
  isBeforeCurrentDate: (value: string) => {
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
      :rules="[rules.required, rules.date, rules.isValidDate, rules.isBeforeCurrentDate]"
      @update:model-value="onValueChange"
      @click:clear="clearMessage"
    />
  </div>
</template>
