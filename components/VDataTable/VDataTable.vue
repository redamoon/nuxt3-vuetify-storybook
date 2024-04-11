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
  isHideHeader: boolean
  headers: Header[]
  items: Item[]
}>()
</script>

<template>
  <v-data-table
    :headers="props.headers"
    :items="props.items"
  >
    <template v-if="props.isHideHeader" #header />
    <template v-if="props.isPagination" #bottom />
  </v-data-table>
</template>

<style scoped>

</style>
