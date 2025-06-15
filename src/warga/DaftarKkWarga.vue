<template>
  <div>
    <div class="flex justify-between mt-5 ml-3">
      <div class="relative max-w-xs">
        <label for="hs-table-filter-search" class="sr-only">Search</label>
        <input
          type="search"
          v-model="searchQuery"
          @input="handleSearch"
          id="hs-table-filter-search"
          class="py-2 px-1 ps-5 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
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
      <div>
        <a href="/warga/list/kk"
          ><span class="material-icons text-black w-16 h-16" title="List View"
            >menu</span
          ></a
        >
      </div>
    </div>

    <div class="flex items-center mt-4">
      <div class="text-xs text-gray-500 ms-auto dark:text-neutral-400">
        Showing <span>{{ filteredUsers.length }}</span> users
      </div>
    </div>
    <!-- component -->
    <div
      class="grid md:grid-cols-4 md:gap-5 md:p-5 h-screen w-[80vw] justify-center"
    >
      <div
        v-if="filteredUsers"
        v-for="user in filteredUsers"
        :key="user.id"
        class="max-w-xs"
      >
        <div class="bg-gradient from-blue-50 to-blue-200 shadow-xl rounded-xl py-3">
          <div class="photo-wrapper p-2">
            <div
              v-if="
                user.warga[0].photo_warga && user.warga[0]?.photo_warga?.url
              "
              title="View Image"
              class="relative"
            >
              <img
                :src="`${BASE_URL}uploads/${user.warga[0]?.photo_warga?.url}`"
                alt="photo"
                class="w-32 h-32 rounded-full mx-auto"
              /><button
                class="absolute bottom-2 right-20"
                @click="viewGambar(user.warga[0]?.photo_warga?.url,'Foto Kepala Keluarga')"
              >
                <span
                  class="material-icons rounded-s-full bg-yellow-200 text-green-600 w-6 h-6 rounded-full text-center animate-spin"
                  >cyclone</span
                >
              </button>
            </div>
            <div v-else class="relative">
              <img
                :src="`${BASE_URL}uploads/avatar.jpg`"
                alt="photo"
                class="w-32 h-32 rounded-full mx-auto"
              /><RouterLink
                title="Upload Photo Kepala Keluarga"
                :to="`/warga/upload/fotoktp/${
                          user.warga[0].id
                        }/${encodeURIComponent(user.warga[0].nama)}`"
                ><span
                  class="material-icons text-white absolute bottom-2 right-24 bg-slate-600 rounded-full"
                  >upload_file</span
                ></RouterLink
              >
            </div>
          </div>
          <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 font-bold font-Roboto leading-8">
              {{ user.warga[0].nama }}
            </h3>
            <div class="text-center text-gray-500 text-sm font-bold">
              <p>{{ user.warga[0].pekerjaan.nama }}</p>
            </div>
            <table class="text-xs my-3">
              <tbody>
                <tr class="border">
                  <td class="px-2 py-2 text-gray-500 font-semibold">Alamat</td>
                  <td class="px-2 py-2">
                    {{ user.blok.blok }} / {{ user.no_rumah }}
                  </td>
                </tr>
                <tr class="border bg-slate-100">
                  <td class="px-2 py-2 text-gray-500 font-semibold">Kartu Keluarga</td>
                  <td class="px-2 py-2">{{ user.no_kk }}</td>
                </tr>
                <tr class="border">
                  <td class="px-2 py-2 text-gray-500 font-semibold">Tempat Lahir</td>
                  <td class="px-2 py-2">{{ user.warga[0].tempat_lahir }}</td>
                </tr>
                <tr class="border bg-slate-100">
                  <td class="px-2 py-2 text-gray-500 font-semibold">Tanggal Lahir</td>
                  <td class="px-2 py-2">{{ formatTanggal(user.warga[0].tanggal_lahir) }}</td>
                </tr>
                <tr class="border">
                  <td class="px-2 py-2 text-gray-500 font-semibold">HP</td>
                  <td class="px-2 py-2">{{ user.warga[0].no_hp }}</td>
                </tr>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">
                    <RouterLink
                      title="Lihat Anggota Keluarga"
                      :to="`/warga/list/warga/kk/${user.uuid}`"
                      type="button"
                      class="ml-4 text-blue-600 hover:text-blue-800"
                    >
                      <span class="material-icons text-blue-700"
                        >family_restroom</span
                      >Anggota Keluarga
                    </RouterLink>
                  </td>
                </tr>

                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">
                    <RouterLink
                      title="Tambah Anggota Keluarga"
                      :to="`/warga/tambah/warga/${user.warga[0].uuid}/${user.uuid}`"
                      type="button"
                      class="text-blue-600 hover:text-blue-800"
                    >
                      +
                      <span class="material-icons text-blue-700"
                        >diversity_1</span
                      >Tambah Anggota
                    </RouterLink>
                  </td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">
                      <button
                        type="button"
                        title="Bayar Iuran Keluarga"
                        class="text-blue-600 ml-2 hover:text-blue-800"
                        @click="
                          jumptoBayar(`${user.id}`, `${user.warga[0].nama}`)
                        "
                      ><span class="material-icons text-blue-700"
                        >savings</span
                      >
                        Bayar Iuran
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">
                      <button
                        v-if="user.filekeluarga && user.filekeluarga.url"
                        @click="viewGambar(user.filekeluarga.url,'Foto Kartu Keluarga')"
                        class="ml-2 text-blue-600 hover:text-blue-800"
                        title="View KK Image"
                      >
                        <span class="material-icons text-blue-600"
                          >visibility</span
                        >Lihat Kartu Keluarga
                      </button>
                      <RouterLink v-else
                      class="ml-2 text-blue-600 hover:text-blue-800"
                        title="Upload KK Image"
                        :to="`/warga/upload/fotokk/${
                          user.id
                        }/${encodeURIComponent(user.warga[0].nama)}`"
                        ><span class="material-icons text-blue-700"
                          >upload_file</span
                        >Upload Kartu Keluarga</RouterLink
                      >
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- start new card -->
    </div>

    <ModalViewGambar
      v-if="showModalGambar"
      :title="ModalTitleGambar"
      :imageSource="viewGambarku"
      v-on:okeButton="delGambar"
      v-on:cancelButton="tutupModalGambar"
      v-on:closeButton="tutupModalGambar"
    />
    <LoadingOverlay />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import { BASE_URL } from "../base.url.utils";
import { RouterLink } from "vue-router";
import trailku from "../Trail/trail";
import ModalViewGambar from "../components/ModalViewGambar.vue";
import { useLoadingStore } from "../stores/loading";
import LoadingOverlay from "../components/LoadingOverlay.vue";
import router from "../router";
import { useRoute } from "vue-router";


const loadingStore = useLoadingStore();

const searchQuery = ref("");
const url = BASE_URL + "warga/list/kk";
const users = ref([]);
const currentUser = ref(null); // Add reactive reference for current user
const showModalGambar = ref(false);
const ModalTitleGambar = ref("");
const viewGambarku = ref("");

onMounted(async () => {
  loadingStore.show();
  try {
    const response = await axios.get(url);
    // Make sure the data is properly structured before assigning
    const result = response.data.result.map((user) => ({
      ...user,
      filekeluarga: user.filekeluarga || null, // Ensure filekeluarga is at least null if missing
    }));
    users.value = result;

    console.log("hasil list KK", users.value);
    // Debug filekeluarga data
    if (users.value && users.value.length > 0) {
      currentUser.value = users.value[0]; // Store first user reactively
      console.log("First user data:", currentUser.value);
      console.log("File Keluarga type:", typeof currentUser.value.filekeluarga);
      console.log("File Keluarga value:", currentUser.value.filekeluarga);

      if (currentUser.value.filekeluarga) {
        console.log(
          "File Keluarga properties:",
          Object.keys(currentUser.value.filekeluarga)
        );
        console.log(
          "Full File Keluarga Object:",
          JSON.stringify(currentUser.value.filekeluarga, null, 2)
        );
      } else {
        console.log("filekeluarga is undefined for first user");
      }
    }
  } catch (error) {
    console.error("Error fetching users:", error);
  } finally {
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

function jumptoBayar(id, nama) {
  const url = "/iuran/bayar/kk/" + id + "/" + nama;
  router.push(url);
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

function viewGambar(url,title) {
  console.log("View Gambar called with URL:", url);
  try {
    if (!url) {
      throw new Error("URL is undefined");
    }
    showModalGambar.value = true;
    ModalTitleGambar.value = title;
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

<style lang="scss" scoped></style>
