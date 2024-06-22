<script setup lang="ts">
import { ref } from 'vue'
import { toInnerHTML } from '@/utils/toInnerHTML'
import Tooltip from '@/components/ApexCharts/Tooltip.vue'

const options = ref({
  chart: {
    id: 'vuechart-example'
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
  },
  tooltip: {
    custom: ({ series, seriesIndex, dataPointIndex, w }) => toInnerHTML(Tooltip, {
      text: `${w.globals.labels[dataPointIndex]} 年`,
      data: `${series[seriesIndex][dataPointIndex]} 万人`
    })
  }
})

const series = ref([{
  name: 'series-1',
  data: [30, 40, 45, 50, 49, 60, 70, 91]
}])
</script>

<template>
  <apexchart type="bar" :options="options" :series="series" />
</template>
