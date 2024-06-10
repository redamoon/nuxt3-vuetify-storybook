<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-title>
        <template #default="{ expanded }">
          <v-row no-gutters>
            <v-col class="d-flex justify-start" cols="4">
              フィールド
            </v-col>
            <v-col
              class="text-grey"
              cols="8"
            >
              <v-fade-transition leave-absolute>
                <span
                  v-if="expanded"
                  key="0"
                >
                  名前を入力する
                </span>
                <span
                  v-else
                  key="1"
                >
                  {{ localName }}
                </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <VTextField v-model="localName" type="text" placeholder="名前を入力" />
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import VTextField from '@/components/VTextField/VTextField.vue'

const props = withDefaults(defineProps<{
  name: string
}>(), {
  name: ''
})

const localName = ref(props.name)

watch(() => props.name, (newValue) => {
  localName.value = newValue
})

watch(localName, (newValue) => {
  console.log(newValue)
})
</script>
