<script setup lang="ts">
defineProps<{
  label: string
}>()
const emits = defineEmits<{
  click: [label: string];
}>()
</script>

<template>
  <v-btn color="primary" @click="() => emits('click', 'Event')">
    {{ label }}
  </v-btn>
</template>

<style scoped>

</style>
