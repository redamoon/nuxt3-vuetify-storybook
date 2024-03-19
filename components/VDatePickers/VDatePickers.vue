<script setup lang="ts">
import { ref } from 'vue'

const dateValue = ref([])

withDefaults(defineProps<{
  hideHeader?: boolean
  multiple?: boolean;
  isActions?: boolean;
}>(), {
  multiple: false
})

const emits = defineEmits<{
  'update:modelValue': [value: Date[] | Date]
}>()

const onSave = () => {
  emits('update:modelValue', dateValue.value)
}

</script>

<template>
  <v-date-picker v-model="dateValue" :multiple :hide-header elevation="24">
    <template v-if="isActions" #actions>
      <v-btn color="info" label="クリア" @click="dateValue = []">
        クリア
      </v-btn>
      <v-btn color="primary" label="保存" @click="onSave">
        保存
      </v-btn>
    </template>
  </v-date-picker>
</template>
