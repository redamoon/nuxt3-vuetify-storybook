<script setup lang="ts">
defineProps<{
  label: string
  variant?: 'plain' | 'outlined' | 'tonal' | 'text' | undefined
}>()
const emits = defineEmits<{
  click: [label: string];
}>()
</script>

<template>
  <v-btn :label="label" color="primary" :variant="variant" @click="() => emits('click', 'Event')">
    {{ label }}
  </v-btn>
</template>

<style scoped>

</style>
