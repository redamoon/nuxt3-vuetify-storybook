<template>
  <div>
    <v-combobox
      :items="items"
      :model-value="modelValue"
      item-title="name"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type Item = {
  name: string
  url: string
  id: number
}

const items = ref([
  { name: 'Ken', url: 'https://picsum.photos/60/60', id: 1 },
  { name: 'John', url: 'https://picsum.photos/60/60', id: 2 }
])

const modelValue = ref<Item | null>(null)
</script>
