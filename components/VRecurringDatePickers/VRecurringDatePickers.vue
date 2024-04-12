<script setup lang="ts">
// import type { Ref } from 'vue'
import { computed, ref, unref } from 'vue'

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

const range = ref<Date[]>([])
const model = defineModel<Date[]>()
const dates = computed({
  get: datesBetween,
  set: updateRange
})

const emits = defineEmits(['update:modelValue'])

const isToday = (date: Date) => {
  const today = new Date(Date.now())
  today.setHours(0, 0, 0, 0)
  return today.getTime() === date.getTime()
}

const onSave = () => {
  model.value = range.value
  emits('update:modelValue', model.value)
}

const onClear = () => {
  range.value = model.value || []
  emits('update:modelValue', range.value)
}

const dateRangeText = computed(() => {
  if (model.value === undefined || model.value.length === 0) {
    return '登録した日付が入ります。'
  }
  const [start, end] = unref(model)
  if (!!start && !!end) {
    return `${start.toLocaleDateString()}
      ~ ${end.toLocaleDateString()}`
  } else if (isToday(start)) {
    return start.toLocaleDateString() + ':今日'
  } else {
    return start.toLocaleDateString()
  }
})

const minDate = computed(() => {
  const today = new Date(Date.now())
  today.setHours(0, 0, 0, 0) // Clear the time information and compare only the date
  return today
})

function updateRange (date: Date) {
  const [start, end] = unref(range)
  // if everything is null or everything is not
  if (!!start === !!end) {
    range.value = [date]
  } else if (date < start) {
    range.value = [date, start]
  } else if (date > start) {
    range.value = [start, date]
  }
}

function datesBetween () {
  if (range.value === undefined) {
    return []
  }
  const [start, end] = unref(range)
  if (!!start && !!end) {
    const between = []
    const currentDate: Date = new Date(start)
    while (currentDate <= end) {
      between.push(new Date(currentDate))
      currentDate.setDate(currentDate.getDate() + 1)
    }
    return between
  } else {
    return range.value
  }
}
</script>

<template>
  <div>
    <p>{{ dateRangeText }}</p>
    <v-date-picker
      v-model="dates"
      :hide-header="props.hideHeader"
      class="datePicker mt-4"
      show-adjacent-months
      show-current
      scrollable
      rounded
      elevation="5"
      :min="minDate"
    >
      <template #actions>
        <v-btn color="info" label="クリア" @click="onClear">
          クリア
        </v-btn>
        <v-btn color="primary" label="保存" @click="onSave">
          保存
        </v-btn>
      </template>
    </v-date-picker>
  </div>
</template>
