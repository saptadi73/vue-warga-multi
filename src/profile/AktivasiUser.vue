<template>
  <div>
    <section class="bg-white dark:bg-gray-900 w-[80vw]">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          <h1
            class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-600"
          >
            {{ status_code }}
          </h1>
          <p
            class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl"
          >
            {{message}}
          </p>
          <p class="mb-4 text-lg font-light text-gray-500">
            {{next_message}}
          </p>
          <a
            href="/dashboard"
            class="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >Back to Homepage</a
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import { BASE_URL } from "../base.url.utils";
import { useRoute } from "vue-router";

const route = useRoute();

const message = ref("");
const status_code = ref("");
const next_message = ref("");

async function activateUser() {
  try {
    const uuid = route.params.id;
    const response = await axios.get(`${BASE_URL}user/aktif/${uuid}`);
    if (response.data.status == "ok") {
        status_code.value = response.status;
      message.value = "Selamat User berhasil diaktifkan";
      next_message.value = "Silahkan kembali ke halaman utama";
    } else {
      status_code.value = response.status;
      message.value = "Gagal Aktifkan User karena " + response.data.message;
      next_message.value = "Silahkan kembali ke halaman Registrasi untuk mengulangi";
    }
  } catch (error) {
    status_code.value = error.message;
    message.value = "Gagal Aktifkan User karena error: " + error.message;
    next_message.value = "Silahkan kembali ke halaman Registrasi untuk mengulangi karena error: " + error.message;
  }
}

onMounted(() => {
  activateUser();
});
</script>

<style lang="scss" scoped></style>
