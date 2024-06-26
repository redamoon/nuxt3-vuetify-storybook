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
  <p>このページは VWindow VTabs の外に配置して利用した場合のTabsコンポーネントです。</p>
  <p>VWindowをタブのように使う場合は、v-sheetなどブロック要素にした上で、v-tabsの外で定義しなければならない。</p>
  <v-tabs v-model="tabs">
    <v-tab value="1">
      コンテンツ1
    </v-tab>
    <v-tab value="2">
      コンテンツ2
    </v-tab>
  </v-tabs>
  <v-window v-model="tabs">
    <v-window-item value="1" :transition="props.transition" :reverse-transition="props.transition">
      <v-sheet
        tile
      >
        <v-card variant="flat">
          <v-card-title>コンテンツ1</v-card-title>
          <v-card-text>
            コンテンツ1です。
          </v-card-text>
        </v-card>
      </v-sheet>
    </v-window-item>
    <v-tabs-window-item value="2" :transition="props.transition" :reverse-transition="props.transition">
      <v-sheet
        tile
      >
        <v-card variant="flat">
          <v-card-title>コンテンツ2</v-card-title>
          <v-card-text>
            コンテンツ2です。
          </v-card-text>
        </v-card>
      </v-sheet>
    </v-tabs-window-item>
    <v-tabs-window-item value="3" :transition="transition" :reverse-transition="transition">
      <v-sheet
        tile
      >
        <v-card variant="flat">
          <v-card-title>コンテンツ3</v-card-title>
          <v-card-text>
            コンテンツ3です。
          </v-card-text>
        </v-card>
      </v-sheet>
    </v-tabs-window-item>
  </v-window>
</template>
