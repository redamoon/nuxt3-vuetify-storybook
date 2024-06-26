<script setup lang="ts">
import { ref } from 'vue'
const showContents = ref(false)
const tabsWindow = ref(null)
const tabs = ref(null)
const tabsWindow2 = ref(null)
</script>

<template>
  <NuxtLayout>
    <v-app>
      <p>VTabs VTabsWindow</p>
      <v-tabs v-model="tabs">
        <v-tab value="1">
          コンテンツ1
        </v-tab>
        <v-tab value="2">
          コンテンツ2
        </v-tab>
        <template #window>
          <v-tabs-window-item value="1" transition="none" reverse-transition="none">
            <v-card variant="flat">
              <v-card-title>コンテンツ1</v-card-title>
              <v-card-text>
                コンテンツ1です。
              </v-card-text>
            </v-card>
          </v-tabs-window-item>
          <v-tabs-window-item value="2" transition="none" reverse-transition="none">
            <v-card variant="flat">
              <v-card-title>コンテンツ2</v-card-title>
              <v-card-text>
                コンテンツ2です。
              </v-card-text>
            </v-card>
          </v-tabs-window-item>
        </template>
      </v-tabs>
      <p>VTabs VWindow</p>
      <v-tabs v-model="tabsWindow2">
        <v-tab value="1">
          コンテンツ1
        </v-tab>
        <v-tab value="2">
          コンテンツ2
        </v-tab>
        <template #window>
          <v-window-item value="1">
            <v-card>
              <v-card-title>コンテンツ1</v-card-title>
              <v-card-text>
                コンテンツ1です。
              </v-card-text>
            </v-card>
          </v-window-item>
          <v-window-item value="2">
            <v-card>
              <v-card-title>コンテンツ2</v-card-title>
              <v-card-text>
                コンテンツ2です。
              </v-card-text>
            </v-card>
          </v-window-item>
        </template>
      </v-tabs>
      <p>VTabs ページ遷移</p>
      <v-tabs>
        <v-tab to="/">
          Home
        </v-tab>
        <v-tab to="/about">
          About
        </v-tab>
      </v-tabs>
      <nuxt-page />
    </v-app>
  </NuxtLayout>
</template>
