<script setup lang="ts">
interface Header {
  title: string
  align?: string
  sortable: boolean
  key: string
}

interface Item {
  name: string
  key: number
  children?: { name: string }[]
}

const props = defineProps<{
  headers: Header[]
  items: Item[]
  isHideHeader?: boolean
  isPagination?: boolean
  expanded?: boolean
}>()
</script>

<template>
  <v-data-table
    :headers="props.headers"
    :items="props.items"
    :expand-on-click="props.expanded"
    :show-expand="props.expanded"
  >
    <template v-if="props.isHideHeader" #header />
    <template #expanded-row="{ item }">
      <td :colspan="props.headers.length">
        <ul v-if="item.children && item.children.length">
          <li v-for="child in item.children" :key="child.name">
            {{ child.name }}
          </li>
        </ul>
      </td>
    </template>
    <template v-if="props.isPagination" #bottom />
  </v-data-table>
</template>
