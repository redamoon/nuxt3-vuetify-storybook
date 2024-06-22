<script setup lang="ts">
const props = defineProps<{
  text: string,
  data: string
}>()
</script>

<template>
  <v-card color="#CCC" class="bg-amber-accent-4 pa-2">
    <v-card-title class="font-weight-bold">
      {{ props.text }}
    </v-card-title>
    <v-card-text>
      <div>{{ props.data }}</div>
    </v-card-text>
  </v-card>
</template>
