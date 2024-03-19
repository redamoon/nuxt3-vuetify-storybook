<script setup lang="ts">
import { ref } from 'vue'

const dateValue = ref([])

withDefaults(defineProps<{
  hideHeader?: boolean
  multiple?: boolean;
  isActions?: boolean;
  bgColor?: string;
  color?: string;
  disabled?: boolean;
  showAdjacentMonths?: boolean;
}>(), {
  multiple: false,
  bgColor: undefined,
  color: undefined,
  disabled: false,
  showAdjacentMonths: true
})

const emits = defineEmits<{
  'update:modelValue': [value: Date[] | Date]
}>()

const onClear = () => {
  dateValue.value = []
  emits('update:modelValue', dateValue.value)
}
const onSave = () => {
  emits('update:modelValue', dateValue.value)
}

</script>

<template>
  <v-date-picker
    v-model="dateValue"
    :multiple
    :hide-header
    elevation="24"
    :bg-color
    :color
    :disabled
    :show-adjacent-months
  >
    <template v-if="isActions" #actions>
      <v-btn color="info" label="クリア" @click="onClear">
        クリア
      </v-btn>
      <v-btn color="primary" label="保存" @click="onSave">
        保存
      </v-btn>
    </template>
  </v-date-picker>
</template>
