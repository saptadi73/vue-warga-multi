<template>
  <div>
    <apexchart type="donut" width="500" :options="chartOptions" :series="series" />
  </div>
</template>

<script setup>
import ApexCharts from 'vue3-apexcharts'

const series = [3500000, 2500000, 1500000] // Income sources in IDR
const chartOptions = {
  labels: ['Salary', 'Freelance', 'Investments'],
  title: {
    text: 'Income Sources',
    align: 'left'
  },
  dataLabels: {
    formatter: (val) => `${val.toFixed(1)}%`
  },
  tooltip: {
    y: {
      formatter: (val) => `Rp ${val.toLocaleString()}`
    }
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
