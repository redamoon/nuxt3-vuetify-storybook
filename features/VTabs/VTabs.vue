<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(defineProps<{
  transition?: string
  reverseTransition?: string
}>(), {
  transition: undefined,
  reverseTransition: undefined
})

const tabs = ref(null)
</script>

<template>
  <v-tabs v-model="tabs">
    <v-tab value="1">
      コンテンツ1
    </v-tab>
    <v-tab value="2">
      コンテンツ2
    </v-tab>
    <template #window>
      <v-tabs-window-item value="1" :transition="transition" :reverse-transition="transition">
        <v-card variant="flat">
          <v-card-title>コンテンツ1</v-card-title>
          <v-card-text>
            コンテンツ1です。
          </v-card-text>
        </v-card>
      </v-tabs-window-item>
      <v-tabs-window-item value="2" :transition="transition" :reverse-transition="transition">
        <v-card variant="flat">
          <v-card-title>コンテンツ2</v-card-title>
          <v-card-text>
            コンテンツ2です。
          </v-card-text>
        </v-card>
      </v-tabs-window-item>
    </template>
  </v-tabs>
</template>
