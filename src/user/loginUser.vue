<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <a
        href="#"
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img class="w-8 h-8 mr-2" src="../assets/logo_rukun.png" alt="logo" />
        <span class="font-bold text-[#ca13c5] font-Poppins">WARGA</span
        ><span class="font-semibold text-[#2b94f1] font-Roboto"
          >RTRW</span
        ><span class="text-base font-bold font-Poppins text-[#BDB76B}">.com</span>
      </a>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Sign in
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="login">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Email</label
              >
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Password</label
              >
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <button
              type="submit"
              class="w-full text-white bg-blue-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
      <ToastCard
        v-if="showToast"
        :message_toast="toastMessage"
        v-on:dismissToast="tutupToast"
      />
    </div>
  </section>
</template>

<script setup>
import api from "./axios";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import router from "../router";
import ToastCard from "../components/ToastCard.vue";

const showToast = ref(false);
const toastMessage = ref("");

async function login() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dataLogin = { email: email, password: password };
  const response = await api.post("auth/signin", dataLogin, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  // console.log(response.data.data.level.nama);
  const { access_token, refresh_token } = response.data;
  localStorage.setItem("access_token", access_token);
  localStorage.setItem("refresh_token", refresh_token);
  localStorage.setItem("level", response.data.data.level.nama);
  localStorage.setItem("email", email);
  localStorage.setItem("id_tenant", response.data.data.tenant.id);

  if (response.data.status == "ok") {
    router.push("/dashboard");
  } else {
    showToast.value = true;
    toastMessage.value = response.data.message;
  }
}

function tutupToast() {
  showToast.value = false;
  window.location.reload();
}
</script>

<style lang="scss" scoped></style>
