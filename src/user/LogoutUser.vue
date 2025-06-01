<template>
  <div>
    <div>
        <span class="font-Montserrat font-bold text-lg text-lime-400"
      >Anda Telah Logout!</span
    >
    </div><br/><br/>
    <div><span class="text-base text-blue-500 font-Montserrat">{{messageLogOut}}</span></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import api from "./axios";
import { onMounted } from "vue";

const dataLogout = ref([]);
const router = useRouter();
const messageLogOut = ref('');

onMounted(
    async () => {
        await logout();
    }
);

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
  } catch (error) {
    messageLogOut.value = error.message;
  }
}
</script>

<style lang="scss" scoped></style>
