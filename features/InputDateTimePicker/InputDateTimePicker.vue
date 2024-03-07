<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
const props = defineProps<{
  startDate: string | null
  startTime: string | null
  endDate: string | null
  endTime: string | null
}>()
const internalStartDate = ref<string | null>(null)
const internalStartTime = ref<string | null>(null)
const internalEndDate = ref<string | null>(null)
const internalEndTime = ref<string | null>(null)

watch(() => props.startDate, (newValue) => {
  internalStartDate.value = newValue
})

watch(() => props.startTime, (newValue) => {
  internalStartTime.value = newValue
})

watch(() => props.endDate, (newValue) => {
  internalEndDate.value = newValue
})

watch(() => props.endTime, (newValue) => {
  internalEndTime.value = newValue
})

onMounted(() => {
  internalStartDate.value = props.startDate
  internalStartTime.value = props.startTime
  internalEndDate.value = props.endDate
  internalEndTime.value = props.endTime
})
</script>

<template>
  <v-sheet>
    <v-row no-gutters>
      <v-text-field
        v-model="internalStartDate"
        type="date"
      />
      <v-text-field
        v-model="internalStartTime"
        type="time"
      />
      <v-text-field
        v-model="internalEndDate"
        type="date"
      />
      <v-text-field
        v-model="internalEndTime"
        type="time"
      />
    </v-row>
  </v-sheet>
</template>
