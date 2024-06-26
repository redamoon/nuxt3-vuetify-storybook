<script setup lang="ts">
import { ref } from 'vue'

const tabs = ref(null)
</script>

<template>
  <p>このページは VTabs で Toのページ遷移を試したTabsコンポーネントです。</p>
  <p>明示的にv-tabsの下にrouter-viewを差し込んで検証しています。</p>
  <v-tabs v-model="tabs">
    <v-tab value="1" to="/">
      コンテンツ1
    </v-tab>
    <v-tab value="2" to="/about">
      コンテンツ2
    </v-tab>
  </v-tabs>
  <router-view />
</template>
