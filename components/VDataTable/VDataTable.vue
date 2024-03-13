<script setup lang="ts">
interface Header {
  title: string
  align: string
  sortable: boolean
  key: string
}
interface Item {
  name: string
  key: string
}

const props = defineProps<{
  isPagination: boolean
  headers: Header[]
  items: Item[]
}>()
</script>

<template>
  <v-data-table
    :headers="props.headers"
    :items="props.items"
    is-pagination
  >
    <template v-if="props.isPagination" #bottom />
  </v-data-table>
</template>

<style scoped>

</style>
