<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto p-4">
    <!-- Donut Chart -->
    <div class="flex flex-col items-center">
      <h2 class="text-lg font-bold text-center mb-2">Donut Chart</h2>
      <div class="w-[500px] h-[500px]">
        <Doughnut
          :data="donutData"
          :options="{ ...chartOptions1, maintainAspectRatio: false }"
        />
      </div>
    </div>
    <!-- Pie Chart -->
    <div class="flex flex-col items-center">
      <h2 class="text-lg font-bold text-center mb-2">Pie Chart</h2>
      <div class="w-[500px] h-[500px]">
        <Pie
          :data="pieData"
          :options="{ ...chartOptions2, maintainAspectRatio: false }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

import { Doughnut, Pie } from "vue-chartjs";
import axios from "axios";
import { ref, onMounted } from "vue";
import { BASE_URL } from "../base.url.utils";

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

// Shared options
const chartOptions1 = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return `${context.label}: Rp ${context.raw.toLocaleString()}`;
        },
      },
    },
    title: {
      display: true,
      text: 'Kontribusi Iuran dan Pemasukan Lain'
    },
  },
};

const chartOptions2 = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return `${context.label}: Rp ${context.raw.toLocaleString()}`;
        },
      },
    },
    title: {
      display: true,
      text: 'Jenis-jenis Pengeluaran'
    },
  },
};

//Donut chart data
// const donutData = {
//   labels: ["Iuran", "Pemasukan Lain"],
//   datasets: [
//     {
//       label: "Sumber Pendapatan",
//       data: [5000000, 2500000],
//       backgroundColor: ["#36A2EB", "#FF6384"],
//     },
//   ],
// };

const donutData = ref({
  labels: [],
  datasets: [
    {
      label: "Sumber Pendapatan",
      data: [],
      backgroundColor: [],
    },
  ],
});

// Pie chart data
// const pieData = {
//   labels: ["Food", "Rent", "Utilities", "Entertainment"],
//   datasets: [
//     {
//       label: "Monthly Expenses",
//       data: [1500000, 2000000, 800000, 500000],
//       backgroundColor: ["#4BC0C0", "#FF9F40", "#9966FF", "#FF6384"],
//     },
//   ],
// };

const pieData = ref({
    labels: [],
    datasets: [
        {
            label: "Pengeluaran",
            data: [],
            backgroundColor: [],
        },
    ],
})

async function getTotalKabeh() {
  try {
    const TotalKabehane = await axios.get(`${BASE_URL}bayar/total/total`);
    console.log("total kabehane :", TotalKabehane.data);

    const totalIuran = parseInt(TotalKabehane.data.totalIuranKabeh);
    const totalPemasukanLain = parseInt(TotalKabehane.data.totalMasukKabeh);

    donutData.value = {
      labels: ["Iuran", "Pemasukan Lain"],
      datasets: [
        {
          label: "Sumber Pendapatan",
          data: [totalIuran, totalPemasukanLain],
          backgroundColor: ["#36A2EB", "#FF6384"],
        },
      ],
    };
    console.log("donutdata :",donutData.value);
  } catch (error) {
    console.log(error);
  }
}

async function getGroupKeluar() {
  try {
    const TotalKabehane = await axios.get(`${BASE_URL}bayar/keluar/group`);
    console.log("total keluaran :", TotalKabehane.data.result);

    const PengeluaranLabels = TotalKabehane.data.result.map(item=>item.nama);
    const valuePengeluaran = TotalKabehane.data.result.map(item=>item.total);

    pieData.value = {
      labels: PengeluaranLabels,
      datasets: [
        {
          label: "Pengeluaran",
          data: valuePengeluaran,
          backgroundColor: ["#36A2EB", "#FF6384","#4BC0C0", "#FF9F40","#4BC0C0", "#FF9F40", "#9966FF", "#FF6384"],
        },
      ],
    };
    console.log("piedata :",pieData.value);
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
    getTotalKabeh();
    getGroupKeluar();

});
</script>
