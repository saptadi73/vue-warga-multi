<template>
  <div>
    <div
      class="flex p-5 flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
    >
      <div class="p-4 md:p-5">
        <h3 class="text-lg font-bold text-gray-800 dark:text-white">
          Daftar Kepala Keluarga
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
                  <table class="min-w-full">
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
                        <th class="py-3 px-4 text-xs font-normal">Blok/No</th>
                        <th class="py-3 px-4 text-xs font-normal">
                          Nomor Rumah
                        </th>
                        <th class="py-3 px-4 text-xs font-normal">
                          No. Kartu Keluarga
                        </th>
                        <th class="py-3 px-4 text-xs font-normal">
                          Nama Kepala Keluarga
                        </th>
                        <th class="py-3 px-4 text-xs font-normal">NIK</th>
                        <th class="py-3 px-4 text-xs font-normal">JK</th>
                        <th class="py-3 px-4 text-xs font-normal">
                          Tempat Lahir
                        </th>
                        <th class="py-3 px-4 text-xs font-normal">
                          Tanggal Lahir
                        </th>
                        <th class="py-3 px-4 text-xs font-normal">Pekerjaan</th>
                        <th class="py-3 px-4 text-xs font-normal">No HP/WA</th>
                        <th class="py-3 px-4 text-end text-xs font-normal">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody
                      class="divide-y divide-gray-200 dark:divide-neutral-700 text-center"
                    >
                      <tr v-for="user in filteredUsers" :key="user.id">
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
                          {{ user.blok.blok }}
                        </td>
                        <td
                          class="p-4 text-xs font-medium text-gray-800 dark:text-neutral-200"
                        >
                          {{ user.no_rumah }}
                        </td>
                        <td
                          class="p-4 text-xs font-medium text-gray-800 dark:text-neutral-200"
                        >
                          {{ user.no_kk }}
                        </td>
                        <td
                          class="p-4 text-xs font-medium text-gray-800 dark:text-neutral-200"
                        >
                          {{ user.warga[0].nama }}
                        </td>
                        <td
                          class="p-4 text-xs font-medium text-gray-800 dark:text-neutral-200"
                        >
                          {{ user.warga[0].nik }}
                        </td>
                        <td
                          class="py-4 text-xs text-gray-800 dark:text-neutral-200"
                        >
                          {{ jk(user.warga[0].jenis_kelamin) }}
                        </td>
                        <td
                          class="p-4 text-xs text-gray-800 dark:text-neutral-200"
                        >
                          {{ user.warga[0].tempat_lahir }}
                        </td>
                        <td
                          class="p-4 text-xs text-gray-800 dark:text-neutral-200"
                        >
                          {{ formatTanggal(user.warga[0].tanggal_lahir) }}
                        </td>
                        <td
                          class="p-4 text-xs text-gray-800 dark:text-neutral-200"
                        >
                          {{ user.warga[0].pekerjaan.nama }}
                        </td>
                        <td
                          class="p-4 text-xs text-gray-800 dark:text-neutral-200"
                        >
                          {{ user.warga[0].no_hp }}
                        </td>

                        <!-- Tombol Aksi -->
                        <td class="p-2 text-end text-sm font-medium">
                          <RouterLink
                            :to="`/warga/tambah/warga/${user.warga[0].uuid}/${user.uuid}`"
                            type="button"
                            title="Tambah Anggota Keluarga"
                            class="text-blue-600 hover:text-blue-800"
                          >
                            +
                            <span class="material-icons text-blue-700"
                              >diversity_1</span
                            >
                          </RouterLink>
                          <RouterLink
                            :to="`/warga/edit/warga/${user.warga[0].uuid}/${user.uuid}`"
                            type="button"
                            title="Edit Data Warga"
                            class="ml-4 text-blue-600 hover:text-blue-800"
                          >
                            <span class="material-icons text-blue-700"
                              >person</span
                            >
                          </RouterLink>
                          <RouterLink
                            :to="`/warga/edit/kk/${user.warga[0].uuid}/${user.uuid}`"
                            type="button"
                            title="Edit Data Keluarga/Rumah"
                            class="ml-4 text-blue-600 hover:text-blue-800"
                          >
                            <span class="material-icons text-blue-700"
                              >doorbell</span
                            >
                          </RouterLink>
                          <RouterLink
                          title="Upload Foto KK"
                            :to="`/warga/upload/fotokk/${
                              user.id
                            }/${encodeURIComponent(user.warga[0].nama)}`"
                            ><span class="material-icons text-blue-700"
                              >upload_file</span
                            ></RouterLink
                          >
                          <button v-if="user.filekeluarga && user.filekeluarga.url" @click="viewGambar(user.filekeluarga.url)" class="ml-2" title="View KK Image">
                            <span class="material-icons text-blue-600">visibility</span>
                          </button>
                          <RouterLink
                          title="Delete Data Keluarga"
                            :to="`/warga/del/kk/${user.warga[0].uuid}/${user.uuid}`"
                            ><span class="material-icons text-blue-600 p-4"
                              >delete</span
                            ></RouterLink
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div class="flex items-center mt-4">
              <div class="text-xs text-gray-500 ms-auto dark:text-neutral-400">
                Showing <span>{{ filteredUsers.length }}</span> keluarga
              </div>
            </div>
          </div>
        </div>
        <div
          class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700"
        >
          <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
            Daftar Warga yang Terdaftar sesuai dengan Blok/No.Rumah
          </p>
        </div>
      </div>
    </div>
    <ModalViewGambar
      v-if="showModalGambar"
      :title="ModalTitleGambar"
      :imageSource="viewGambarku"
      v-on:okeButton="delGambar"
      v-on:cancelButton="tutupModalGambar"
      v-on:closeButton="tutupModalGambar"
    />
  </div>
  <LoadingOverlay/>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import { BASE_URL } from "../base.url.utils";
import { RouterLink } from "vue-router";
import trailku from "../Trail/trail";
import ModalViewGambar from "../components/ModalViewGambar.vue";
import { useLoadingStore } from '../stores/loading'
import LoadingOverlay from "../components/LoadingOverlay.vue";

const loadingStore = useLoadingStore()

const searchQuery = ref("");
const url = BASE_URL + "warga/list/kk";
const users = ref([]);
const currentUser = ref(null);  // Add reactive reference for current user
const showModalGambar = ref(false);
const ModalTitleGambar = ref("");
const viewGambarku = ref("");

onMounted(async () => {

  loadingStore.show();
  try {
    const response = await axios.get(url);
    // Make sure the data is properly structured before assigning
    const result = response.data.result.map(user => ({
      ...user,
      filekeluarga: user.filekeluarga || null // Ensure filekeluarga is at least null if missing
    }));
    users.value = result;
    
    // console.log("hasil list KK", users.value);
    // Debug filekeluarga data
    if (users.value && users.value.length > 0) {
      currentUser.value = users.value[0];  // Store first user reactively
      // console.log("First user data:", currentUser.value);
      // console.log("File Keluarga type:", typeof currentUser.value.filekeluarga);
      // console.log("File Keluarga value:", currentUser.value.filekeluarga);
      
      if (currentUser.value.filekeluarga) {
        // console.log("File Keluarga properties:", Object.keys(currentUser.value.filekeluarga));
        // console.log("Full File Keluarga Object:", JSON.stringify(currentUser.value.filekeluarga, null, 2));
      } else {
        // console.log("filekeluarga is undefined for first user");
      }
    }
  } catch (error) {
    console.error("Error fetching users:", error);
  }finally{
    loadingStore.hide();
  }
});

const filteredUsers = computed(() => {
  if (!searchQuery.value) {
    return users.value;
  }
  return users.value.filter(
    (user) =>
      user.warga[0].nama
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase()) ||
      user.no_kk.toString().includes(searchQuery.value) ||
      user.blok.blok.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.warga[0].nik
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase()) ||
      user.warga[0].tempat_lahir
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase()) ||
      formatTanggal(user.warga[0].tanggal_lahir)
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase()) ||
      user.warga[0].pekerjaan.nama
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase()) ||
      jk(user.warga[0].jenis_kelamin)
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

function formatTanggal(dateString) {
  const tanggal = new Date(dateString);
  const localeDate = tanggal.toLocaleDateString("en-GB");

  return localeDate;
}

function jk(gender) {
  if (gender == true) {
    return "L";
  } else {
    return "P";
  }
}

function viewGambar(url) {
  // console.log("View Gambar called with URL:", url);
  try {
    if (!url) {
      throw new Error("URL is undefined");
    }
    showModalGambar.value = true;
    ModalTitleGambar.value = "Foto KK";
    viewGambarku.value = `${BASE_URL}uploads/${url}`;
    // console.log("Full image URL:", viewGambarku.value);
  } catch (error) {
    console.error("Error in viewGambar:", error);
  }
}

function tutupModalGambar() {
  showModalGambar.value = false;
}

function delGambar() {
  // This function can be implemented if needed for delete functionality
  tutupModalGambar();
}
</script>

<style lang="css">
.dt-layout-row:has(.dt-search),
.dt-layout-row:has(.dt-length),
.dt-layout-row:has(.dt-paging) {
  display: none !important;
}
</style>
