<script setup lang="ts">
import { ref } from 'vue'
import { format } from 'date-fns'

const dateValue = ref([])

const props = withDefaults(defineProps<{
  hideHeader?: boolean
  hideWeekdays?: boolean
  multiple?: boolean | 'range';
  isActions?: boolean;
  bgColor?: string;
  color?: string;
  disabled?: boolean;
  showAdjacentMonths?: boolean;
  elevation?: number;
  border?: number;
  header: string;
}>(), {
  multiple: false,
  bgColor: undefined,
  color: undefined,
  disabled: false,
  showAdjacentMonths: true,
  elevation: 24,
  border: 15
})

const emits = defineEmits<{
  'update:modelValue': [value: string[] | Date]
}>()

const onClear = () => {
  dateValue.value = []
  emits('update:modelValue', dateValue.value)
}
const onSave = () => {
  if (!Array.isArray(dateValue.value)) {
    dateValue.value = [dateValue.value]
  }
  const dates = dateValue.value.map(date => format(date, 'yyyy-MM-dd'))
  const startDate = dates.at(0)
  const endDate = dates.at(-1)
  if (startDate !== undefined && endDate !== undefined) {
    if (!props.multiple) {
      emits('update:modelValue', [startDate])
    } else {
      emits('update:modelValue', [startDate, endDate])
    }
  }
}

</script>

<template>
  <v-date-picker
    v-model="dateValue"
    :multiple="props.multiple"
    :hide-header="props.hideHeader"
    :hide-weekdays="props.hideWeekdays"
    :elevation="props.elevation"
    :bg-color="props.bgColor"
    :color="props.color"
    :disabled="props.disabled"
    :show-adjacent-months="props.showAdjacentMonths"
    :border
  >
    <template v-if="props.header" #header>
      <v-card-title>
        {{ props.header }}
      </v-card-title>
    </template>
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
