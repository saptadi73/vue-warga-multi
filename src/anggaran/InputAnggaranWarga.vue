<template>
  <div>
    <div
      class="grid w-[80vw] p-5 md:grid-cols-2 md:gap-4 bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
    >
      <!-- start Card2  -->
      <div id="card2" class="">
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            Pengisian Anggaran
          </h3>
          <div class="mt-10">
            <div class="relative">
              <select
                id="type"
                :onchange="listJenisAnggaran"
                class="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
              >
                <option selected="">Pilih Jenis Anggaran</option>
                <option value="1">Pemasukan</option>
                <option value="2">Pengeluaran</option>
              </select>
              <label
                for="jenis_anggaran"
                class="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                >Jenis Anggaran</label
              >
            </div>
          </div>
          <div class="mt-10">
            <div class="relative">
              <select
                id="jenis_anggaran"
                class="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
              >
                <option selected="">Pilih Jenis Anggaran</option>
                <option
                  v-if="hasilJenisAnggaran"
                  v-for="resultku in hasilJenisAnggaran"
                  :key="resultku.id"
                  :value="resultku.id"
                >
                  {{ resultku.nama }}
                </option>
              </select>
              <label
                for="jenis_anggaran"
                class="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                >Type Anggaran</label
              >
            </div>
          </div>
          <div class="mt-10">
            <div class="relative">
              <select
                id="warga"
                class="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
              >
                <option selected="">Pilih Warga</option>
                <option
                  v-if="hasilWarga"
                  v-for="resultku in hasilWarga"
                  :key="resultku.id"
                  :value="resultku.id"
                >
                  {{ resultku.nama }} [{{ resultku.kk.blok.blok }}/{{
                    resultku.kk.no_rumah
                  }}]
                </option>
              </select>
              <label
                for="jenis_anggaran"
                class="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                >Nama Penaggung Jawab</label
              >
            </div>
          </div>
          <div class="mt-3">
            <div class="flex rounded-lg shadow-sm">
              <span
                class="inline-flex px-4 items-center min-w-fit rounded-s-md boder border-e-0 border-gray-600 text-sm text-gray-500 bg-slate-200"
                >tanggal</span
              >
              <input
                id="tanggal"
                type="date"
                class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              />
            </div>
          </div>
          <div class="mt-3">
            <div class="flex rounded-lg shadow-sm">
              <span
                class="inline-flex px-4 items-center min-w-fit rounded-s-md boder border-e-0 border-gray-600 text-sm text-gray-500 bg-slate-200"
                >Nominal</span
              >
              <input
                id="nominal"
                type="number"
                class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              />
            </div>
          </div>
          <div class="mt-3">
            <div class="flex rounded-lg shadow-sm">
              <span
                class="inline-flex px-4 items-center min-w-fit rounded-s-md boder border-e-0 border-gray-600 text-sm text-gray-500 bg-slate-200"
                >Keterangan</span
              >
              <input
                id="keterangan"
                type="text"
                class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              />
            </div>
          </div>
          <button
            class="mt-5 bg-purple-500 text-base font-semibold rounded-lg text-white decoration-2 hover:text-purple-200 hover:underline focus:underline focus:outline-none p-2 focus:text-purple-300 disabled:opacity-50 disabled:pointer-events-none"
            @click="addSetorAnggaran"
          >
            Simpan
          </button>
        </div>
        <div
          class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700"
        >
          <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
            Hasil Penambahan bisa dilihat dalam table di bawah
          </p>
        </div>
      </div>
    </div>

    <div>
      <div
        class="flex p-5 flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
      >
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            Table Laporan Pemasukan/Pengeluaran
          </h3>
          <div class="mt-3">
            <div class="relative">
              <select
                id="type_cari"
                :onchange="listJenisAnggaranCari"
                class="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
              >
                <option selected="">Pilih Jenis Anggaran</option>
                <option value="1">Pemasukan</option>
                <option value="2">Pengeluaran</option>
              </select>
              <label
                for="jenis_anggaran_cari"
                class="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                >Jenis Anggaran</label
              >
            </div>
          </div>
          <div class="mt-3">
            <div class="relative">
              <select
                id="jenis_anggaran_cari"
                class="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
              >
                <option selected="">Pilih Jenis Anggaran</option>
                <option
                  v-if="hasilJenisAnggaranCari"
                  v-for="resultku in hasilJenisAnggaranCari"
                  :key="resultku.id"
                  :value="resultku.id"
                >
                  {{ resultku.nama }}
                </option>
                <option value="9999">Semua</option>
              </select>
              <label
                for="jenis_anggaran_cari"
                class="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                >Type Anggaran</label
              >
            </div>
          </div>
          <div class="mt-3">
            <div class="flex rounded-lg shadow-sm">
              <span
                class="inline-flex px-4 items-center min-w-fit rounded-s-md boder border-e-0 border-gray-600 text-sm text-gray-500 bg-slate-200"
                >tanggal awal</span
              >
              <input
                id="tanggal_awal"
                type="date"
                class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              />
            </div>
          </div>
          <div class="mt-1">
            <div class="flex rounded-lg shadow-sm">
              <span
                class="inline-flex px-4 items-center min-w-fit rounded-s-md boder border-e-0 border-gray-600 text-sm text-gray-500 bg-slate-200"
                >tanggal akhir</span
              >
              <input
                id="tanggal_akhir"
                type="date"
                class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              />
            </div>
          </div>
          <button
            class="mt-3 p-2 bg-slate-600 text-white rounded-md w-36"
            @click="listSetoranAnggaran"
          >
            Cari
          </button>
          <div class="mt-5">
            <div>
              <div id="hs-datatable-filter" class="flex flex-col">
                <div class="flex items-center space-x-2 mb-4">
                  <div class="flex-0">
                    <div class="relative max-w-xs">
                      <label for="hs-table-filter-search" class="sr-only"
                        >Search</label
                      >
                      <input
                        type="search"
                        v-model="searchQuery"
                        @input="handleSearch"
                        id="hs-table-filter-search"
                        class="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                        placeholder="Search for items"
                      />
                      <div
                        class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3"
                      >
                        <svg
                          class="size-4 text-gray-400 dark:text-neutral-500"
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
                          <circle cx="11" cy="11" r="8"></circle>
                          <path d="m21 21-4.3-4.3"></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div class="flex-1 flex items-center justify-end space-x-2">
                    <!-- Select -->
                    <select class="hidden">
                      <option value="10" selected="">10</option>
                      <option value="15">15</option>
                      <option value="20">20</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                    </select>
                    <!-- End Select -->
                  </div>
                </div>

                <div class="overflow-x-auto min-h-[521px]">
                  <div class="min-w-full inline-block align-middle">
                    <div class="overflow-hidden">
                      <table class="">
                        <thead
                          class="border-y border-gray-200 dark:border-neutral-700"
                        >
                          <tr>
                            <th class="py-1 ps-3">
                              <div class="flex items-center h-5">
                                <input
                                  id="hs-datatable-select-all-rows"
                                  type="checkbox"
                                  class="border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500"
                                />
                                <label class="sr-only">Checkbox</label>
                              </div>
                            </th>
                            <th class="py-3 px-4 text-xs font-normal">Nama</th>
                            <th class="py-3 px-4 text-xs font-normal">Blok</th>
                            <th class="py-3 px-4 text-xs font-normal">No.</th>
                            <th class="py-3 px-4 text-xs font-normal">Jenis</th>
                            <th class="py-3 px-4 text-xs font-normal">
                              Nominal
                            </th>
                            <th class="py-3 px-4 text-xs font-normal">
                              Tanggal
                            </th>
                            <th class="py-3 px-4 text-xs font-normal">
                              Delete
                            </th>
                            <th class="py-3 px-4 text-xs font-normal">
                              Bukti
                            </th>
                          </tr>
                        </thead>
                        <tbody
                          class="divide-y divide-gray-200 dark:divide-neutral-700"
                        >
                          <tr v-for="user in filteredPekerjaan" :key="user.id">
                            <!-- Checkbox -->
                            <td class="py-4 ps-4">
                              <div class="flex items-center h-5">
                                <input
                                  :id="'hs-table-filter-checkbox-' + user.id"
                                  type="checkbox"
                                  class="hs-datatable-select-row border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500"
                                />
                                <label
                                  :for="'hs-table-filter-checkbox-' + user.id"
                                  class="sr-only"
                                >
                                  Checkbox
                                </label>
                              </div>
                            </td>

                            <!-- Data Warga -->
                            <td
                              class="p-4 text-xs font-medium text-gray-800 dark:text-neutral-200"
                            >
                              {{ user.warga.nama }}
                            </td>
                            <td
                              class="p-4 text-xs font-medium text-gray-800 dark:text-neutral-200"
                            >
                              {{ user.warga.kk.blok.blok }}
                            </td>
                            <td
                              class="p-4 text-xs font-medium text-gray-800 dark:text-neutral-200"
                            >
                              {{ user.warga.kk.no_rumah }}
                            </td>
                            <td
                              class="p-4 text-xs font-medium text-gray-800 dark:text-neutral-200"
                            >
                              {{ user.jenis_anggaran.nama }}
                            </td>
                            <td
                              class="p-4 text-xs font-medium text-gray-800 dark:text-neutral-200"
                            >
                              {{ formatRupiah(user.nilai) }}
                            </td>
                            <td
                              class="p-4 text-xs font-medium text-gray-800 dark:text-neutral-200"
                            >
                              {{ formatTanggal(user.tanggal) }}
                            </td>

                            <td class="text-blue-600 font-semibold">
                              <button
                                @click="
                                  bukaModal(
                                    `${user.id}`,
                                    `${user.warga.nama}`,
                                    `${formatTanggal(user.tanggal)}`
                                  )
                                "
                              >
                                Delete
                              </button>
                            </td>
                            <td v-if="user.bukti[0]" class="text-blue-600 font-semibold">
                              <button @click="bukaModalGambar(`${user.id}`)">
                                View
                              </button>
                            </td>
                            <td v-else class="text-blue-600 font-semibold">
                              <button @click="uploadBukti(`${user.id}`)">
                                Upload {{ user.bukti[0] }}
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div class="flex items-center mt-4">
                  <div
                    class="text-xs text-gray-500 ms-auto dark:text-neutral-400"
                  >
                    Terhitung <span>{{ filteredPekerjaan.length }}</span> Setor
                    Iuran
                  </div>
                </div>
              </div>
            </div>
          </div>
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
    <ToastCard
      v-if="showToast"
      :message_toast="toastMessage"
      v-on:dismissToast="tutupToast"
    />
    <ModalCard
      v-if="showModal"
      :title="ModalTitle"
      :message_modal="ModalMessage"
      
      v-on:okeButton="delSetoranAnggaran"
      v-on:cancelButton="tutupModal"
      v-on:closeButton="tutupModal"
    />
    <ModalViewGambar
      v-if="showModalGambar"
      :title="ModalTitleGambar"
      :imageSource="viewGambarku"
      v-on:okeButton="delGambar"
      v-on:cancelButton="tutupModalGambar"
      v-on:closeButton="tutupModalGambar"
    />
  </div>
</template>

<script setup>
import ToastCard from "../components/ToastCard.vue";
import axios from "axios";
import { onMounted, computed } from "vue";
import { ref } from "vue";
import { BASE_URL } from "../base.url.utils";
import ModalCard from "../components/ModalCard.vue";
import router from "../router";
import { useRoute } from "vue-router";
import ModalViewGambar from "../components/ModalViewGambar.vue";

const searchQuery = ref("");
const route = useRoute();

const hasilWarga = ref([]);
const hasilJenisAnggaran = ref([]);
const hasilJenisAnggaranCari = ref([]);
const hasilTambahAnggaran = ref([]);
const hasilListSetorAnggaran = ref([]);
const hasilHapusSetorAnggaran = ref([]);

const formValues = ref({});
const showToast = ref(false);
const toastMessage = ref("");
const showModal = ref(false);
const ModalTitle = ref("");
const ModalMessage = ref("");
const showModalGambar = ref(false);
const ModalTitleGambar = ref("");
const viewGambarku = ref("");
const Idku = ref("");

function tutupModal() {
  showModal.value = false;
  router.push("anggaran/input/anggaran");
}
function tutupModalGambar() {}
function delGambar() {}
function bukaModalGambar() {}

function bukaModal(id, nama, tanggal) {
  showModal.value = true;
  ModalTitle.value = "Delete Data Setoran";
  ModalMessage.value =
    "Apakah anda yakin akan menghapus data setoran pemasukan/pengeluaran dengan penanggung jawab  " +
    nama +
    " pada tanggal " +
    tanggal +
    "?";
  formValues.value = { id: parseInt(id) };
}

function uploadBukti(id) {
  const url = "/anggaran/upload/bukti/" + id;
  router.push(url);
}
function tutupToast() {
  showToast.value = false;
  router.push("/anggaran/input/anggaran");
}

async function listJenisAnggaran() {
  try {
    const type = document.getElementById("type").value;
    const url = `${BASE_URL}bayar/list/jenis/anggaran`;
    formValues.value.id_type_anggaran = parseInt(type);
    const daftarJenisAnggaran = await axios.post(url, formValues.value, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    hasilJenisAnggaran.value = daftarJenisAnggaran.data.result;
    console.log(hasilJenisAnggaran.value);
  } catch (error) {
    console.log(error);
  }
}

async function listJenisAnggaranCari() {
  try {
    const type = document.getElementById("type_cari").value;
    const url = `${BASE_URL}bayar/list/jenis/anggaran`;
    formValues.value.id_type_anggaran = parseInt(type);
    const daftarJenisAnggaran = await axios.post(url, formValues.value, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    hasilJenisAnggaranCari.value = daftarJenisAnggaran.data.result;
    console.log(hasilJenisAnggaranCari.value);
  } catch (error) {
    console.log(error);
  }
}

async function sekarangTable() {
  const currentDate = new Date();
  const dateMinus3Months = new Date();
  dateMinus3Months.setMonth(currentDate.getMonth() - 3);

  const year = dateMinus3Months.getFullYear();
  const month = String(dateMinus3Months.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const day = String(dateMinus3Months.getDate()).padStart(2, "0");

  const formattedDate3Month = `${year}-${month}-${day}`;

  const dateNow = new Date();

  const yearNow = dateNow.getFullYear();
const monthNow = String(dateNow.getMonth() + 1).padStart(2, '0'); // Months are 0-based
const dayNow = String(dateNow.getDate()).padStart(2, '0');

const formattedDateNow = `${yearNow}-${monthNow}-${dayNow}`;

  try {
    const url = `${BASE_URL}bayar/list/anggaran`;
    const id_type_anggaran = "1";
    const id_jenis_anggaran = "9999";
    const tanggal_awal = formattedDate3Month;
    const tanggal_akhir = formattedDateNow;

    formValues.value = {
      id_type_anggaran: parseInt(id_type_anggaran),
      id_jenis_anggaran: parseInt(id_jenis_anggaran),
      tanggal_akhir: tanggal_akhir,
      tanggal_awal: tanggal_awal,
    };
    console.log("isi FormValues :", formValues.value);
    const listSetorAnggaran = await axios.post(url, formValues.value, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    hasilListSetorAnggaran.value = listSetorAnggaran.data.result;
    console.log(
      " Hasil Laporan Setoran Anggaran Sekarang : ",
      hasilListSetorAnggaran.value
    );
  } catch (error) {
    console.log(error);
  }
}

async function listWarga() {
  try {
    const url = `${BASE_URL}warga/list/all`;
    const listWarga = await axios.get(url);
    hasilWarga.value = listWarga.data.result;
    console.log("Hasil Warga : ", hasilWarga.value);
  } catch (error) {
    console.log(error);
  }
}

async function listSetoranAnggaran() {
  try {
    const url = `${BASE_URL}bayar/list/anggaran`;
    const id_type_anggaran = document.getElementById("type_cari").value;
    const id_jenis_anggaran = document.getElementById(
      "jenis_anggaran_cari"
    ).value;
    const tanggal_awal = document.getElementById("tanggal_awal").value;
    const tanggal_akhir = document.getElementById("tanggal_akhir").value;

    formValues.value = {
      id_type_anggaran: parseInt(id_type_anggaran),
      id_jenis_anggaran: parseInt(id_jenis_anggaran),
      tanggal_akhir: tanggal_akhir,
      tanggal_awal: tanggal_awal,
    };
    console.log("hasil formvalue yang benar :", formValues.value);
    const listSetorAnggaran = await axios.post(url, formValues.value, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    hasilListSetorAnggaran.value = listSetorAnggaran.data.result;
    console.log(
      " Hasil Laporan Setoran Anggaran : ",
      hasilListSetorAnggaran.value
    );
  } catch (error) {
    console.log(error);
  }
}

async function addSetorAnggaran() {
  try {
    const id_warga = document.getElementById("warga").value;
    const id_type_anggaran = document.getElementById("type").value;
    const id_jenis_anggaran = document.getElementById("jenis_anggaran").value;
    const keterangan = document.getElementById("keterangan").value;
    const nilai = document.getElementById("nominal").value;
    const tanggal = document.getElementById("tanggal").value;
    const url = `${BASE_URL}bayar/add/anggaran`;
    formValues.value = {
      id_warga: parseInt(id_warga),
      id_type_anggaran: parseInt(id_type_anggaran),
      id_jenis_anggaran: parseInt(id_jenis_anggaran),
      keterangan: keterangan,
      nilai: parseInt(nilai),
      tanggal: tanggal,
    };
    const addAnggaran = await axios.post(url, formValues.value, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    hasilTambahAnggaran.value = addAnggaran.data.result;
    console.log("hasil Tambah Anggaran :", hasilJenisAnggaran.value);
    showToast.value = true;
    toastMessage.value = addAnggaran.data.message;
  } catch (error) {
    console.log(error);
  }
}

async function delSetoranAnggaran() {
  const url = `${BASE_URL}bayar/del/setor/anggaran`;
  try {
    const delAnggaran = await axios.post(url, formValues.value, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    hasilHapusSetorAnggaran.value = delAnggaran.data.result;
    showModal.value = false;
    showToast.value = true;
    toastMessage.value = delAnggaran.data.message;
    console.log(hasilHapusSetorAnggaran.value);
  } catch (error) {
    console.log(error);
  }
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

function formatTanggal(dateString) {
  const tanggal = new Date(dateString);
  const localeDate = tanggal.toLocaleDateString("en-GB");

  return localeDate;
}

const filteredPekerjaan = computed(() => {
  if (!searchQuery.value) {
    return hasilListSetorAnggaran.value;
  }
  return hasilListSetorAnggaran.value.filter(
    (pekerjaan) =>
      pekerjaan.warga.nama
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase()) ||
      formatTanggal(pekerjaan.tanggal)
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase()) ||
      formatRupiah(pekerjaan.nilai)
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase())
  );
});

function handleSearch() {
  // This function is called on input event to filter users.
  // It's already handled by the computed property `filteredUsers`.
}

onMounted(() => {
  listWarga();
  sekarangTable();
});
</script>

<style lang="css">
.dt-layout-row:has(.dt-search),
.dt-layout-row:has(.dt-length),
.dt-layout-row:has(.dt-paging) {
  display: none !important;
}
</style>
