<script setup lang="ts">
import { ref } from 'vue'
const showContents = ref(false)
const tab = ref(null)
</script>
<template>
  <NuxtLayout>
    <v-app>
      <v-sheet class="pa-4 text-center mx-auto">
        <v-btn color="primary" @click="showContents = !showContents">
          <template v-if="!showContents">
            Open Content
          </template>
          <template v-if="showContents">
            Close Content
          </template>
        </v-btn>
      </v-sheet>
      <v-sheet v-if="showContents" class="pa-4 text-center mx-auto">
        コンテンツです。
      </v-sheet>
      <v-tabs v-model="tab">
        <v-tab to="/">
          Home
        </v-tab>
        <v-tab to="/about">
          About
        </v-tab>
      </v-tabs>
      <v-window>
        <v-window-item value="/">
          <NuxtPage />
        </v-window-item>
        <v-window-item value="/about">
          <NuxtPage />
        </v-window-item>
      </v-window>
    </v-app>
  </NuxtLayout>
</template>
