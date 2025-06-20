<template>
  <div class="w-[80vw] text-center">
    <div
      class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8"
    >
      <div class="text-center">
        <p class="text-base font-semibold text-indigo-600">TERIMAKASIH</p>
        <h1
          class="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl"
        >
          Anda telah Logout
        </h1>
        <p
          class="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8"
        >
          Anda telah berhasil logout dari aplikasi silakan klik tombol di bawah
          untuk kembali login.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/login"
            class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >Login</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import api from "./axios";
import { onMounted } from "vue";

const dataLogout = ref([]);
const router = useRouter();
const messageLogOut = ref("");

onMounted(async () => {
  await logout();
});

async function logout() {
  try {
    const logOut = await api.post(
      "auth/signout",
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    messageLogOut.value = logOut.data.message;
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("level");
    localStorage.removeItem("email");
    localStorage.removeItem("id_tenant");
  } catch (error) {
    messageLogOut.value = error.message;
  }
}
</script>

<style lang="scss" scoped></style>
