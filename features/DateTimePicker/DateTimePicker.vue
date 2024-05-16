<script setup lang="ts">
import VDatePickers from '@/components/VDatePickers/VDatePickers.vue'

const props = {
  hideHeader: false,
  hideWeekdays: false,
  multiple: false,
  isActions: true,
  border: 0,
  header: 'ヘッダー'
}
</script>

<template>
  <VDatePickers
    v-bind="props"
  />
</template>
