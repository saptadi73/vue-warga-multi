<template>
  <div>
    <ModalCard
      :message_modal="messageModal"
      :title="titleModal"
      v-on:cancelButton="tutupModal"
      v-on:closeButton="tutupModal"
      v-on:okeButton="delRumah"
      v-if="showModal"
    />
    <ToastCard
      v-if="showToast"
      :message_toast="toastMessage"
      v-on:dismissToast="tutupToast"
    />
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { BASE_URL } from "../base.url.utils";
import ModalCard from "../components/ModalCard.vue";
import ToastCard from "../components/ToastCard.vue";
import { error } from "jquery";

export default {
  components: {
    ModalCard,
    ToastCard,
  },
  data() {
    return {
      titleModal: "",
      messageModal: "",
      hasilFindKK: null,
      hasilDelKK: null,
      hasilDelWargaKK: null,
      namaKK: "",
      namaBlok: "",
      noRumah: "",
      id_kk: "",
    };
  },
  setup() {
    const showModal = ref(false);
    const messageModal = ref("");
    const titleModal = ref("");
    const toastMessage = ref("");
    const showToast = ref(false);
    return {
      showModal,
      messageModal,
      titleModal,
      toastMessage,
      showToast,
    };
  },
  methods: {
    async delRumah() {
      const uuidkk = this.$route.params.kk;
      const url = BASE_URL + "warga/delete/rumah/" + uuidkk;

      const url2 = BASE_URL + "warga/delete/wargakk/" + this.id_kk;

      await axios
        .get(url2)
        .then((response) => {
          this.hasilDelKK = response.data;

          axios.get(url).then((response) => {
            this.hasilDelWargaKK = response.data;
            console.log('hasil Del All Warga KK',this.hasilDelWargaKK)
            this.showToast = true;
            this.toastMessage = this.hasilDelKK.message + this.hasilDelWargaKK;
            this.$router.push("/dashboard");
          })
          .catch((error) => {
            console.log(error);
            this.showToast = true;
            this.toastMessage = error;
          });
        })
        .catch((error) => {
            console.log(error);
            this.showToast = true;
            this.toastMessage = error;
        });
    },

    tutupModal() {
      this.showModal = false;
      this.$router.push("/dashboard");
    },

    tutupToast() {
      this.showToast = false;
      this.$router.push("/dashboard");
    },
    async findKK() {
      const uuidkk = this.$route.params.kk;
      const url = BASE_URL + "warga/find/kk/" + uuidkk;

      await axios
        .get(url)
        .then((response) => {
          this.hasilFindKK = response.data.result;
          console.log(this.hasilFindKK);
          this.namaKK = this.hasilFindKK.warga[0].nama;
          this.id_kk = this.hasilFindKK.id;
          this.namaBlok = this.hasilFindKK.blok.blok;
          this.noRumah = this.hasilFindKK.no_rumah;
          this.showModal = true;
          this.messageModal =
            "Apakah anda yakin akan menghapus data rumah Bapak/Ibu " +
            this.namaKK +
            " ini? Dengan alamat " +
            this.namaBlok +
            " No " +
            this.noRumah;
          this.titleModal = "Penghapusan data Rumah Keluarga";
        })
        .catch((error) => {
          console.log(error);
          this.showModal = true;
          this.messageModal = error;
        });
    },
  },
  created() {
    this.findKK();
  },
};
</script>

<style lang="scss" scoped></style>
