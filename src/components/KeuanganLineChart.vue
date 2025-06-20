<template>
  <div>
    <canvas ref="chart"></canvas>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { BASE_URL } from '../base.url.utils'

import {
  Chart,
  Title,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js'

export default {
  setup() {
    const chart = ref(null)
    const myChart = ref(null)
    const id_tenant = localStorage.getItem("id_tenant");

    // ✅ Ambil data dan tampilkan chart
    const fetchChartData = async () => {
      try {
        const [marketingRes, incomeRes, expenseRes] = await Promise.all([
          axios.get(`${BASE_URL}bayar/iuran/deret/bulan/${id_tenant}`),
          axios.get(`${BASE_URL}bayar/masuk/deret/bulan/${id_tenant}`),
          axios.get(`${BASE_URL}bayar/keluar/deret/bulan/${id_tenant}`)
        ])

        const labels = marketingRes.data.result.map(item => item.bulan)
        const dataMarketing = marketingRes.data.result.map(item => item.total)
        const dataIncome = incomeRes.data.result.map(item => item.total)
        const dataExpense = expenseRes.data.result.map(item => item.total)

        // ❗ Pastikan chart hanya dibuat sekali
        if (myChart.value) {
          myChart.value.destroy()
        }

        // ✅ Inisialisasi Chart
        myChart.value = new Chart(chart.value, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Iuran',
                data: dataMarketing,
                backgroundColor: 'rgba(255, 99, 132, 0.7)',
                stack: 'stack1'
              },
              {
                label: 'Pemasukan Lain',
                data: dataIncome,
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
                stack: 'stack1'
              },
              {
                label: 'Pengeluaran',
                data: dataExpense,
                backgroundColor: 'rgba(255, 206, 86, 0.7)',
                stack: 'stack2'
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'Perbandingan Data (Iuran + Pemasukan Lain vs Pengeluaran)'
              },
              tooltip: {
                callbacks: {
                  afterBody: (context) => {
                    if (context[0].dataset.stack === 'stack1') {
                      const total = context.reduce((sum, item) => sum + item.raw, 0)
                      return `Total (Pemasukan dan Iuran): Rp ${total.toLocaleString()}`
                    }
                  }
                }
              }
            },
            scales: {
              x: { stacked: true },
              y: { stacked: true }
            }
          }
        })
      } catch (err) {
        console.error('Gagal mengambil data chart:', err)
      }
    }

    // ✅ Registrasi & panggil saat mount
    onMounted(() => {
      Chart.register(Title, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend)
      fetchChartData()
    })

    return { chart,id_tenant }
  }
}
</script>
