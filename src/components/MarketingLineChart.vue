<template>
  <div class="w-full max-w-3xl mx-auto">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from 'chart.js'
import { Line } from 'vue-chartjs'
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { BASE_URL } from '../base.url.utils'

// Register Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale
)

// 1. Reactive chart data
const chartData = ref({
  labels: [],
  datasets: []
})

// 2. Chart options
const chartOptions = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Iuran vs Pemasukan Lain vs Pengeluaran',
      font: {
        size: 18
      }
    },
    legend: {
      position: 'bottom'
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return `${context.dataset.label}: Rp ${context.raw.toLocaleString()}`
        }
      }
    }
  },
  scales: {
    y: {
      title: {
        display: true,
        text: 'Nominal (Rp)'
      },
      ticks: {
        callback: function (value) {
          return 'Rp ' + value.toLocaleString()
        }
      }
    }
  }
}

// 3. Ambil data dari 3 API dan set ke chart
async function fetchChartData() {
  try {
    const [marketingRes, incomeRes, expenseRes] = await Promise.all([
      axios.get(`${BASE_URL}bayar/iuran/deret/bulan`),
      axios.get(`${BASE_URL}bayar/masuk/deret/bulan`),
      axios.get(`${BASE_URL}bayar/keluar/deret/bulan`)
    ])

    const labelBulan = marketingRes.data.result.map(item => item.bulan)
    const dataMarketing = marketingRes.data.result.map(item => item.total)
    const dataIncome = incomeRes.data.result.map(item => item.total)
    const dataExpense = expenseRes.data.result.map(item => item.total)

    chartData.value = {
      labels: labelBulan,
      datasets: [
        {
          label: 'Iuran',
          data: dataMarketing,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          fill: false,
          tension: 0.3
        },
        {
          label: 'Pemasukan Lain',
          data: dataIncome,
          borderColor: 'rgba(54, 162, 235, 1)',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          fill: false,
          tension: 0.3
        },
        {
          label: 'Pengeluaran',
          data: dataExpense,
          borderColor: 'rgba(255, 206, 86, 1)',
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          fill: false,
          tension: 0.3
        }
      ]
    }
    // console.log("data Iuran", dataMarketing);
    // console.log("data Pemasukan", dataIncome);
    // console.log("data Pengeluaran", dataExpense);
  } catch (err) {
    console.error('Gagal mengambil data chart:', err)
  }
}

// 4. Jalankan saat komponen mounted
onMounted(() => {
  fetchChartData()
})
</script>
