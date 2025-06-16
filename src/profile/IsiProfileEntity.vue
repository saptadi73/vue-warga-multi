<template>
  <div>
    <h3
      class="mx-auto md:text-xl text-center font-bold font-Roboto mt-10 text-blue-600 p-3 bg-gradient-to-r from-[#DAF7A6] to-yellow-50 rounded-lg"
    >
      Pengisian Data Profile Wilayah
    </h3>
    <div
      class="w-[85vw] grid p-5 md:grid-cols-2 md:gap-4 bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
    >
      <!-- start Card  -->
      <div id="card1" class="md:w-[40vw] w-full">
        <div class="p-4 md:p-5">
          <button
            v-if="hasilCekProfile"
            class="p-2 bg-slate-700 text-white rounded-md shadow-sm"
            @click="BukaClear"
          >
            Clear Profile
          </button>
          <div class="mt-10">
            <div class="relative">
              <select
                v-if="tombolPilih"
                :onclick="getKabupaten"
                id="provinsi"
                class="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
              >
                <option selected="">Pilih Provinsi</option>
                <option
                  v-if="provinsi"
                  v-for="(resultku, index) in provinsi.result"
                  :key="resultku.kode"
                  :value="resultku.kode"
                >
                  {{ resultku.wilayah }}
                </option>
              </select>
              <label
                for="provinsi"
                class="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                >Provinsi</label
              >
            </div>
          </div>
          <div class="mt-6">
            <div class="relative">
              <select
                :onclick="getKecamatan"
                id="kabupaten"
                class="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
              >
                <option selected="">Pilih Kabupaten/Kota</option>
                <option
                  v-if="kabupaten"
                  v-for="(resultku, index) in kabupaten.result"
                  :key="resultku.kode"
                  :value="resultku.kode"
                >
                  {{ resultku.wilayah }}
                </option>
              </select>
              <label
                for="kabupaten"
                class="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                >Kabupaten</label
              >
            </div>
          </div>

          <div class="mt-6">
            <div class="relative">
              <select
                :onclick="getDesa"
                id="kecamatan"
                class="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
              >
                <option selected="">Pilih Kecamatan</option>
                <option
                  v-if="kecamatan"
                  v-for="(resultku, index) in kecamatan.result"
                  :key="resultku.kode"
                  :value="resultku.kode"
                >
                  {{ resultku.wilayah }}
                </option>
              </select>
              <label
                for="kecamatan"
                class="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                >Kecamatan</label
              >
            </div>
          </div>
        </div>
        <div
          class="mt-5 bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5"
        >
          <p class="mt-1 text-sm text-gray-500">
            WIlayah berdasarkan data resmi Kementerian Dalam Negeri RI
          </p>
        </div>
      </div>

      <!-- start Card  -->
      <div id="card2" class="md:w-[40vw] w-full">
        <div class="p-4 md:p-5">
          <div class="mt-10">
            <div class="relative">
              <select
                id="desa"
                class="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
              >
                <option selected="">Pilih Desa/Kelurahan</option>
                <option
                  v-if="desa"
                  v-for="(resultku, index) in desa.result"
                  :key="resultku.kode"
                  :value="resultku.kode"
                >
                  {{ resultku.wilayah }}
                </option>
              </select>
              <label
                class="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                >Desa/Kelurahan</label
              >
            </div>
          </div>
          <div class="mt-3">
            <div class="flex rounded-lg shadow-sm">
              <span
                class="inline-flex px-4 items-center min-w-fit rounded-s-md boder border-e-0 border-gray-600 text-sm text-gray-500 bg-slate-200"
                >Dusun/Perumahan</span
              >
              <input
                v-if="desa"
                id="dusun"
                type="text"
                class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              />
            </div>
          </div>
          <div class="mt-3">
            <div class="flex items-center">
              <div class="flex rounded-lg shadow-sm">
                <span
                  class="inline-flex px-4 items-center min-w-fit rounded-s-md boder border-e-0 border-gray-600 text-sm text-gray-500 bg-slate-200"
                  >No. RW</span
                >
                <input
                  v-if="desa"
                  id="rw"
                  type="number"
                  class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                />
              </div>
              <div class="flex rounded-lg shadow-sm">
                <span
                  class="inline-flex px-4 items-center min-w-fit boder border-e-0 border-gray-600 text-sm text-gray-500 bg-slate-200"
                  >No. RT</span
                >
                <input
                  v-if="desa"
                  id="rt"
                  type="number"
                  class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                />
              </div>
            </div>
          </div>
          <button
            :onclick="createProfile"
            class="mt-5 bg-blue-500 text-base font-semibold rounded-lg text-white decoration-2 hover:text-blue-200 hover:underline focus:underline focus:outline-none p-2 focus:text-blue-300 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            Simpan Wilayah
          </button>
        </div>
        <div
          class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700"
        >
          <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
            Setiap Wilayah terdaftar dengan nomor unik khusus
          </p>
        </div>
      </div>
    </div>
    <ToastCard
      v-if="showToast"
      :message_toast="message_toastku"
      v-on:dismissToast="tutupToast"
    />
    <ModalCard
      v-if="showModal"
      :title="ModalTitle"
      :message_modal="ModalMessage"
      v-on:okeButton="clearProfile"
      v-on:cancelButton="tutupModal"
      v-on:closeButton="tutupModal"
    />
  </div>
</template>

<script>
import { BASE_URL } from "../base.url.utils";
import axios from "axios";
import ToastCard from "../components/ToastCard.vue";
import { ref } from "vue";
import ModalCard from "../components/ModalCard.vue";
import { error } from "jquery";
import trailku from "../trail/trail";
import api from "../user/axios";


export default {
  components: {
    ToastCard,
    ModalCard,
  },
  data() {
    return {
      message_toastku: null,
      provinsi: null,
      kode_provinsi: null,
      kabupaten: null,
      kode_kabupaten: null,
      kecamatan: null,
      kode_kecamatan: null,
      desa: null,
      kode_desa: null,
      formValues: {},
      isiProfile: null,
      hasilCariProfile: null,
      showModal: false,
      ModalTitle: null,
      ModalMessage: null,
      hasilCekProfile: false,
      tombolPilih: true,
    };
  },
  methods: {
    async getProvinsi() {
      const url = BASE_URL + "profile/provinsi";
      await api.get(url).then((response) => {
        this.provinsi = response.data;
        console.log(this.provinsi);
      });
    },

    tutupModal() {
      this.showModal = false;
    },

    async getKabupaten() {
      const url = BASE_URL + "profile/kabupaten";
      this.kode_provinsi = document.getElementById("provinsi").value;
      console.log(this.kode_provinsi);
      this.formValues.kode = this.kode_provinsi;
      await api
        .post(url, this.formValues, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          this.kabupaten = response.data;
          console.log(this.kabupaten);
        });
    },

    async getKecamatan() {
      const url = BASE_URL + "profile/kecamatan";
      this.kode_kabupaten = document.getElementById("kabupaten").value;
      console.log(this.kode_kabupaten);
      this.formValues.kode = this.kode_kabupaten;
      await api
        .post(url, this.formValues, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          this.kecamatan = response.data;
          console.log(this.kecamatan);
        });
    },

    async getDesa() {
      const url = BASE_URL + "profile/desa";
      this.kode_kecamatan = document.getElementById("kecamatan").value;
      console.log(this.kode_kecamatan);
      this.formValues.kode = this.kode_kecamatan;
      await api
        .post(url, this.formValues, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          this.desa = response.data;
          console.log(this.desa);
        });
    },

    async createProfile() {
      const url = BASE_URL + "profile/create";

      const pilProvinsi = document.getElementById("provinsi");

      this.formValues.provinsi =
        pilProvinsi.options[pilProvinsi.selectedIndex].text;

      const pilKabupaten = document.getElementById("kabupaten");
      this.formValues.kabupaten =
        pilKabupaten.options[pilKabupaten.selectedIndex].text;

      const pilKecamatan = document.getElementById("kecamatan");
      this.formValues.kecamatan =
        pilKecamatan.options[pilKecamatan.selectedIndex].text;
      const pilDesa = document.getElementById("desa");
      this.formValues.desa = pilDesa.options[pilDesa.selectedIndex].text;

      if (
        document.getElementById("dusun").value &&
        document.getElementById("rt").value &&
        document.getElementById("rw").value
      ) {
        this.formValues.kode_wilayah = document.getElementById("desa").value;
        this.formValues.dusun = document.getElementById("dusun").value;
        this.formValues.rt = parseInt(document.getElementById("rt").value);
        this.formValues.rw = parseInt(document.getElementById("rw").value);
        await api
          .post(url, this.formValues, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            this.isiProfile = response.data;
            console.log(this.isiProfile);
            this.showToast = true;
            this.message_toastku = this.isiProfile.message;
            const trail = trailku(this.message_toastku);
            console.log(trail);
          })
          .catch((error) => {
            console.log(error);
            this.showToast = true;
            this.message_toastku = error;
          });
      } else {
        console.log("payah");
        this.showToast = true;
        this.message_toastku = error;
      }
    },

    async getProfile() {
      try {
        const url = BASE_URL + "profile/cari";

        await axios
          .get(url)
          .then((response) => {
            this.hasilCariProfile = response.data.result;
            console.log("hasilCek Profile: ", this.hasilCariProfile);

            if (this.hasilCariProfile) {
              this.showToast = true;
              this.message_toastku =
                "Profile telah terisi, untuk mengganti data silakan clear data profile terlebih dahulu";
              this.hasilCekProfile = true;
              this.tombolPilih = false;
            }
          })
          .error((error) => {
            console.log(error);
            (this.showToast = true), (this.message_toastku = error);
          });
      } catch (error) {}
    },

    async clearProfile() {
      try {
        const url = BASE_URL + "profile/hapus";
        await axios
          .get(url)
          .then((response) => {
            this.showModal = false;
            this.showToast = true;
            this.message_toastku = response.data.message;
            const trail = trailku(this.message_toastku);
            console.log(trail);
            this.tombolPilih = true;
          })
          .error((error) => {
            this.showToast = true;
            this.message_toastku = error;
          });
      } catch (error) {
        this.showToast = true;
        this.message_toastku = error;
      }
    },

    tutupToast() {
      this.showToast = false;
      if (this.isiProfile.status == "ok") {
        this.$router.push("/dashboard");
      }
    },

    BukaClear() {
      this.showModal = true;
      this.ModalMessage = "Anda yakin akan menghapus data profile?";
      this.ModalTitle = "hapus Data Profile";
    },
  },

  created() {
    this.getProvinsi();
    this.getProfile();
  },
  setup() {
    const showToast = ref(false);
    return {
      showToast,
    };
  },
};
</script>

<style lang="scss" scoped></style>
