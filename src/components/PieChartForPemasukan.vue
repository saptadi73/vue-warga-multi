<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto p-4">

    <!-- Pie Chart -->
    <div>
      <h2 class="text-lg font-bold text-center mb-2">Pie Chart</h2>
      <Pie :data="pieData" :options="chartOptions" />
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



// Pie chart data
const pieData = {
  labels: ['Food', 'Rent', 'Utilities', 'Entertainment'],
  datasets: [
    {
      label: 'Monthly Expenses',
      data: [1500000, 2000000, 800000, 500000],
      backgroundColor: ['#4BC0C0', '#FF9F40', '#9966FF', '#FF6384']
    }
  ]
}
</script>
