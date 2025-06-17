<template>
  <div>
    <div
      class="grid w-[80vw] p-5 md:grid-cols-2 md:gap-4 bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
    >
      <!-- start Card  -->
      <div id="card1" class="">
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            Pengisian Setor Bayar Iuran Warga dari Keluarga {{ nama_kk }}
          </h3>
          <div>
            <div>
              <div class="mt-1">
                <div class="relative">
                  <select
                    v-model="selectedIDKK"
                    @change="getIDKK"
                    id="idKK"
                    ref="idKKRef"
                    class="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                  >
                    <option selected="">Pilih Kepala Keluarga</option>
                    <option
                      v-if="hasilListKK"
                      v-for="resultku in hasilListKK"
                      :key="resultku.id"
                      :value="resultku.id"
                    >
                      {{ resultku.warga[0].nama }} [ {{ resultku.blok.blok }}/{{
                        resultku.no_rumah
                      }}]
                    </option>
                  </select>
                  <label
                    for="idKK"
                    class="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                    >Kepala Keluarga</label
                  >
                </div>
              </div>

              <div class="mt-1">
                <div class="relative">
                  <select
                    v-model="selectedIuran"
                    @change="getNominal"
                    id="iuran"
                    ref="iuranRef"
                    class="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                  >
                    <option selected="">Pilih Jenis Iuran</option>
                    <option
                      v-if="hasilIuran"
                      v-for="resultku in hasilIuran"
                      :key="resultku.id"
                      :value="resultku.id"
                    >
                      {{ resultku.nama }}
                    </option>
                  </select>
                  <label
                    for="iuran"
                    class="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                    >Jenis Iuran</label
                  >
                </div>
              </div>
              <div class="sm:flex rounded-lg shadow-sm">
                <span
                  class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400"
                  >Jumlah Nominal</span
                >
                <input
                  id="nilai"
                  type="number"
                  :value="nominal || 0"
                  class="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                />
              </div>
              <div class="sm:flex rounded-lg shadow-sm">
                <span
                  class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400"
                  >Tanggal</span
                >
                <input
                  id="tanggal"
                  type="date"
                  class="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                />
              </div>
              <div class="sm:flex rounded-lg shadow-sm">
                <span
                  class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400"
                  >Keterangan</span
                >
                <input
                  id="keterangan"
                  type="text"
                  class="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                />
              </div>
            </div>
          </div>
          <button
            class="mt-5 bg-purple-500 text-base font-semibold rounded-lg text-white decoration-2 hover:text-purple-200 hover:underline focus:underline focus:outline-none p-2 focus:text-purple-300 disabled:opacity-50 disabled:pointer-events-none"
            @click="addPekerjaan"
          >
            Simpan
          </button>
        </div>
        <div
          class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700"
        >
          <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
            Jika ada kesalahan dalam pengisian, untuk mempermudah tidak perlu
            melakukan update, tetapi dengan melakukan penghapusan dan diganti
            pengisian baru.
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
            Laporan Iuran yang telah dibayarkan
          </h3>
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
                          <th class="py-3 px-4 text-xs font-normal">Nominal</th>
                          <th class="py-3 px-4 text-xs font-normal">Tanggal</th>
                          <th class="py-3 px-4 text-xs font-normal">Delete</th>
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
                            {{ user.kk.warga[0].nama }}
                          </td>
                          <td
                            class="p-4 text-xs font-medium text-gray-800 dark:text-neutral-200"
                          >
                            {{ user.kk.blok.blok }}
                          </td>
                          <td
                            class="p-4 text-xs font-medium text-gray-800 dark:text-neutral-200"
                          >
                            {{ user.kk.no_rumah }}
                          </td>
                          <td
                            class="p-4 text-xs font-medium text-gray-800 dark:text-neutral-200"
                          >
                            {{ user.iuran.nama }}
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
                                  `${user.iuran.nama}`,
                                  `${user.tanggal}`
                                )
                              "
                            >
                              Delete
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
          <a
            class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
            href="/dashboard"
          >
            Dashboard
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
            Pengisian Setoran Iuran Warga untuk pendataan
          </p>
        </div>
      </div>
    </div>
    <ToastCard
      v-if="showToast"
      :message_toast="toastMessage"
      v-on:dismissToast="tutupToast"
    />
    <ModalInputCard
      v-if="showModalInputCard"
      :title="ModalInputTitle"
      :message_modal="ModalInputMessage"
      :modelValue="pekerjaanValue"
      v-on:cancelButton="tutupModalInput"
      v-on:closeButton="tutupModalInput"
      v-on:okeButton="updatePekerjaan"
      v-model:modelValue="pekerjaanValue"
    />
    <ModalCard
      v-if="showModal"
      :title="ModalTitle"
      :message_modal="ModalMessage"
      v-on:okeButton="deleteIuranKK"
      v-on:cancelButton="tutupModal"
      v-on:closeButton="tutupModal"
    />
    <LoadingOverlay />
  </div>
</template>

<script setup>
import ToastCard from "../components/ToastCard.vue";
import axios from "axios";
import { onMounted, computed } from "vue";
import { ref } from "vue";
import { BASE_URL } from "../base.url.utils";
import ModalInputCard from "../components/ModalInputCard.vue";
import ModalCard from "../components/ModalCard.vue";
import router from "../router";
import { useRoute } from "vue-router";
import trailku from "../trail/trail";
import api from "../user/axios";
import { useLoadingStore } from "../stores/loading";
import LoadingOverlay from "../components/LoadingOverlay.vue";

const loadingStore = useLoadingStore();

const searchQuery = ref("");
const route = useRoute();
const nama_kk = ref("");

const hasilListKK = ref([]);
const hasilPekerjaan = ref([]);
const hasilIuran = ref([]);
const hasilIuranKK = ref([]);
const formValues = ref({});
const pekerjaanValue = ref("");
const showToast = ref(false);
const toastMessage = ref("");
const showModal = ref(false);
const showModalInputCard = ref(false);
const ModalInputTitle = ref("");
const ModalInputMessage = ref("");
const ModalTitle = ref("");
const ModalMessage = ref("");
const Idku = ref("");
const nominal = ref(0);
const selectedIuran = ref("");
const iuranRef = ref(null);

const selectedIDKK = ref("");
const idKKRef = ref(null);

async function getJenisPekerjaan() {
  const url = `${BASE_URL}bayar/list/iuran`;
  const listJenisPekerjaan = await axios.get(url);
  hasilPekerjaan.value = listJenisPekerjaan.data.result;
  // console.log(hasilPekerjaan.value);
}

// In your getIuran() function, ensure the select has a default value
async function getIuran() {
  try {
    nama_kk.value = route.params.nama;

    const url = `${BASE_URL}bayar/list/iuran`;
    const listJenisIuran = await axios.get(url);
    hasilIuran.value = listJenisIuran.data?.result;
  } catch (error) {
    console.log(error);
  }
}

async function getIuranKK() {
  try {
    const idKK = parseInt(route.params.id);
    selectedIDKK.value = idKK;
    const listIuranKK = await axios.get(`${BASE_URL}bayar/setor/kk/${idKK}`);
    hasilIuranKK.value = listIuranKK.data?.result;
    console.log("Laporan Iuran : ", hasilIuranKK.value);
  } catch (error) {
    console.log(error);
  }
}

async function getIuranKKLagi() {
  try {
    const idKK = selectedIDKK.value;
    const listIuranKK = await axios.get(`${BASE_URL}bayar/setor/kk/${idKK}`);
    hasilIuranKK.value = listIuranKK.data?.result;
    console.log("Laporan Iuran : ", hasilIuranKK.value);
  } catch (error) {
    console.log(error);
  }
}

async function getNominal() {
  if (!iuranRef.value) return;
  const type = iuranRef.value.value;
  try {
    const url = `${BASE_URL}bayar/get/nominal/${type}`;
    const response = await axios.get(url);
    nominal.value = response.data?.result?.iuran || 0;
    console.log("nominalnya :", nominal.value);
  } catch (error) {
    console.error(error);
    nominal.value = 0;
  }
}

function getIDKK() {
  const selectEl = idKKRef.value;
  const text = selectEl.options[selectEl.selectedIndex].text;
  getIuranKKLagi();
}

async function addPekerjaan() {
  if (!selectedIuran.value) {
    showToast.value = true;
    toastMessage.value = "Please select an iuran type";
    return;
  }

  const idKK = parseInt(selectedIDKK.value);
  const url = `${BASE_URL}bayar/add/setor`;
  let tanggal = document.getElementById("tanggal").value;
  if (!isValidDate(tanggal)) {
    showToast.value = true;
    toastMessage.value = "Format tanggal tidak valid. Gunakan format  yang sesuai";
    return;
  } else {
    tanggal = tanggal + " 00:00:00";
  }
  const iuran = parseInt(document.getElementById("iuran").value);
  const keterangan = document.getElementById("keterangan").value;
  const nilai = parseInt(document.getElementById("nilai").value);
  formValues.value = {
    tanggal: tanggal,
    nilai: nilai,
    id_iuran: iuran,
    keterangan: keterangan,
    id_kk: idKK,
  };
  console.log(formValues.value);
  try {
    const tambahKerjaan = await api.post(url, formValues.value, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    showToast.value = true;
    toastMessage.value = tambahKerjaan.data.message;
    const trail = await trailku(toastMessage.value);
    console.log(trail);

    console.log(tambahKerjaan);
  } catch (error) {
    showToast.value = true;
    toastMessage.value = error;
  }
}

function tutupToast() {
  showToast.value = false;
  window.location.reload();
}

function tutupModal() {
  showModal.value = false;
  window.location.reload();
}

function bukaModal(id, iuran, tanggal) {
  showModal.value = true;
  ModalTitle.value = "Delete Setoran";
  ModalMessage.value =
    "Anda yakin ingin menghapus dan mengganti " +
    iuran +
    " tanggal " +
    formatTanggal(tanggal) +
    " ini?";
  formValues.value.id = id;
}

function tutupModalInput() {
  showModalInputCard.value = false;
  window.location.reload();
}

async function updatePekerjaan() {
  const url = `${BASE_URL}bayar/create/pekerjaan`;
  formValues.value.nama = pekerjaanValue.value;
  formValues.value.id = parseInt(formValues.value.id);
  console.log(formValues.value);
  try {
    const updatePekerjaan = await api.post(url, formValues.value, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    showToast.value = true;
    toastMessage.value = updatePekerjaan.data.message;
    const trail = await trailku(toastMessage.value);
    console.log(trail);
    showModalInputCard.value = false;
  } catch (error) {
    showToast.value = true;
    toastMessage.value = error;
  }
}
async function deleteIuranKK() {
  const url = `${BASE_URL}bayar/delete/setor`;
  formValues.value.id = parseInt(formValues.value.id);
  console.log(formValues.value);

  try {
    const hapusPekerjaan = await api.post(url, formValues.value, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    showModal.value = false;
    showToast.value = true;
    toastMessage.value = hapusPekerjaan.data.message;
    const trail = await trailku(toastMessage.value);
    console.log(trail);
  } catch (error) {
    showModal.value = false;
    showToast.value = true;
    toastMessage.value = error;
  }
}

function bukaModalInput(id, pekerjaan) {
  const url_id = "/iuran/edit/jenis/" + id;
  router.push(url_id);
}
onMounted(() => {
  listKK();
  getJenisPekerjaan();
  getIuran();
  getIuranKK();
});

const filteredPekerjaan = computed(() => {
  if (!searchQuery.value) {
    return hasilIuranKK.value;
  }
  return hasilIuranKK.value.filter(
    (pekerjaan) =>
      pekerjaan.kk.warga[0].nama
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase()) ||
      formatTanggal(pekerjaan.tanggal)
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase()) ||
      formatRupiah(pekerjaan.nilai)
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase()) ||
      pekerjaan.kk.blok.blok
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase()) ||
      pekerjaan.kk.no_rumah
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase())
  );
});

function handleSearch() {
  // This function is called on input event to filter users.
  // It's already handled by the computed property `filteredUsers`.
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

async function listKK() {
  loadingStore.show();
  try {
    const listIuranKK = await axios.get(`${BASE_URL}warga/list/kk`);
    hasilListKK.value = listIuranKK.data?.result;
    console.log("Laporan Daftar KK : ", hasilListKK.value);
  } catch (error) {
    console.log(error);
  } finally {
    loadingStore.hide();
  }
}

function formatTanggal(dateString) {
  const tanggal = new Date(dateString);
  const localeDate = tanggal.toLocaleDateString("en-GB");

  return localeDate;
}

function isValidDate(dateString) {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateString)) return false;

  const date = new Date(dateString);
  const timestamp = date.getTime();

  return !isNaN(timestamp) && date.toISOString().slice(0, 10) === dateString;
}
</script>

<style lang="css">
.dt-layout-row:has(.dt-search),
.dt-layout-row:has(.dt-length),
.dt-layout-row:has(.dt-paging) {
  display: none !important;
}
</style>
