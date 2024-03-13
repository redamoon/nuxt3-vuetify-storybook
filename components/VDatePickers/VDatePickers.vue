<script setup lang="ts">
import { ref } from 'vue'

const dateValue = ref([])
</script>

<template>
  <v-date-picker v-model="dateValue" :allowed-dates="[]" multiple hide-header>
    <template #actions>
      ここにフッター情報を追加できる
    </template>
  </v-date-picker>
</template>
