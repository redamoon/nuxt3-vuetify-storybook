<script setup lang="ts">
import { ref } from 'vue'

const dateValue = ref([])

withDefaults(defineProps<{
  hideHeader?: boolean
  multiple?: boolean;
  isActions?: boolean;
}>(), {
  multiple: false
})
</script>

<template>
  <v-date-picker v-model="dateValue" :multiple :hide-header elevation="24">
    <template v-if="isActions" #actions>
      ここにフッター情報を追加できる
    </template>
  </v-date-picker>
</template>
