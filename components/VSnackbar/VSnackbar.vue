<script setup lang="ts">
import { ref } from 'vue'

const snackbar = ref(true)
const text = 'I am a multi-line snackbar.\nI can have more than one line. This is another line that is quite long.'
</script>

<template>
  <v-snackbar
    v-model="snackbar"
    multi-line
  >
    {{ text }}

    <template #actions>
      <v-btn
        color="primary"
        variant="text"
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>
