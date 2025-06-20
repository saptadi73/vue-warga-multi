<template>
  <div>
    <div ref="printSection" class="overflow-x-auto w-[80vw]">
      <div class="text-center mt-10">
        <div class="font-bold text-xl text-slate-700">
          Laporan Keuangan Warga
        </div>
        <div class="text-base text-slate-500 font-Roboto">
          Tanggal {{ formattedDate }}
        </div>
        <div class="mt-5 text-base font-semibold text-slate-700 font-Poppins">
          RT.{{ RT }}/{{ RW }} , {{ dusun }}, Desa/Kel. {{ desa }}, Kec.
          {{ kecamatan }}, {{ kabupaten }}
        </div>
        <div class="font-bold text-xl font-Roboto text-slate-800">
          {{ provinsi }}
        </div>
      </div>

      <table class="min-w-full divide-y divide-gray-200 mt-10">
        <thead class="bg-gray-50">
          <tr class="bg-blue-300 font-Poppins font-bold text-black">
            <th
              class="px-6 py-3 text-left text-base font-bold text-blue-900 uppercase tracking-wider"
            >
              Item
            </th>
            <th
              class="px-6 py-3 text-base font-bold text-blue-900 uppercase tracking-wider text-right"
            >
              Sub Total
            </th>
            <th
              class="px-6 py-3 text-base font-bold text-blue-900 uppercase tracking-wider text-right"
            >
              Total
            </th>
            <th
              class="px-6 py-3 text-base font-bold text-blue-900 uppercase tracking-wider text-right"
            >
              Final
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm font-medium text-gray-900">Iuran Wajib</div>
              <div class="text-sm text-gray-500">Bulan Lalu</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right">
              {{ formatRupiah(iuranBulanLalu) }}
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm font-medium text-gray-900">
                Pemasukan Lain-lain
              </div>
              <div class="text-sm text-gray-500">Bulan Lalu</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right">
              <div>
                {{ formatRupiah(PemasukanBulanLalu) }}
              </div>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm font-medium text-gray-900">Pengeluaran</div>
              <div class="text-sm text-gray-500">Bulan Lalu</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right">
              <div>
                {{ formatRupiah(PengeluaranBulanLalu) }}
              </div>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr class="bg-slate-200">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm font-medium text-gray-900">Saldo</div>
              <div class="text-sm text-gray-500">Bulan Lalu</div>
            </td>
            <td></td>
            <td
              class="px-6 py-4 whitespace-nowrap text-right font-semibold text-black"
            >
              <div>
                {{ formatRupiah(SaldoBulanLalu) }}
              </div>
            </td>
            <td></td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm font-medium text-gray-900">Iuran Wajib</div>
              <div class="text-sm text-gray-500">yang Masuk Bulan Ini</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right">
              <div>
                {{ formatRupiah(iuranBulanIni) }}
              </div>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr v-for="(data, index) in pemasukanBulanIni" :key="index">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm font-medium text-gray-900">
                {{ data.nama }}
              </div>
              <div class="text-sm text-gray-500">Pemasukan Bulan Ini</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right">
              <div>
                {{ formatRupiah(parseInt(data.pemasukan)) }}
              </div>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr class="bg-slate-200">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm font-medium text-gray-900">
                Total Pemasukan
              </div>
              <div class="text-sm text-gray-500">Bulan ini</div>
            </td>
            <td></td>
            <td
              class="px-6 py-4 whitespace-nowrap text-right font-semibold text-black"
            >
              <div>
                {{ formatRupiah(TotalPemasukanBulanIni) }}
              </div>
            </td>
            <td></td>
          </tr>

          <tr v-for="(data, index) in pengeluaranBulanIni" :key="index">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm font-medium text-gray-900">
                {{ data.nama }}
              </div>
              <div class="text-sm text-gray-500">Pengeluaran Bulan Ini</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right">
              <div>
                {{ formatRupiah(parseInt(data.pengeluaran)) }}
              </div>
            </td>
            <td></td>
            <td></td>
          </tr>

          <tr class="bg-slate-200">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm font-medium text-gray-900">
                Total Pengeluaran
              </div>
              <div class="text-sm text-gray-500">Bulan ini</div>
            </td>
            <td></td>
            <td
              class="px-6 py-4 whitespace-nowrap text-right text-black font-semibold"
            >
              <div>
                {{ formatRupiah(TotalPengeluaranBulanIni) }}
              </div>
            </td>
            <td></td>
          </tr>

          <tr class="bg-blue-300">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900 font-bold">Saldo AKhir</div>
              <div class="text-sm text-gray-500">Bulan ini</div>
            </td>
            <td></td>

            <td></td>
            <td
              class="px-6 py-4 whitespace-nowrap text-right text-black font-bold"
            >
              <div>
                {{ formatRupiah(SaldoBulanIni) }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <LoadingOverlay/>
    </div>
    <!-- Button to generate PDF -->
    <button
      @click="generatePDF"
      class="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
    >
      Download PDF
    </button>
    <!-- Button to generate PDF -->
    <button
      @click="exportAsImage"
      class="ml-4 mt-4 px-4 py-2 bg-blue-600 text-white rounded"
    >
      Download Image
    </button>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import { BASE_URL } from "../base.url.utils";
import html2pdf from 'html2pdf.js';
import html2canvas from 'html2canvas';
import { useLoadingStore } from "../stores/loading";
import LoadingOverlay from "../components/LoadingOverlay.vue";
const loadingStore = useLoadingStore();
const id_tenant = localStorage.getItem("id_tenant");


const captureArea = ref(null);

const printSection = ref(null)

const iuranBulanLalu = ref(null);
const PemasukanBulanLalu = ref(null);
const PengeluaranBulanLalu = ref(null);
const SaldoBulanLalu = ref(null);
let nomor = 1;

const iuranBulanIni = ref(null);
const pemasukanBulanIni = ref([]);
const TotalPemasukanBulanIni = ref(null);
const pengeluaranBulanIni = ref([]);
const TotalPengeluaranBulanIni = ref(null);
const SaldoBulanIni = ref(null);

const provinsi = ref("");
const kabupaten = ref("");
const kecamatan = ref("");
const desa = ref("");
const dusun = ref("");
const RT = ref("");
const RW = ref("");
const kode_wilayah = ref("");

const today = new Date();

const day = String(today.getDate());
const month = String(today.getMonth() + 1);
const year = today.getFullYear();

const formattedDate = `${day}-${month}-${year}`;

async function getDataLaporan() {
  loadingStore.show();
  try {
    const response = await axios.get(`${BASE_URL}bayar/laporan/rt/${id_tenant}`);
    iuranBulanLalu.value = parseInt(response.data.result?.IuranBulanLalu);
    PemasukanBulanLalu.value = parseInt(
      response.data.result?.PemasukanBulanLalu
    );
    PengeluaranBulanLalu.value = parseInt(
      response.data.result?.PengeluaranBulanLalu
    );
    SaldoBulanLalu.value =
      iuranBulanLalu.value +
      PemasukanBulanLalu.value -
      PengeluaranBulanLalu.value;
    iuranBulanIni.value = parseInt(response.data.result?.IuranBulanIni);
    pemasukanBulanIni.value = response.data.result?.PemasukanBulanIni;

    const totalPemasukanlain = pemasukanBulanIni.value.reduce((acc, item) => {
      return acc + parseInt(item.pemasukan || 0);
    }, 0);
    TotalPemasukanBulanIni.value = totalPemasukanlain + iuranBulanIni.value;

    pengeluaranBulanIni.value = response.data.result?.PengeluaranBulanIni;
    console.log("Laporan RT :", totalPemasukanlain);

    const totalPengeluaran = pengeluaranBulanIni.value.reduce((acc, item) => {
      return acc + parseInt(item.pengeluaran || 0);
    }, 0);
    TotalPengeluaranBulanIni.value = totalPengeluaran;

    SaldoBulanIni.value =
      SaldoBulanLalu.value +
      TotalPemasukanBulanIni.value -
      TotalPengeluaranBulanIni.value;
  } catch (error) {
    console.log(error);
  } finally {
    loadingStore.hide();
  }
}

function generatePDF() {
  const element = printSection.value
  const options = {
    margin: 0.5,
    filename: 'laporankeuangan.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 5 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'landscape' },
  }

  html2pdf().set(options).from(element).save()
}

async function exportAsImage() {
  const canvas = await html2canvas(printSection.value, {
    scale: 2,       // increase for better resolution
    useCORS: true,  // allow external images if any
  })

  // Convert to image and download
  const link = document.createElement('a')
  link.download = 'laporankeuangan.png'
  link.href = canvas.toDataURL('image/png')
  link.click()
}

async function getEntity() {
  const url = BASE_URL + "profile/cari/" + id_tenant;
  const response = await axios.get(url);
  const hasilEntity = response.data.result;
  provinsi.value = hasilEntity.provinsi;
  kabupaten.value = hasilEntity.kabupaten;
  kecamatan.value = hasilEntity.kecamatan;
  desa.value = hasilEntity.desa;
  dusun.value = hasilEntity.dusun;
  RW.value = hasilEntity.rw;
  RT.value = hasilEntity.rt;
  kode_wilayah.value = hasilEntity.kode_wilayah;
}

function formatRupiah(number) {
  const amount = number;

  // Format as Indonesian Rupiah (IDR)
  const formattedIDR = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0, // Rupiah usually doesn't show decimals
    maximumFractionDigits: 0,
  }).format(amount);

  return formattedIDR;
}

// Panggil data dari dashboard.js
onMounted(async () => {
  getDataLaporan();
  getEntity();
});
</script>
