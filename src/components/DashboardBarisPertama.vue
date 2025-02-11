<template>
  <div>
    <div
      class="md:w-[80vw] grid p-5 md:grid-cols-2 md:gap-4 bg-white border shadow-sm rounded-xl"
    >
      <!-- start Card1  -->
      <div id="card1" class="md:w-[35vw]">
        <div class="p-4 md:p-5">
          <h3 class="text-2xl text-white p-2 rounded-t-md font-bold bg-gradient-to-r from-blue-600 to-blue-50">
            Profile Wilayah
          </h3>
          <p class="mt-2 text-gray-500 font-semibold font-Poppins">
            Provinsi : <span class="text-gray-800">{{ provinsi }}</span>
          </p>
          <p class="mt-2 text-gray-500 font-semibold font-Poppins bg-gradient-to-r from-gray-300 to-gray-50">
            Kabupaten/Kota : <span class="text-gray-800">{{ kabupaten }}</span>
          </p>
          <p class="mt-2 text-gray-500 font-semibold font-Poppins">
            Kecamatan :<span class="text-purple-600">{{ kecamatan }}</span> 
          </p>
          <p class="mt-2 text-gray-500 font-semibold font-Poppins bg-gradient-to-r from-gray-300 to-gray-50">
            Desa/Kelurahan : <span class="text-purple-600">{{ desa }}</span>
          </p>
          <p class="mt-2 text-gray-500 font-bold font-Poppins">
            RT/RW : {{ rt }} / {{ rw }}
          </p>
          <p class="mt-2 text-gray-500 font-semibold font-Poppins bg-gradient-to-r from-gray-300 to-gray-50">
            Kode Wilayah : <span class="font-bold text-green-500">{{ kode_wilayah }}-{{rw}}-{{rt}}</span>
          </p>
          <a
            class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
            href="#"
          >
            Card link
            <svg
              class="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </a>
        </div>
        <div
          class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700"
        >
          <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
            Profile Wilayah yang diisi berdasarkan data wilayah Kementerian Dalam Negeri
          </p>
        </div>
      </div>

      <!-- start Card2  -->
      <div id="card2" class="">
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            Card title
          </h3>
          <p class="mt-2 text-gray-500 dark:text-neutral-400">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a
            class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
            href="#"
          >
            Card link
            <svg
              class="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </a>
        </div>
        <div
          class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700"
        >
          <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
            Last updated 5 mins ago
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { error } from "jquery";
import { BASE_URL } from "../base.url.utils";
import axios from "axios";

export default {
  data() {
    return {
      provinsi: null,
      kabupaten: null,
      kecamatan: null,
      desa: null,
      dusun: null,
      rt: null,
      rw: null,
      kode_wilayah: null,
      hasilEntity: null,
    };
  },
  methods: {
    async getEntity() {
      const url = BASE_URL + "profile/cek";
      await axios
        .get(url)
        .then((response) => {
          this.hasilEntity = response.data.result;
          this.provinsi = this.hasilEntity.provinsi;
          this.kabupaten = this.hasilEntity.kabupaten;
          this.kecamatan = this.hasilEntity.kecamatan;
          this.desa = this.hasilEntity.desa;
          this.dusun = this.hasilEntity.dusun;
          this.rw = this.hasilEntity.rw;
          this.rt = this.hasilEntity.rt;
          this.kode_wilayah = this.hasilEntity.kode_wilayah;
          console.log(this.hasilEntity);
        })
        .catch((error) => {
            console.log(error);
        })
    },
  },
  created() {
    this.getEntity();
  }
};
</script>

<style lang="scss" scoped></style>
