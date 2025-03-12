<template>
    <div>
      <div
        class="grid p-5 md:grid-cols-2 md:gap-4 bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
      >
        <!-- start Card  -->
        <div id="card1" class="w-[40vw]">
          <div class="p-4 md:p-5">
            <h3 class="text-lg font-bold text-gray-800 dark:text-white">
              Upload Foto Kepala Keluarga
            </h3>
          </div>
          <form v-on:submit.prevent>
            <div>
              <div class="w-full space-y-3">
                <span>Keterangan File</span>
                <input
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
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                :onchange="pickFile"
                type="file"
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
      </div>
  
      <ToastCard
        v-if="showToast"
        :message_toast="toastMessage"
        v-on:dismissToast="tutupToast"
      />
    </div>
  </template>
  
  <script setup>
  import axios from "axios";
  import { onMounted, computed } from "vue";
  import { ref } from "vue";
  import { BASE_URL } from "../base.url.utils";
  import router from "../router";
  import { useRoute } from "vue-router";
  import ToastCard from "../components/ToastCard.vue";
  
  const hasilUpload = ref([]);
  const formValues = ref({});
  const previewImage = ref(null);
  const file = ref(null);
  const fileInput = ref(null);
  const namaGambar = ref(null);
  const showToast = ref(false);
  const toastMessage = ref(null);
  const route = useRoute();
  
  function pickFile(event) {
    console.log(event.target.files[0]);
    file.value = event.target.files[0];
    namaGambar.value = event.target.files[0].name;
    previewImage.value = URL.createObjectURL(event.target.files[0]);
  }
  
  async function uploadFile() {
    const idAnggaran = route.params.id;
    const url = `${BASE_URL}warga/fotokk`;
    const keterangan = document.getElementById("keterangan").value;
    const formDataku = new FormData();
    formDataku.append("file", file.value);
    formDataku.append("id_kk", idAnggaran);
    formDataku.append("keterangan", keterangan);
    formDataku.append("nama", "bukti foto KK");
    // consoleku.log(formDataku);
  
    try {
      const uploadBukti = await axios.post(url, formDataku, {
        Headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      hasilUpload.value = uploadBukti.data.result;
      showToast.value = true;
      toastMessage.value = uploadBukti.data.message;
    } catch (error) {
      showToast.value = true;
      toastMessage.value = error;
    }
  }
  
  function sekarangTable() {
    const dateMinus3Months = new Date();
    dateMinus3Months.setMonth(currentDate.getMonth() - 3);
  
    const dateNow = new Date();
  }
  function tutupToast() {
    showToast.value = false;
    router.push("/warga/daftar/kk");
  }
  </script>
  
  <style lang="scss" scoped></style>
  