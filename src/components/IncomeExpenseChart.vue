<template>
  <div>
    <apexchart
      type="line"
      height="400"
      :options="chartOptions"
      :series="series"
      
    />
  </div>
</template>

<script setup>
import ApexCharts from 'vue3-apexcharts'
import { ref } from 'vue'
import axios from 'axios';
import { onMounted } from 'vue';

async function getDataIuran() {

}

const series = [
  {
    name: 'Income',
    data: [4000, 4200, 4500, 4800, 5000, 5300, 5500]
  },
  {
    name: 'Revenue',
    data: [3000, 1200, 3500, 3700, 3300, 6600, 1500]
  },
  {
    name: 'Expense',
    data: [3200, 3300, 3500, 3600, 3900, 4000, 4200]
  }
]

const chartOptions = {
  chart: {
    id: 'income-expense-line',
    toolbar: {
      show: true
    }
  },
  title: {
    text: 'Income vs Revenue vs Expense',
    align: 'left'
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
  },
  yaxis: {
    title: {
      text: 'Amount (IDR)'
    }
  },
  stroke: {
    curve: 'smooth'
  },
  tooltip: {
    y: {
      formatter: val => `Rp ${val.toLocaleString()}`
    }
  },
  dataLabels: {
    enabled: true,
  },
  legend: {
    show: false,
    position: 'bottom',
    horizontalAlign: 'center',
  },
}
</script>

<script>
export default {
  components: {
    apexchart: ApexCharts
  }
}
</script>
<style>

</style>
