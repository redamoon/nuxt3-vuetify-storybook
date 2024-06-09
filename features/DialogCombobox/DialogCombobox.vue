<template>
  <div>
    <v-combobox
      :items="items"
      :model-value="modelValue"
      item-title="name"
    >
      <template #prepend-item>
        <v-list-item @click="clickPrepend">
          <v-list-item-title> モーダルを表示 </v-list-item-title>
        </v-list-item>
        <v-divider class="mt-2 mb-1" />
      </template>
      <template #selection="{ item }">
        {{ item.raw.name }}
      </template>
      <template #item="{ item, index }">
        <v-list-item :class="selectedId === item.raw.id && 'active'" @click="selectedItem(index)">
          <v-list-item-title>
            {{ item.raw.name }}
          </v-list-item-title>
        </v-list-item>
      </template>
    </v-combobox>

    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          モーダルダイアログ
        </v-card-title>
        <v-card-text> モーダルダイアログの内容 </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type Item = {
  name: string
  url: string
  id: number
}

const dialog = ref(false)
const items = ref([
  { name: 'Ken', url: 'https://randomuser.me/apix', id: 1 },
  { name: 'John', url: 'https://randomuser.me/apix', id: 2 }
])

const modelValue = ref<Item | null>(null)
const selectedId = ref<number | null>(null)

const clickPrepend = () => {
  dialog.value = true
}

const selectedItem = (index: number) => {
  modelValue.value = items.value[index]
  selectedId.value = items.value[index].id
}
</script>

<style scoped>
.active {
  background-color: #CCC;
}
</style>
