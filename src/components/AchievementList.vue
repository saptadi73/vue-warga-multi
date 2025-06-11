<template>
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Nama Target
          </th>
          <th
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Jumlah Warga/Transaksi
          </th>
          <th
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Total Nilai
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm font-medium text-gray-900">Iuran Wajib</div>
            <div class="text-sm text-gray-500">Bulan ini</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div>
              {{ jmlWargaSetorBulan }}
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            {{ jmlSetoranIuranBulan }}
          </td>
        </tr>
        <tr>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm font-medium text-gray-900">Pemasukan Lain-lain</div>
            <div class="text-sm text-gray-500">Bulan ini</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div>
              {{ jmlTransaksiPemasukanLain }}
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            {{ jmlPemasukanLainBulan }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import {
  getWargaSetorBulan,
  listWargaSetorBulan,
  jmlSetoranIuranBulan,
  getJmlSetoranBulan,
  getJumlahWargaSetoranBulan,
  jmlWargaSetorBulan,
  getTransaksiPemasukanLainBulan,
  jmlTransaksiPemasukanLain,
  getjmlPemasukanLainBulan,
  jmlPemasukanLainBulan,
  getListPemasukanBulan,
  listPemasukanLainBulan,
} from "./dashboard.js"; // sesuaikan path

// Jika props tetap diperlukan:
defineProps({
  items: Array,
});

// Fungsi status
function getStatusText(status) {
  const statusMap = {
    completed: "Selesai",
    "in-progress": "Dalam Proses",
    "not-started": "Belum Dimulai",
  };
  return statusMap[status] || status;
}

// Panggil data dari dashboard.js
onMounted(async () => {
  await getWargaSetorBulan();
  console.log("List warga Setor Iuran: ", listWargaSetorBulan.value);

  await getJumlahWargaSetoranBulan();
  console.log("Jumlah Warga setor bulan: ", jmlWargaSetorBulan.value);

  await getJmlSetoranBulan();
  console.log("Data Jumlah Iuran Bulan: ", jmlSetoranIuranBulan.value);

  await getTransaksiPemasukanLainBulan();
  console.log('Jumlah Transaksi Pemasukan lain :', jmlTransaksiPemasukanLain.value);

  await getjmlPemasukanLainBulan();
  console.log('Jumlah Pemasukan Lain Bulan :', jmlPemasukanLainBulan.value);

});
</script>
