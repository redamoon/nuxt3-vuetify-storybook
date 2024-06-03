<script setup lang="ts">
import VDatePickers from '@/components/VDatePickers/VDatePickers.vue'
import VMaskTextField from '@/components/VMaskTextField/VMaskTextField.vue'
import VTextField from '@/components/VTextField/VTextField.vue'

const props = withDefaults(defineProps<{
  hideHeader?: boolean
  hideWeekdays?: boolean
  multiple?: boolean | 'range';
  isActions?: boolean;
  bgColor?: string;
  color?: string;
  disabled?: boolean;
  showAdjacentMonths?: boolean;
  elevation?: number;
  border?: number;
  header: string;
  variant: 'underlined'

  | 'outlined'
  | 'filled'
  | 'solo'
  | 'solo-inverted'
  | 'solo-filled'
  | 'plain'
}>(), {
  multiple: false,
  bgColor: undefined,
  color: undefined,
  disabled: false,
  showAdjacentMonths: true,
  elevation: 0,
  border: 15,
  variant: 'filled',
  isActions: false,
  hideHeader: true
})

const onClear = () => {
  console.log('onClear')
}

const onSave = () => {
  console.log('onSave')
}
</script>

<template>
  <div>
    <VMaskTextField
      label="ヘッダー"
      placeholder="ヘッダー"
      :variant="props.variant"
      :bg-color="props.bgColor"
      :color="props.color"
      :disabled="props.disabled"
      :border="props.border"
    />
    <v-sheet elevation="15">
      <VDatePickers
        v-bind="props"
      />
      <v-btn color="info" label="クリア" @click="onClear">
        クリア
      </v-btn>
      <v-btn color="primary" label="保存" @click="onSave">
        保存
      </v-btn>
    </v-sheet>
  </div>
</template>
