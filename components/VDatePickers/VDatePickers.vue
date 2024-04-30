<script setup lang="ts">
import { ref } from 'vue'
import { format } from 'date-fns'

const dateValue = ref([])

const props = withDefaults(defineProps<{
  hideHeader?: boolean
  multiple?: boolean | 'range';
  isActions?: boolean;
  bgColor?: string;
  color?: string;
  disabled?: boolean;
  showAdjacentMonths?: boolean;
  elevation?: number;
  border?: number;
  header?: string;
}>(), {
  multiple: false,
  bgColor: undefined,
  color: undefined,
  disabled: false,
  showAdjacentMonths: true,
  elevation: 24,
  border: 15,
  header: '日付選択'
})

const emits = defineEmits<{
  'update:modelValue': [value: string[]]
}>()

const onClear = () => {
  dateValue.value = []
  emits('update:modelValue', dateValue.value)
}
const onSave = () => {
  const dates = dateValue.value.map(date => format(date, 'yyyy-MM-dd'))
  const startDate = dates.at(0)
  const endDate = dates.at(-1)
  if (startDate !== undefined && endDate !== undefined) {
    emits('update:modelValue', [startDate, endDate])
  }
}

</script>

<template>
  <v-date-picker
    v-model="dateValue"
    :multiple="props.multiple"
    :hide-header="props.hideHeader"
    :elevation="props.elevation"
    :bg-color="props.bgColor"
    :color="props.color"
    :disabled="props.disabled"
    :show-adjacent-months="props.showAdjacentMonths"
    :border
    :header
  >
    <template v-if="isActions" #actions>
      <v-btn color="info" label="クリア" @click="onClear">
        クリア
      </v-btn>
      <v-btn color="primary" label="保存" @click="onSave">
        保存
      </v-btn>
    </template>
  </v-date-picker>
</template>
