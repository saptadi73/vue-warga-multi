<template>
  <div>
    <!-- component -->
    <div class="grid md:grid-cols-4 md:gap-5 md:p-5 h-screen w-[80vw] justify-center">
      <div v-if="filteredUsers" v-for="user in filteredUsers" :key="user.id" class="max-w-xs">
        <div class="bg-white shadow-xl rounded-lg py-3">
          <div class="photo-wrapper p-2">
            <button v-if="user.warga[0].photo_warga && user.warga[0]?.photo_warga?.url" @click="viewGambar(user.warga[0]?.photo_warga?.url)"><img :src="`${BASE_URL}uploads/${user.warga[0]?.photo_warga?.url}`" alt="photo" class="w-32 h-32 rounded-full mx-auto"></button>
                    <img v-else :src="`${BASE_URL}uploads/avatar.jpg`" alt="photo" class="w-32 h-32 rounded-full mx-auto">

          </div>
          <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
              {{ user.warga[0].nama }}
            </h3>
            <div class="text-center text-gray-400 text-xs font-semibold">
              <p>{{user.warga[0].pekerjaan.nama}}</p>
            </div>
            <table class="text-xs my-3">
              <tbody>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Alamat</td>
                  <td class="px-2 py-2">{{ user.blok.blok}} / {{user.no_rumah}}</td>
                </tr>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">HP</td>
                  <td class="px-2 py-2">{{ user.warga[0].no_hp}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="max-w-xs">
        <div class="bg-white shadow-xl rounded-lg py-3">
          <div class="photo-wrapper p-2">
            <img
              class="w-32 h-32 rounded-full mx-auto"
              src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
              alt="John Doe"
            />
          </div>
          <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
              Joh Doe
            </h3>
            <div class="text-center text-gray-400 text-xs font-semibold">
              <p>Web Developer</p>
            </div>
            <table class="text-xs my-3">
              <tbody>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                  <td class="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                </tr>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                  <td class="px-2 py-2">+977 9955221114</td>
                </tr>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                  <td class="px-2 py-2">john@exmaple.com</td>
                </tr>
              </tbody>
            </table>

            <div class="text-center my-3">
              <a
                class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                href="#"
                >View Profile</a
              >
            </div>
          </div>
        </div>
      </div>

      <!-- start new card -->
      <div class="max-w-xs">
        <div class="bg-white shadow-xl rounded-lg py-3">
          <div class="photo-wrapper p-2">
            <img
              class="w-32 h-32 rounded-full mx-auto"
              src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
              alt="John Doe"
            />
          </div>
          <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
              Joh Doe
            </h3>
            <div class="text-center text-gray-400 text-xs font-semibold">
              <p>Web Developer</p>
            </div>
            <table class="text-xs my-3">
              <tbody>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                  <td class="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                </tr>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                  <td class="px-2 py-2">+977 9955221114</td>
                </tr>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                  <td class="px-2 py-2">john@exmaple.com</td>
                </tr>
              </tbody>
            </table>

            <div class="text-center my-3">
              <a
                class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                href="#"
                >View Profile</a
              >
            </div>
          </div>
        </div>
      </div>

      <!-- start new card -->
      <div class="max-w-xs">
        <div class="bg-white shadow-xl rounded-lg py-3">
          <div class="photo-wrapper p-2">
            <img
              class="w-32 h-32 rounded-full mx-auto"
              src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
              alt="John Doe"
            />
          </div>
          <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
              Joh Doe
            </h3>
            <div class="text-center text-gray-400 text-xs font-semibold">
              <p>Web Developer</p>
            </div>
            <table class="text-xs my-3">
              <tbody>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                  <td class="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                </tr>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                  <td class="px-2 py-2">+977 9955221114</td>
                </tr>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                  <td class="px-2 py-2">john@exmaple.com</td>
                </tr>
              </tbody>
            </table>

            <div class="text-center my-3">
              <a
                class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                href="#"
                >View Profile</a
              >
            </div>
          </div>
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
    <LoadingOverlay/>
  </div>
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
    
    console.log("hasil list KK", users.value);
    // Debug filekeluarga data
    if (users.value && users.value.length > 0) {
      currentUser.value = users.value[0];  // Store first user reactively
      console.log("First user data:", currentUser.value);
      console.log("File Keluarga type:", typeof currentUser.value.filekeluarga);
      console.log("File Keluarga value:", currentUser.value.filekeluarga);
      
      if (currentUser.value.filekeluarga) {
        console.log("File Keluarga properties:", Object.keys(currentUser.value.filekeluarga));
        console.log("Full File Keluarga Object:", JSON.stringify(currentUser.value.filekeluarga, null, 2));
      } else {
        console.log("filekeluarga is undefined for first user");
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
  console.log("View Gambar called with URL:", url);
  try {
    if (!url) {
      throw new Error("URL is undefined");
    }
    showModalGambar.value = true;
    ModalTitleGambar.value = "Foto KK";
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
