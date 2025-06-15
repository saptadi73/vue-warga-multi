<template>
  <div>
    <div class="max-w-7xl mx-auto">
      <h1 class="text-3xl font-bold mb-6">Kependudukan</h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Card: Target Harian -->
        <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-3">
              <div class="bg-green-100 dark:bg-green-600 p-3 rounded-full">
                <span class="material-icons text-[#e52bf1]">groups</span>
              </div>
              <div>
                <h2 class="text-sm uppercase text-gray-500 dark:text-gray-400">
                  Jumlah Warga
                </h2>
                <p class="text-2xl font-bold">{{jumlahTotal}}</p>
              </div>
            </div>
            
          </div>
          <!-- Sparkline -->
          <svg viewBox="0 0 100 30" class="w-full h-8 text-green-400">
            <polyline
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              points="0,20 10,12 20,14 30,10 40,12 50,6 60,8 70,6 80,4 90,6 100,2"
            />
          </svg>
        </div>

        <!-- Card: Pengguna -->
        <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-3">
              <div class="bg-blue-100 dark:bg-blue-600 p-3 rounded-full">
                <span class="material-icons text-[#e52bf1]">male</span>
              </div>
              <div>
                <h2 class="text-sm uppercase text-gray-500 dark:text-gray-400">
                  Laki-laki
                </h2>
                <p class="text-2xl font-bold">{{jumlahLakiLaki}}</p>
              </div>
            </div>
            
          </div>
          <svg viewBox="0 0 100 30" class="w-full h-8 text-blue-400">
            <polyline
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              points="0,28 10,26 20,22 30,20 40,18 50,12 60,16 70,12 80,8 90,6 100,4"
            />
          </svg>
        </div>

        <!-- Card: Transaksi -->
        <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-3">
              <div class="bg-yellow-100 dark:bg-yellow-600 p-3 rounded-full">
                <span class="material-icons text-[#e52bf1]">female</span>
              </div>
              <div>
                <h2 class="text-sm uppercase text-gray-500 dark:text-gray-400">
                  Perempuan
                </h2>
                <p class="text-2xl font-bold">{{jumlahPerempuan}}</p>
              </div>
            </div>
            
          </div>
          <svg viewBox="0 0 100 30" class="w-full h-8 text-yellow-400">
            <polyline
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              points="0,25 10,20 20,18 30,15 40,18 50,14 60,16 70,12 80,14 90,10 100,12"
            />
          </svg>
        </div>
        <!-- Card: Transaksi -->
        <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-3">
              <div class="bg-yellow-100 dark:bg-yellow-600 p-3 rounded-full">
                <span class="material-icons text-[#e52bf1]">house</span>
              </div>
              <div>
                <h2 class="text-sm uppercase text-gray-500 dark:text-gray-400">
                  Keluarga
                </h2>
                <p class="text-2xl font-bold">{{jumlahKk}}</p>
              </div>
            </div>
            
          </div>
          <svg viewBox="0 0 100 30" class="w-full h-8 text-yellow-400">
            <polyline
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              points="0,25 10,20 20,18 30,15 40,18 50,14 60,16 70,12 80,14 90,10 100,12"
            />
          </svg>
        </div>
      </div>
    </div>
    <LoadingOverlay/>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, computed } from "vue";
import { ref } from "vue";
import { BASE_URL } from "../base.url.utils";
import { useLoadingStore } from "../stores/loading";
import LoadingOverlay from "../components/LoadingOverlay.vue";

const loadingStore = useLoadingStore();

const jumlahLakiLaki = ref(null);
const jumlahPerempuan = ref(null);
const jumlahTotal = ref(null);
const jumlahKk = ref(null);

onMounted(() => {
    getJumlahLakiLaki();
    getJumlahAll();
    getJumlahWanita();
    getJumlahKk();
});

async function getJumlahLakiLaki() {
  loadingStore.show();
    try {
        const jmlLK = await axios.get(`${BASE_URL}warga/jumlah/warga/lk`);
        jumlahLakiLaki.value = jmlLK.data?.result?._count?.id;
        // console.log("Data Jumlah Laki-laki :",jumlahLakiLaki.value);
    } catch (error) {
        // console.log("Error Jumlah Laki-laki :", error);
    }finally{
      loadingStore.hide();
    }
}

async function getJumlahAll() {
  loadingStore.show();  
  try {
        const jmlLK = await axios.get(`${BASE_URL}warga/jumlah/warga/all`);
        jumlahTotal.value = jmlLK.data?.result?._count?.id;
        // console.log("Data Jumlah Warga :",jumlahTotal.value);
    } catch (error) {
        // console.log("Error Jumlah Warga :", error);
    }finally{
      loadingStore.hide();
    }
}

async function getJumlahWanita() {
  loadingStore.show();
    try {
        const jmlLK = await axios.get(`${BASE_URL}warga/jumlah/warga/pr`);
        jumlahPerempuan.value = jmlLK.data?.result?._count?.id;
        // console.log("Data Jumlah Perempuan :",jumlahPerempuan.value);
    } catch (error) {
        // console.log("Error Jumlah Perempuan :", error);
    }finally{
      loadingStore.hide();
    }
}

async function getJumlahKk() {
  loadingStore.show();
    try {
        const jmlLK = await axios.get(`${BASE_URL}warga/jumlah/kk/all`);
        jumlahKk.value = jmlLK.data?.result?._count?.id;
        // console.log("Data Jumlah KK :",jumlahKk.value);
    } catch (error) {
        // console.log("Error Jumlah KK :", error);
    }finally{
      loadingStore.hide();
    }
}
</script>

<style lang="scss" scoped></style>
