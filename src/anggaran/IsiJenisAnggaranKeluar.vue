<template>
  <div>
    <div
      class="grid w-[80vw] p-5 md:grid-cols-2 md:gap-4 bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
    >
      <!-- start Card  -->
      <div id="card1" class="">
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            Pengisian Jenis Pengeluaran
          </h3>
          <div>
            <div>
              <div class="sm:flex rounded-lg shadow-sm">
                <span
                  class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400"
                  >Isi Jenis Pengeluaran</span
                >
                <input
                  id="nama"
                  type="text"
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
            Hasil Pengisian dan Daftar Jenis Pengeluaran yang sudah ada tertera
            di table bawah
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
            Daftar Jenis Pengeluaran Terdaftar
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
                          <th class="py-3 px-4 text-xs font-normal">
                            Keterangan
                          </th>
                          <th class="py-3 px-4 text-xs font-normal">Edit</th>
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
                            {{ user.nama }}
                          </td>
                          <td
                            class="p-4 text-xs font-medium text-gray-800 dark:text-neutral-200"
                          >
                            {{ user.keterangan }}
                          </td>
                          <td class="text-blue-600 font-semibold">
                            <button
                              @click="
                                bukaModalInput(`${user.id}`, `${user.nama}`)
                              "
                            >
                              Edit
                            </button>
                          </td>
                          <td class="text-blue-600 font-semibold">
                            <button
                              @click="bukaModal(`${user.id}`, `${user.nama}`)"
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
                  Terhitung <span>{{ filteredPekerjaan.length }}</span> Jenis
                  Pengeluaran
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
            Pengisian Jenis Iuran Warga untuk pendataan
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
      v-on:okeButton="deletePekerjaan"
      v-on:cancelButton="tutupModal"
      v-on:closeButton="tutupModal"
    />
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

const searchQuery = ref("");

const hasilAnggaranMasuk = ref([]);
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
const route = useRoute();

async function getJenisAnggaranMasuk() {
  const url = `${BASE_URL}bayar/list/jenis/anggaran`;
  formValues.value.id_type_anggaran = 2;
  try {
    const listJenisAnggaranMAsuk = await api.post(url, formValues.value, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    hasilAnggaranMasuk.value = listJenisAnggaranMAsuk.data.result;
    console.log(tambahKerjaan.data.result);
  } catch (error) {}
}

async function addPekerjaan() {
  const url = `${BASE_URL}bayar/add/jenis/anggaran`;
  const nama_pekerjaan = document.getElementById("nama").value;
  const keterangan = document.getElementById("keterangan").value;
  formValues.value = {
    nama: nama_pekerjaan,
    id_type_anggaran: 2,
    keterangan: keterangan,
  };
  try {
    const tambahKerjaan = await api.post(url, formValues.value, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    showToast.value = true;
    toastMessage.value = tambahKerjaan.data.message;
    const trail = await trailku(tambahKerjaan.data.message);
    console.log(trail);

    router.push({ path: router.path, force: true });
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
  router.push({ path: route.path, force: true });
}

function bukaModal(id, pekerjaan) {
  showModal.value = true;
  ModalTitle.value = "Delete Pekerjaan";
  ModalMessage.value =
    "Anda yakin ingin menghapus jenis pemasukan " + pekerjaan + " ini?";
  formValues.value.id = id;
}

function tutupModalInput() {
  showModalInputCard.value = false;
  router.push({ path: route.path, force: true });
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
async function deletePekerjaan() {
  const url = `${BASE_URL}bayar/delete/jenis/anggaran`;
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
  const url_id = "/anggaran/edit/jenis/anggaran/keluar/" + id;
  router.push(url_id);
}
onMounted(() => {
  getJenisAnggaranMasuk();
});

const filteredPekerjaan = computed(() => {
  if (!searchQuery.value) {
    return hasilAnggaranMasuk.value;
  }
  return hasilAnggaranMasuk.value.filter((pekerjaan) =>
    pekerjaan.nama.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

function handleSearch() {
  // This function is called on input event to filter users.
  // It's already handled by the computed property `filteredUsers`.
}
</script>

<style lang="css">
.dt-layout-row:has(.dt-search),
.dt-layout-row:has(.dt-length),
.dt-layout-row:has(.dt-paging) {
  display: none !important;
}
</style>
