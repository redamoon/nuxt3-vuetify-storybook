<script setup lang="ts">
import { computed, ref } from 'vue'

interface Header {
  title: string
  align?: string
  sortable: boolean
  key: string
}

interface Item {
  name: string
  id?: number | undefined
  key?: number
  children?: { name: string }[]
}

const props = defineProps<{
  headers: Header[]
  items: Item[]
  isHideHeader?: boolean
  isPagination?: boolean
  expanded?: boolean
}>()

const search = ref('')

const items = computed(() => props.items.map(({ key: id, ...others }) => ({ ...others, id })))
</script>

<template>
  <v-data-table
    :headers="props.headers"
    :items="items"
    :expand-on-click="props.expanded"
    :show-expand="props.expanded"
    :search="search"
    :custom-filter="() => true"
  >
    <template #top>
      <v-text-field
        v-model="search"
        variant="underlined"
        label="Search"
      />
    </template>
    <template v-if="props.isHideHeader" #headers />
    <template #expanded-row="{ item }">
      <td :colspan="props.headers.length + 1">
        <v-sheet class="expanded-row">
          <v-data-table :headers="props.headers" :items="item.children" class="bg-transparent px-5 py-5">
            <template #headers />
            <template #bottom />
          </v-data-table>
        </v-sheet>
      </td>
    </template>
    <template v-if="props.isPagination" #bottom />
  </v-data-table>
</template>

<style scoped>
.expanded-row {
  box-shadow: 0 0 8px 5px rgba(0, 0, 0, 0.5) inset;
}
</style>
