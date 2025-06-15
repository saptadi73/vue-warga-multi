<template>
  <div>
    <div
      class="grid w-[80vw] p-5 md:grid-cols-2 md:gap-4 bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
    >
      <!-- start Card2  -->
      <div id="card2" class="">
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            Laporan Warga yang Telah Iuran
          </h3>

          <div class="mt-3">
            <div class="flex rounded-lg shadow-sm">
              <span
                class="inline-flex px-4 items-center min-w-fit rounded-s-md boder border-e-0 border-gray-600 text-sm text-gray-500 bg-slate-200"
                >Tahun</span
              >
              <input
                ref="tahun"
                type="number"
                min="1900"
                max="2500"
                class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              />
            </div>
          </div>
          <div class="mt-3">
            <div class="flex rounded-lg shadow-sm">
              <span
                class="inline-flex px-4 items-center min-w-fit rounded-s-md boder border-e-0 border-gray-600 text-sm text-gray-500 bg-slate-200"
                >Bulan</span
              >
              <input
                ref="bulan"
                type="integer"
                min="1"
                max="12"
                class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              />
            </div>
          </div>

          <div class="mt-1">
            <div class="relative">
              <select
                id="jenis_iuran"
                ref="jenis_iuran"
                class="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
              >
                <option selected="">Pilih Jenis Iuran</option>
                <option
                  v-if="hasilJenisIuran"
                  v-for="resultku in hasilJenisIuran"
                  :key="resultku.id"
                  :value="resultku.id"
                >
                  {{ resultku.nama }}
                </option>
              </select>
              <label
                for="type"
                class="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                >Jenis Iuran</label
              >
            </div>
          </div>

          <button
            :onclick="getBelumBayarIuran"
            class="mt-5 bg-purple-500 text-base font-semibold rounded-lg text-white decoration-2 hover:text-purple-200 hover:underline focus:underline focus:outline-none p-2 focus:text-purple-300 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            Lihat Daftar
          </button>
        </div>
        <div
          class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700"
        >
          <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
            Laporan Daftar Keluarga yang Sudah Menyetorkan Iuran Bulan Tertentu
          </p>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div
      class="flex p-5 flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
    >
      <div class="p-4 md:p-5">
        <h3 class="text-lg font-bold text-gray-800 dark:text-white">
          Daftar Anggota
        </h3>
        <div>
          <div class="relative overflow-x-auto">
            <table
              class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
              <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
              >
                <tr>
                  <th scope="col" class="px-6 py-3">No</th>
                  <th scope="col" class="px-6 py-3">Nama</th>
                  <th scope="col" class="px-6 py-3">Blok</th>
                  <th scope="col" class="px-6 py-3">No.Rumah</th>
                   <th scope="col" class="px-6 py-3">Tanggal</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(resultku, index) in hasilListBelum"
                  :key="resultku.id"
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                >
                  <td class="px-6 py-4">{{ index + 1 }}</td>
                  <td
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {{ resultku.kk.warga[0].nama }}
                  </td>
                  <td class="px-6 py-4">{{ resultku.kk.blok.blok }}</td>
                  <td class="px-6 py-4">{{ resultku.kk.no_rumah }}</td>
                  <td class="px-6 py-4">{{ formatTanggal(resultku.tanggal) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700"
        ></div>
      </div>
      <div
        class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700"
      ></div>
    </div>
    <LoadingOverlay/>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { BASE_URL } from "../base.url.utils";
import api from "../user/axios";
import { useLoadingStore } from '../stores/loading'
import LoadingOverlay from "../components/LoadingOverlay.vue";

export default {
  components: {LoadingOverlay},
  data() {
    return {
      formValues: {},
      hasilJenisIuran: {},
      hasilListBelum: {},
    };
  },

  setup() {
    const loadingStore = useLoadingStore()
    return {loadingStore};;
  },

  methods: {
    formatTanggal(dateString) {
      const tanggal = new Date(dateString);
      const localeDate = tanggal.toLocaleDateString("en-GB");

      return localeDate;
    },

    // Method 1: Using array (most common)
    getMonthName(monthNumber) {
      const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      return months[monthNumber - 1]; // monthNumber is 1-based, array is 0-based
    },

    // Method 2: Using Indonesian month names
    getMonthNameIndonesian(monthNumber) {
      const months = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
      ];
      return months[monthNumber - 1];
    },

    // Method 3: Using Date object and toLocaleString
    getMonthNameFromDate(monthNumber) {
      const date = new Date();
      date.setMonth(monthNumber - 1); // setMonth is 0-based
      return date.toLocaleString('en-US', { month: 'long' });
    },

    // Method 4: Using Intl.DateTimeFormat
    getMonthNameIntl(monthNumber) {
      const date = new Date();
      date.setMonth(monthNumber - 1);
      return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
    },
    
    async getJenisIuran() {
      const url = BASE_URL + "bayar/list/iuran";
      axios
        .get(url)
        .then((response) => {
          this.hasilJenisIuran = response.data.result;
          // console.log("Hasil Jenis Iuran:", this.hasilJenisIuran);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },

    async getBelumBayarIuran() {
      const url = BASE_URL + "bayar/list/sudah";
      this.formValues.tahun = parseInt(this.$refs.tahun.value);
      this.formValues.bulan = parseInt(this.$refs.bulan.value);
      this.formValues.jenis_iuran = parseInt(this.$refs.jenis_iuran.value);

      // // console.log("Form Data",this.formValuesRumah);
      this.loadingStore.show();
      await api
        .post(url, this.formValues, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
        //   this.hasilListBelum = response.data.result;

          // console.log(response.data.result);
          this.hasilListBelum = response.data.result;
        })
        .catch((error) => {
          // console.log(error);
        }).finally(()=>{
          this.loadingStore.hide();
        });
    },
  },
  created() {
    this.getJenisIuran();
  },
};
</script>

<style lang="css">
.dt-layout-row:has(.dt-search),
.dt-layout-row:has(.dt-length),
.dt-layout-row:has(.dt-paging) {
  display: none !important;
}
</style>
