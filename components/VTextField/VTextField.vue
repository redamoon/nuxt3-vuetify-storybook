<script setup lang="ts">
const props = withDefaults(defineProps<{
  label: string
  type: string
}>(), {
  type: 'text'
})
</script>

<template>
  <div>
    <v-text-field :label="props.label" :type="props.type" />
  </div>
</template>
