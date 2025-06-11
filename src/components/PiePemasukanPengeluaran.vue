<template>
  <div>
    <apexchart type="pie" width="500" :options="chartOptions" :series="series" />
  </div>
</template>

<script setup>
import ApexCharts from 'vue3-apexcharts'

const series = [44, 33, 12, 11]  // example values
const chartOptions = {
  labels: ['Food', 'Rent', 'Utilities', 'Entertainment'],
  title: {
    text: 'Monthly Expenses Breakdown',
    align: 'left'
  },
  legend: {
    position: 'bottom'
  }
}
</script>

<script>
export default {
  components: {
    apexchart: ApexCharts
  }
}
</script>
