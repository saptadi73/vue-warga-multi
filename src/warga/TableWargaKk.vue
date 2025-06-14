<template>
  <div>
    <div class="p-5 w-[90vw]">
      <div class="mt-2 mb-2 ml-10 text-lg font-bold text-slate-500">
        <span>Daftar Anggota Keluarga</span>
      </div>

      <div id="hs-datatable-filter mt-5" class="flex flex-col">
        <div class="flex items-center space-x-2 mb-4">
          <div class="flex-0">
            <div class="relative max-w-xs">
              <label for="hs-table-filter-search" class="sr-only">Search</label>
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
                <thead class="border-y border-gray-200 dark:border-neutral-700">
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
                    <th class="py-1 text-start font-normal">No</th>
                    <th class="py-1 text-start font-normal">Photo</th>
                    <th class="py-1 text-start font-normal">Nama</th>
                    <th class="py-1 text-start font-normal">NIK</th>
                    <th class="py-1 text-start font-normal">Type</th>
                    <th class="py-1 text-start font-normal">HP</th>
                    <th class="py-1 text-start font-normal">JK</th>
                    <th class="py-1 text-start font-normal">Tempat Lahir</th>
                    <th class="py-1 text-start font-normal">Tanggal Lahir</th>
                    <th class="py-2 px-3 text-end font-normal">Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr
                    v-for="(user, index) in filteredUsers"
                    :key="user.id"
                    class="even:bg-slate-100"
                  >
                    <td class="py-3 ps-3">
                      <div class="flex items-center h-5">
                        <input
                          :id="'hs-table-filter-checkbox-' + user.id"
                          type="checkbox"
                          class="hs-datatable-select-row border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500"
                        />
                        <label
                          :for="'hs-table-filter-checkbox-' + user.id"
                          class="sr-only"
                          >Checkbox</label
                        >
                      </div>
                    </td>
                    <td
                      class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                    >
                      {{ index + 1 }}
                    </td>
                    <td
                      class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                    >
                    <button v-if="user.photo_warga && user.photo_warga?.url" @click="viewGambar(user.photo_warga?.url)"><img :src="`${BASE_URL}uploads/${user.photo_warga?.url}`" alt="photo" class="w-10 h-10 rounded-full"></button>
                    <img v-else :src="`${BASE_URL}uploads/avatar.jpg`" alt="photo" class="w-10 h-10 rounded-full">
                  </td>
                    <td
                      class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                    >
                      {{ user.nama }}
                    </td>
                    <td
                      class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                    >
                      {{ user.nik }}
                    </td>
                    <td
                      class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                    >
                      {{ user.type.nama }}
                    </td>
                    <td
                      class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                    >
                      {{ user.no_hp }}
                    </td>
                    <td
                      class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                    >
                      {{ jenis_kelamin(user.jenis_kelamin) }}
                    </td>
                    <td
                      class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                    >
                      {{ user.tempat_lahir }}
                    </td>
                    <td
                      class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                    >
                      {{ formatTanggal(user.tanggal_lahir) }}
                    </td>
                    <td
                      class="p-3 whitespace-nowrap text-end text-sm font-medium"
                    >
                      <RouterLink
                        :to="`/warga/edit/warga/${user.uuid}/${user.kk.uuid}`"
                        type="button"
                        class="ml-4 text-blue-600 hover:text-blue-800"
                      >
                        <span class="material-icons text-blue-700">person</span>
                      </RouterLink>
                      <RouterLink
                        :to="`/warga/upload/fotoktp/${
                          user.id
                        }/${encodeURIComponent(user.nama)}`"
                        ><span class="material-icons text-blue-700"
                          >upload_file</span
                        ></RouterLink
                      >
                      <button
                        type="button"
                        @click="bukaModal(user.nama, user.uuid)"
                        class="ml-4 text-blue-600 hover:text-blue-800"
                      >
                        <span class="material-icons text-blue-700">delete</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="flex items-center mt-4">
          <div class="text-xs text-gray-500 ms-auto dark:text-neutral-400">
            Showing <span>{{ filteredUsers.length }}</span> users
          </div>
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
      v-on:okeButton="deleteWarga"
      v-on:cancelButton="tutupModal"
      v-on:closeButton="tutupModal"
    />
  </div>
  <ModalViewGambar
      v-if="showModalGambar"
      :title="ModalTitleGambar"
      :imageSource="viewGambarku"
      v-on:okeButton="delGambar"
      v-on:cancelButton="tutupModalGambar"
      v-on:closeButton="tutupModalGambar"
    />
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import { BASE_URL } from "../base.url.utils";
import { useRoute } from "vue-router";
import ToastCard from "../components/ToastCard.vue";
import ModalCard from "../components/ModalCard.vue";
import trailku from "../Trail/trail";
import ModalViewGambar from "../components/ModalViewGambar.vue";
import api from "../user/axios";

const route = useRoute();
const showToast = ref(false);
const showModal = ref(false);
const toastMessage = ref("");
const ModalMessage = ref("");
const ModalTitle = ref("");
const UUIDku = ref("");
const showModalGambar = ref(false);
const ModalTitleGambar = ref("");
const viewGambarku = ref("");

const searchQuery = ref("");

const users = ref([]);

onMounted(async () => {
  try {
    const uuid = route.params.id;
    const url = BASE_URL + "warga/list/warga/" + uuid;
    const response = await axios.get(url);
    users.value = response.data.result;
    console.log("hasil list KK", users.value);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
});

const filteredUsers = computed(() => {
  if (!searchQuery.value) {
    return users.value;
  }
  return users.value.filter(
    (user) =>
      user.nama.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.no_hp.toString().includes(searchQuery.value) ||
      user.nik.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.tempat_lahir
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase()) ||
      formatTanggal(user.tanggal_lahir)
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase()) ||
      jenis_kelamin(user.jenis_kelamin)
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase()) ||
      user.type.nama.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

function handleSearch() {
  // This function is called on input event to filter users.
  // It's already handled by the computed property `filteredUsers`.
}

function formatTanggal(dateString) {
  const tanggal = new Date(dateString);
  const localeDate = tanggal.toLocaleDateString("en-GB");

  return localeDate;
}

function jenis_kelamin(jenis_kelamin) {
  if (jenis_kelamin == true) {
    return "Pria";
  } else {
    return "Wanita";
  }
}

function tutupModal() {
  showModal.value = false;
  window.location.reload();
  
}

function tutupToast() {
  showToast.value = false;
  showModal.value = false;
  window.location.reload();
}

function bukaModal(nama, uuidwarga) {
  showModal.value = true;
  ModalTitle.value = "Delete Warga";
  ModalMessage.value =
    "Anda yakin untuk menghapus warga bernama " +
    nama +
    " yang telah terisi ini?";
  UUIDku.value = uuidwarga;
}

async function deleteWarga() {
  try {
    const dataDelete = { uuid: UUIDku.value };
    const url = BASE_URL + "warga/del/warga";
    const hapusWargaSatu = await api.post(url, dataDelete, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(hapusWargaSatu.data);
    showToast.value = true;
    toastMessage.value = hapusWargaSatu.data.message;
    await trailku(toastMessage.value);
    console.log('datakirim :', dataDelete);
  } catch (error) {
    showToast.value = true;
    toastMessage.value = error;
  }
}

function viewGambar(url) {
  console.log("View Gambar called with URL:", url);
  try {
    if (!url) {
      throw new Error("URL is undefined");
    }
    showModalGambar.value = true;
    ModalTitleGambar.value = "Foto Warga";
    viewGambarku.value = `${BASE_URL}uploads/${url}`;
    console.log("Full image URL:", viewGambarku.value);
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
