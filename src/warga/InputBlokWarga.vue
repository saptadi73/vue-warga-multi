<template>
  <div>
    <div
      class="grid w-[90vw] p-5 md:grid-cols-2 md:gap-4 bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
    >
      <!-- start Card  -->
      <div id="card1" class="">
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            Pengisian Blok/Nomor baru
          </h3>
          <div>
            <div>
              <div class="sm:flex rounded-lg shadow-sm">
                <span
                  class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400"
                  >Isi Blok/No.Blok</span
                >
                <input
                  id="blok"
                  v-model="formValuesBlok.blok"
                  type="text"
                  class="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                />
              </div>
            </div>
          </div>
          <button
            :onclick="addBlok"
            class="mt-5 bg-purple-500 text-base font-semibold rounded-lg text-white decoration-2 hover:text-purple-200 hover:underline focus:underline focus:outline-none p-2 focus:text-purple-300 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            Simpan
          </button>
        </div>
        <table class="border-separate border-spacing-1 border border-slate-500 w-[30vw] mt-10">
          <thead>
            <tr class="bg-slate-200">
              <th class="text-start">No</th>
              <th class="text-start">Blok</th>
              <th class="text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(blok, index) in hasilBlok" :key="index" class="even:bg-slate-100">
              <td class="justify-start">{{ index + 1 }}</td>
              <td>{{blok.blok}}</td>
              <td>Edit</td>
            </tr>
          </tbody>
          </table>
        <div
          class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700"
        >
          <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
            Last updated 5 mins ago
          </p>
        </div>
      </div>

      <!-- start Card2  -->
      <div id="card2" class="">
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            Pengisian No. Rumah Baru
          </h3>
          <div class="mt-1">
            <div class="relative">
              <select
              id="list_blok"
                ref="list_blok"
                class="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
              >
                <option selected="">Pilih Blok/Nomor</option>
                <option
                  v-if="hasilBlok"
                  v-for="resultku in hasilBlok"
                  :key="resultku.id"
                  :value="resultku.id"
                >
                  {{ resultku.blok }}
                </option>
              </select>
              <label
                for="list_blok"
                class="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                >Blok/No.</label
              >
            </div>
          </div>
          <div class="mt-3">
            <div class="flex rounded-lg shadow-sm">
              <span
                class="inline-flex px-4 items-center min-w-fit rounded-s-md boder border-e-0 border-gray-600 text-sm text-gray-500 bg-slate-200"
                >Nomor.Rumah</span
              >
              <input
                ref="no_rumah"
                type="number"
                class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              />
            </div>
          </div>
          <div class="mt-3">
            <div class="flex rounded-lg shadow-sm">
              <span
                class="inline-flex px-4 items-center min-w-fit rounded-s-md boder border-e-0 border-gray-600 text-sm text-gray-500 bg-slate-200"
                >No.Kartu Keluarga</span
              >
              <input
                ref="id_kk"
                type="text"
                class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              />
            </div>
          </div>
          <div class="mt-3">
            <div class="flex rounded-lg shadow-sm">
              <span
                class="inline-flex px-4 items-center min-w-fit rounded-s-md boder border-e-0 border-gray-600 text-sm text-gray-500 bg-slate-200"
                >Nama Kepala Keluarga</span
              >
              <input
                ref="nama"
                type="text"
                class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              />
            </div>
          </div>
          <div class="mt-3">
            <div class="flex rounded-lg shadow-sm">
              <span
                class="inline-flex px-4 items-center min-w-fit rounded-s-md boder border-e-0 border-gray-600 text-sm text-gray-500 bg-slate-200"
                >NIK Kepala Keluarga</span
              >
              <input
                ref="nik"
                type="text"
                class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              />
            </div>
          </div>
          <div class="mt-1">
            <div class="relative">
              <select
              id="jk"
                ref="jk"
                class="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
              >
                <option selected="">Pilih Jenis Kelamin</option>
                <option value="1">Pria</option>
                <option value="0">Wanita</option>
              </select>
              <label
                for="jk"
                class="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                >Jenis Kelamin</label
              >
            </div>
          </div>
          <div class="mt-3">
            <div class="flex rounded-lg shadow-sm">
              <span
                class="inline-flex px-4 items-center min-w-fit rounded-s-md boder border-e-0 border-gray-600 text-sm text-gray-500 bg-slate-200"
                >Tempat Lahir</span
              >
              <input
                ref="tempat_lahir"
                type="text"
                class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              />
            </div>
          </div>
          <div class="mt-3">
            <div class="flex rounded-lg shadow-sm">
              <span
                class="inline-flex px-4 items-center min-w-fit rounded-s-md boder border-e-0 border-gray-600 text-sm text-gray-500 bg-slate-200"
                >Tanggal Lahir</span
              >
              <input
                ref="tanggal_lahir"
                type="date"
                class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              />
            </div>
          </div>
          <div class="mt-1">
            <div class="relative">
              <select
              id="pekerjaan"
                ref="pekerjaan"
                class="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
              >
                <option selected="">Pilih Pekerjaan</option>
                <option
                  v-if="hasilPekerjaan"
                  v-for="resultku in hasilPekerjaan"
                  :key="resultku.id"
                  :value="resultku.id"
                >
                  {{ resultku.nama }}
                </option>
              </select>
              <label
                for="pekerjaan"
                class="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                >Pekerjaan</label
              >
            </div>
          </div>
          <div class="mt-3">
            <div class="flex rounded-lg shadow-sm">
              <span
                class="inline-flex px-4 items-center min-w-fit rounded-s-md boder border-e-0 border-gray-600 text-sm text-gray-500 bg-slate-200"
                >No.HP (WA aktif)</span
              >
              <input
                ref="no_hp"
                type="text"
                class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              />
            </div>
          </div>
          <div class="mt-1">
            <div class="relative">
              <select
              id="status_warga"
                ref="status_warga"
                class="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
              >
                <option selected="">Pilih Status Kewargaan</option>
                <option
                  v-if="hasilStatus"
                  v-for="resultku in hasilStatus"
                  :key="resultku.id"
                  :value="resultku.id"
                >
                  {{ resultku.status }}
                </option>
              </select>
              <label
                for="status_warga"
                class="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                >Status Warga</label
              >
            </div>
          </div>
          <button
            :onclick="addWarga"
            class="mt-5 bg-purple-500 text-base font-semibold rounded-lg text-white decoration-2 hover:text-purple-200 hover:underline focus:underline focus:outline-none p-2 focus:text-purple-300 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            Simpan No.Rumah
          </button>
        </div>
        <div
          class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700"
        >
          <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
            Last updated 5 mins ago
          </p>
        </div>
      </div>
    </div>

    <div>
      <div
        class="flex p-5 flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
      >
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            Card title
          </h3>
          <div>
            <TabelBlokWarga/>
          </div>
          <div
            class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700"
          >
            <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
              {{ blokValue }}
            </p>
          </div>
        </div>
        <div
          class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700"
        >
          <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
            {{ blokValue }}
          </p>
        </div>
      </div>
    </div>
    <ToastCard
      v-if="showToast"
      :message_toast="toastMessage"
      v-on:dismissToast="tutupToast"
    />
    <ModalInputCard
    :title="ModalTitle"
    :message_modal="ModalMessage"
    :modelValue="blokValue"
    v-on:cancelButton="tutupModal"
    v-on:closeButton="tutupModal"
    v-on:okeButton="updateBlok"
    v-model:modelValue="blokValue"
    />
  </div>
</template>

<script>
import ToastCard from "../components/ToastCard.vue";
import axios from "axios";
import { onMounted } from "vue";
import { ref } from "vue";
import { BASE_URL } from "../base.url.utils";
import { error } from "jquery";
import DaftarKkWarga from "./DaftarKkWarga.vue";
import TableKkWarga from "./TableKkWarga.vue";
import TabelBlokWarga from "./TabelBlokWarga.vue";
import ModalInputCard from "../components/ModalInputCard.vue";

export default {
  components: {
    ToastCard,
    DaftarKkWarga,
    TableKkWarga,
    TabelBlokWarga,
    ModalInputCard
  },
  data() {
    return {
      hasilBlok: null,
      tambahBlok: null,
      formValuesBlok: {},
      formValuesRumah: {},
      tableBlokRumah: {},
      hasilStatus: null,
      hasilPekerjaan: null,
      tambahKK: null,
    };
  },

  setup() {
    const showToast = ref(false);
    const showModal = ref(false);
    const toastMessage = ref("");
    const ModalMessage = ref("");
    const ModalTitle = ref("");
    const blokValue=ref("");
    return {
      showToast,
      toastMessage,
      showModal,
      ModalMessage,
      ModalTitle,
      blokValue
    };
  },

  methods: {
    async addBlok() {
      const url = BASE_URL + "warga/add/blok";
      // console.log(this.formValuesBlok);
      await axios
        .post(url, this.formValuesBlok, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          this.tambahBlok = response.data.result;
          this.showToast = true;
          this.toastMessage = "Blok Berhasil Ditambahkan";
          console.log("Tambah Blok Rumah:", this.tambahBlok);
          this.daftarBlok();
        })
        .catch((error) => {
          console.error("Error:", error);
          this.showToast = true;
          this.toastMessage = error;
        });
    },

    async daftarBlok() {
      const url = BASE_URL + "warga/daftar/blok";

      await axios
        .get(url)
        .then((response) => {
          this.hasilBlok = response.data.result;
          console.log("Daftar Blok Rumah:", this.hasilBlok);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    tutupToast() {
      this.showToast = false;
    },

    async getStatusWarga() {
      const url = BASE_URL + "warga/list/status";
      axios
        .get(url)
        .then((response) => {
          this.hasilStatus = response.data.result;
          console.log("Status Warga:", this.hasilStatus);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },

    async getPekerjaan() {
      const url = BASE_URL + "warga/list/pekerjaan";
      axios
        .get(url)
        .then((response) => {
          this.hasilPekerjaan = response.data.result;
          console.log("Pekerjaan Warga:", this.hasilPekerjaan);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async addWarga() {
      const url = BASE_URL + "warga/add/kk";
      this.formValuesRumah.id_blok = parseInt(this.$refs.list_blok.value);
      this.formValuesRumah.nama = this.$refs.nama.value;
      this.formValuesRumah.no_rumah = parseInt(this.$refs.no_rumah.value);
      this.formValuesRumah.no_kk = this.$refs.id_kk.value;
      this.formValuesRumah.no_hp = this.$refs.no_hp.value;
      this.formValuesRumah.nik = this.$refs.nik.value;
      this.formValuesRumah.jenis_kelamin = this.$refs.jk.value;
      this.formValuesRumah.id_pekerjaan = parseInt(this.$refs.pekerjaan.value);
      this.formValuesRumah.id_status_warga = parseInt(
        this.$refs.status_warga.value
      );
      this.formValuesRumah.tanggal_lahir =
        this.$refs.tanggal_lahir.value + " 00:00:00";
      this.formValuesRumah.tempat_lahir = this.$refs.tempat_lahir.value;

      // console.log("Form Data",this.formValuesRumah);

      await axios
        .post(url, this.formValuesRumah, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          this.tambahKK = response.data.result;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    tutupModal() {},
    updateBlok() {},
    
  },
  created() {
    this.daftarBlok();
    this.getStatusWarga();
    this.getPekerjaan();
  },
};
</script>

<style lang="css">
.dt-layout-row:has(.dt-search),
.dt-layout-row:has(.dt-length),
.dt-layout-row:has(.dt-paging) {
  display: none !important;
}
</style>
