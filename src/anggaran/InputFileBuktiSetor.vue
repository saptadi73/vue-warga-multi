<template>
  <div>
    <div
      class="grid p-5 md:grid-cols-2 md:gap-4 bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
    >
      <!-- start Card  -->
      <div id="card1" class="w-[40vw]">
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            Upload Gambar Bukti Pemasukan/Pengeluaran
          </h3>
        </div>
        <form v-on:submit.prevent>
          <div>
            <div class="w-full space-y-3">
              <span>Keterangan File</span>
              <input
              :disabled="isDisabled"
              v-model="formValues.keterangan"
                type="text"
                id="keterangan"
                class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="This is placeholder"
              />
            </div>
          </div>
          <div>
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="file_input"
              >Upload file</label
            >
            <input
            :disabled="isDisabled"
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              :onchange="pickFile"
              type="file"
              accept="image/jpeg,image/jpg,image/png,image/gif"
            />
          </div>
          <button
            type="submit"
            class="bg-purple-700 text-white font-Roboto font-semibold p-2 m-5 rounded-md shadow-md"
            @click="uploadFile"
          >
            Submit
          </button>
        </form>

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
          Silakan untuk memasukan file gambar dengan format jpg, jpeg, png, dan
          gif.
        </p>
        <div>
          <div>
            Image
            <img :src="previewImage" v-if="previewImage" width="350" />
          </div>
          
        </div>
        
      </div>
      <button
            :onclick="disableEditFoto"
            class="w-52 bg-purple-600 text-white rounded-lg shadow-lg"
          >
            <span class="material-icons text-white">image</span>Edit
          </button>
    </div>

    <ToastCard
      v-if="showToast"
      :message_toast="toastMessage"
      v-on:dismissToast="tutupToast"
    />
  </div>
  <ModalCard
    v-if="showModal"
    :title="ModalTitle"
    :message_modal="ModalMessage"
    v-on:okeButton="unlinkFoto"
    v-on:cancelButton="tutupModal"
    v-on:closeButton="tutupModal"
  />
  <LoadingOverlay/>
</template>

<script setup>
import axios from "axios";
import { onMounted, computed } from "vue";
import { ref } from "vue";
import { BASE_URL } from "../base.url.utils";
import router from "../router";
import { useRoute } from "vue-router";
import ToastCard from "../components/ToastCard.vue";
import trailku from "../Trail/trail";
import ModalCard from "../components/ModalCard.vue";
import { useLoadingStore } from "../stores/loading";
import LoadingOverlay from "../components/LoadingOverlay.vue";
import api from "../user/axios";

const loadingStore = useLoadingStore();

const hasilUpload = ref([]);
const formValues = ref({});
const previewImage = ref(null);
const file = ref(null);
const fileInput = ref(null);
const namaGambar = ref(null);
const showToast = ref(false);
const toastMessage = ref(null);
const route = useRoute();
const nama_keluarga = ref(null);
const isDisabled = ref(false);
const ImageMessage = ref(null);
const imagekita = ref(null);
const showModal = ref(false);
const ModalTitle = ref("");
const ModalMessage = ref("");
const fileError = ref("");
const maxFileSize = 500 * 1024; // 500KB
const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];

onMounted(() => {
  nama_keluarga.value = decodeURIComponent(route.params.nama);
  formValues.value.keterangan =
    "Foto Bukti Kwitansi/Nota " + nama_keluarga.value;
  getImageKeluarga();
});

function pickFile(event) {
  // Clear previous error
  fileError.value = "";

  const selectedFile = event.target.files[0];

  if (!selectedFile) {
    file.value = null;
    namaGambar.value = null;
    previewImage.value = null;
    return;
  }

  console.log(selectedFile);

  // Validate file type
  if (!allowedTypes.includes(selectedFile.type)) {
    fileError.value =
      "Tipe file tidak valid. Hanya file JPG, JPEG, PNG, dan GIF yang diperbolehkan.";
    event.target.value = ""; // Clear the input
    file.value = null;
    namaGambar.value = null;
    previewImage.value = null;
    return;
  }

  // Validate file size
  if (selectedFile.size > maxFileSize) {
    const maxSizeKB = maxFileSize / 1024;
    fileError.value = `Ukuran file terlalu besar. Maksimal ${maxSizeKB}KB.`;
    event.target.value = ""; // Clear the input
    file.value = null;
    namaGambar.value = null;
    previewImage.value = null;
    return;
  }

  // If validation passes, set the file
  file.value = selectedFile;
  namaGambar.value = selectedFile.name;
  previewImage.value = URL.createObjectURL(selectedFile);
}

async function uploadFile() {
  // Validate if file is selected
  if (!file.value) {
    fileError.value = "Silakan pilih file terlebih dahulu";
    return;
  }

  const idAnggaran = route.params.id;
  const url = `${BASE_URL}warga/bukti`;
  const keterangan = document.getElementById("keterangan").value;

  const formDataku = new FormData();
  formDataku.append("file", file.value);
  formDataku.append("id_anggaran", idAnggaran);
  formDataku.append("keterangan", keterangan);
  formDataku.append("nama", "bukti foto Kwitansi/Nota");
  console.log(formDataku);

  loadingStore.show();
  try {
    const uploadBukti = await api.post(url, formDataku, {
      Headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    hasilUpload.value = uploadBukti.data.result;
    showToast.value = true;
    toastMessage.value = uploadBukti.data.message;
    const trail = await trailku(toastMessage.value);
    console.log(trail);
  } catch (error) {
    showToast.value = true;
    toastMessage.value = error;
  }finally{
    loadingStore.hide();
  }
}

function tutupToast() {
  showToast.value = false;
  window.location.reload();
}

async function getImageKeluarga() {
  try {
    const id_kk = route.params.id;
    const viewPhotoKK = await axios.get(`${BASE_URL}bayar/find/anggaran/${id_kk}`);
    imagekita.value = viewPhotoKK.data?.result?.bukti?.url;

    if (imagekita.value) {
      ImageMessage.value =
        "Photo Bukti sudah ada jika ingin mengganti silakan untuk tap/klik tombol Edit";
      isDisabled.value = true;
      const url = `${BASE_URL}uploads/${imagekita.value}`;
      previewImage.value = url;
    } else {
      ImageMessage.value =
        "Silakan untuk memasukan file gambar dengan format jpg, jpeg, png, dan gif.";
    }
  } catch (error) {
    console.log(error);
  }
}

async function unlinkFoto() {
  isDisabled.value = false;
  previewImage.value = "";
  const dataImageku = { url: imagekita.value };
  console.log("Data Image", dataImageku);
  loadingStore.show();

  try {
    const url = `${BASE_URL}warga/delete/fotokk/`;

    const unlinkFile = await api.post(url, dataImageku, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Data Image", dataImageku);
    showToast.value = true;
    toastMessage.value = unlinkFile.data.message;
  } catch (error) {
    showToast.value = true;
    toastMessage.value = error;
  }finally{
    loadingStore.hide();
  }
}

function disableEditFoto() {
  showModal.value = true;
  ModalTitle.value = "Edit/Ganti File KK";
  ModalMessage.value =
    "Apakah anda yakin akan mendelete file sebelum dan mengganti yang baru?";
}

function tutupModal() {
  showModal.value = false;
}
</script>

<style lang="scss" scoped></style>
