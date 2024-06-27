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
  <p>このページは VWindow を利用した場合のTabsコンポーネントです。</p>
  <p>VWindow を tabs の 子要素に配置すると tabs の領域が v-tabs のラインになりブロック要素と認識しない</p>
  <v-tabs v-model="tabs">
    <v-tab value="1">
      コンテンツ1
    </v-tab>
    <v-tab value="2">
      コンテンツ2
    </v-tab>
    <v-tab value="3">
      コンテンツ3
    </v-tab>
    <v-window v-model="tabs">
      <v-window-item value="1" :transition="props.transition" :reverse-transition="props.transition">
        <v-sheet
          height="400"
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
      <v-window-item value="2" :transition="props.transition" :reverse-transition="props.transition">
        <v-sheet
          height="400"
          tile
        >
          <v-card variant="flat">
            <v-card-title>コンテンツ2</v-card-title>
            <v-card-text>
              コンテンツ2です。
            </v-card-text>
          </v-card>
        </v-sheet>
      </v-window-item>
      <v-window-item value="3" :transition="transition" :reverse-transition="transition">
        <v-sheet
          height="400"
          tile
        >
          <v-card variant="flat">
            <v-card-title>コンテンツ3</v-card-title>
            <v-card-text>
              コンテンツ3です。
            </v-card-text>
          </v-card>
        </v-sheet>
      </v-window-item>
    </v-window>
  </v-tabs>
</template>
