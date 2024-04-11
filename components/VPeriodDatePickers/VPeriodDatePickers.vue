<script setup lang="ts">
import { computed, ref, unref } from 'vue'

const range = ref([])
const menu = ref(false)
const model = defineModel<Date[]>()
const dates = computed({
  get: datesBetween,
  set: updateRange
})

const dateRangeText = computed(() => {
  if (model.value === undefined || model.value.length === 0) {
    return '登録した日付が入ります。'
  }
  const [start, end] = unref(model)
  if (!!start && !!end) {
    return `${start.toLocaleDateString()}
      ~ ${end.toLocaleDateString()}`
  } else if (isToday(start)) {
    return 'テスト'
  } else {
    return start.toLocaleDateString()
  }
})

function updateRange (date) {
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
    const currentDate = new Date(start)
    while (currentDate <= end) {
      between.push(new Date(currentDate))
      currentDate.setDate(currentDate.getDate() + 1)
    }
    return between
  } else {
    return range.value
  }
}

function isToday (date) {
  const today = new Date(Date.now())
  today.setHours(0, 0, 0, 0)
  return today.getTime() === date.getTime()
}

function save () {
  model.value = range.value
  menu.value = false
}

function cancel () {
  range.value = model.value || []
  menu.value = false
}
</script>

<template>
  <div>
    <p>{{ dateRangeText }}</p>
    <v-date-picker
      v-model="dates"
      hide-header
      class="datePicker mt-4"
      show-adjacent-months
      show-current
      scrollable
      rounded
      elevation="5"
      :max="new Date()"
    >
      <template #actions>
        <v-btn color="primary" variant="text" label="cancel" @click="cancel" />
        <v-btn color="primary" variant="text" label="OK" @click="save" />
      </template>
    </v-date-picker>
  </div>
</template>
