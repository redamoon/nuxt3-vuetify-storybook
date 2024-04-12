<script setup lang="ts">
import { ref } from 'vue'

const dateValue = ref([])

const props = withDefaults(defineProps<{
  hideHeader?: boolean
  multiple?: boolean | 'range';
  isActions?: boolean;
  bgColor?: string;
  color?: string;
  disabled?: boolean;
  showAdjacentMonths?: boolean;
  elevation?: number;
  border?: number;
  header?: string;
}>(), {
  multiple: false,
  bgColor: undefined,
  color: undefined,
  disabled: false,
  showAdjacentMonths: true,
  elevation: 24,
  border: 15,
  header: '日付選択'
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
    :multiple="props.multiple"
    :hide-header="props.hideHeader"
    :elevation="props.elevation"
    :bg-color="props.bgColor"
    :color="props.color"
    :disabled="props.disabled"
    :show-adjacent-months="props.showAdjacentMonths"
    :border
    :header
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
