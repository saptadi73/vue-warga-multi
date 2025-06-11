<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto p-4">
    <!-- Donut Chart -->
    <div>
      <h2 class="text-lg font-bold text-center mb-2">Donut Chart</h2>
      <Doughnut :data="donutData" :options="chartOptions" />
    </div>


  </div>
</template>

<script setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js'

import { Doughnut, Pie } from 'vue-chartjs'

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement)

// Shared options
const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom'
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return `${context.label}: Rp ${context.raw.toLocaleString()}`
        }
      }
    },
    title: {
      display: false
    }
  }
}

// Donut chart data
const donutData = {
  labels: ['Salary', 'Freelance', 'Investments'],
  datasets: [
    {
      label: 'Income Sources',
      data: [5000000, 2500000, 1500000],
      backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56']
    }
  ]
}

</script>
