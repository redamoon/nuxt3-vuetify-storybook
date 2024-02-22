<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <v-btn color="primary">
    {{ label }}
  </v-btn>
</template>

<style scoped>

</style>
