<template>
  <div>
    <div
      class="grid w-[90vw] p-5 md:grid-cols-2 md:gap-4 bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
    >
      <!-- start Card2  -->
      <div id="card2" class="">
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            Penambahan Anggota Keluarga
            <span class="text-blue-600">{{ namaKK }}</span> no:{{ idKK }} dengan
            Alamat :
            <span class="text-purple-600">{{ blokKK }} / {{ noRumahKK }}</span>
          </h3>

          <div class="mt-3">
            <div class="flex rounded-lg shadow-sm">
              <span
                class="inline-flex px-4 items-center min-w-fit rounded-s-md boder border-e-0 border-gray-600 text-sm text-gray-500 bg-slate-200"
                >Nama</span
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
                >NIK</span
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
                id="type"
                ref="type"
                class="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
              >
                <option selected="">Pilih Type Anggota Keluarga</option>
                <option
                  v-if="hasilType"
                  v-for="resultku in hasilType"
                  :key="resultku.id"
                  :value="resultku.id"
                >
                  {{ resultku.nama }}
                </option>
              </select>
              <label
                for="type"
                class="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                >Type Anggota Keluarga</label
              >
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
            Tambah Warga
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
            Daftar Anggota
          </h3>
          <div>
            <div class="relative overflow-x-auto">
              <table
                class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
              >
                <thead
                  class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr>
                    <th scope="col" class="px-6 py-3">No</th>
                    <th scope="col" class="px-6 py-3">Nama</th>
                    <th scope="col" class="px-6 py-3">Type</th>
                    <th scope="col" class="px-6 py-3">NIK</th>
                    <th scope="col" class="px-6 py-3">JK</th>
                    <th scope="col" class="px-6 py-3">Tpt.Lahir</th>
                    <th scope="col" class="px-6 py-3">Tgl.Lahir</th>
                    <th scope="col" class="px-6 py-3">Pekerjaan</th>
                    <th scope="col" class="px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="resultku in hasilWargaPerKK"
                    :key="resultku.id"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                  >
                    <td class="px-6 py-4">{{ resultku.id }}</td>
                    <td
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {{ resultku.nama }}
                    </td>
                    <td class="px-6 py-4">{{ resultku.type.nama }}</td>
                    <td class="px-6 py-4">{{ resultku.nik }}</td>
                    <td class="px-6 py-4">{{ jk(resultku.jenis_kelamin) }}</td>
                    <td class="px-6 py-4">{{ resultku.tempat_lahir }}</td>
                    <td class="px-6 py-4">
                      {{ formatTanggal(resultku.tanggal_lahir) }}
                    </td>
                    <td class="px-6 py-4">{{ resultku.pekerjaan.nama }}</td>
                    <td class="px-6 py-4">
                      {{ resultku.status_warga.status }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700"
          ></div>
        </div>
        <div
          class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700"
        ></div>
      </div>
    </div>
    <ToastCard
      v-if="showToast"
      :message_toast="toastMessage"
      v-on:dismissToast="tutupToast"
    />
    <ModalInputCard
      v-if="showModal"
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
import { ref } from "vue";
import { BASE_URL } from "../base.url.utils";
import DaftarKkWarga from "./DaftarKkWarga.vue";
import TableKkWarga from "./TableKkWarga.vue";
import TabelBlokWarga from "./TabelBlokWarga.vue";
import ModalInputCard from "../components/ModalInputCard.vue";
import { error } from "jquery";
import trailku from "../Trail/trail";
import api from "../user/axios";

export default {
  components: {
    ToastCard,
    DaftarKkWarga,
    TableKkWarga,
    TabelBlokWarga,
    ModalInputCard,
  },
  data() {
    return {
      formValuesBlok: {},
      formValuesRumah: {},
      tableBlokRumah: {},
      hasilStatus: null,
      hasilPekerjaan: null,
      tambahKK: null,
      hasilType: null,
      hasilFindKK: null,
      namaKK: null,
      blokKK: null,
      noRumahKK: null,
      idKK: null,
      idBlok: null,
      hasilWargaPerKK: null,
    };
  },

  setup() {
    const showToast = ref(false);
    const showModal = ref(false);
    const toastMessage = ref("");
    const ModalMessage = ref("");
    const ModalTitle = ref("");
    const blokValue = ref("");
    const noBlok = ref(null);
    return {
      showToast,
      toastMessage,
      showModal,
      ModalMessage,
      ModalTitle,
      blokValue,
      noBlok,
    };
  },

  methods: {
    tutupToast() {
      this.showToast = false;
      window.location.reload();
    },

    formatTanggal(dateString) {
      const tanggal = new Date(dateString);
      const localeDate = tanggal.toLocaleDateString("en-GB");

      return localeDate;
    },

    jk(gender) {
      if (gender == true) {
        return "L";
      } else {
        return "P";
      }
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
      const url = BASE_URL + "warga/add/warga";
      this.formValuesRumah.nama = this.$refs.nama.value;
      this.formValuesRumah.id_kk = parseInt(this.idKK);
      this.formValuesRumah.no_hp = this.$refs.no_hp.value;
      this.formValuesRumah.nik = this.$refs.nik.value;
      this.formValuesRumah.jenis_kelamin = this.$refs.jk.value;
      this.formValuesRumah.id_pekerjaan = parseInt(this.$refs.pekerjaan.value);
      this.formValuesRumah.id_status_warga = parseInt(
        this.$refs.status_warga.value
      );
      this.formValuesRumah.id_type = parseInt(this.$refs.type.value);
      this.formValuesRumah.tanggal_lahir =
        this.$refs.tanggal_lahir.value + " 00:00:00";
      this.formValuesRumah.tempat_lahir = this.$refs.tempat_lahir.value;

      // console.log("Form Data",this.formValuesRumah);

      await api
        .post(url, this.formValuesRumah, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          this.tambahKK = response.data;
          this.showToast = true;
          this.toastMessage = this.tambahKK.message;
          const trail = trailku(this.toastMessage);
          console.log(trail);
          console.log(response.data);
        })
        .catch((error) => {
          this.showToast = true;
          this.toastMessage = this.tambahKK.message;
          console.log(error);
        });
    },

    tutupModal() {
      this.showModal = false;
    },

    async getDaftarType() {
      const url = BASE_URL + "warga/daftar/type";
      await axios
        .get(url)
        .then((response) => {
          this.hasilType = response.data.result;
          console.log("daftar ype anggota: ", this.hasilType);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    bukaModal(idku) {
      this.showModal = true;
      this.ModalTitle = "Update Blok";
      this.ModalMessage =
        "Anda yakin untuk mengganti alamat Blok yang telah terisi? Isikan blok baru di bawah ini dan klik OK jika sudah yakin. Atau klik close atau cancel jika ragu.";
      this.formValuesRumah.id = parseInt(idku);
    },

    async findKK() {
      const uuidkk = this.$route.params.nik;
      const url = BASE_URL + "warga/find/warga/" + uuidkk;

      // console.log('uuid :', uuidkk)

      await axios
        .get(url)
        .then((response) => {
          this.hasilFindKK = response.data.result;
          this.namaKK = this.hasilFindKK.nama;
          this.blokKK = this.hasilFindKK.kk.blok.blok;
          this.noRumahKK = this.hasilFindKK.kk.no_rumah;
          this.idKK = this.hasilFindKK.id_kk;
          this.idBlok = this.hasilFindKK.kk.blok.id;

          console.log(
            "hasil find warga: ",
            this.hasilFindKK + " idkk:" + this.idKK
          );
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async getWargaperKK() {
      const uuidkk = this.$route.params.kk;
      const url = BASE_URL + "warga/list/warga/" + uuidkk;
      await axios
        .get(url)
        .then((response) => {
          this.hasilWargaPerKK = response.data.result;
          console.log(" Hasil warga per KK", this.hasilWargaPerKK);
          console.log("id_kk", this.hasilWargaPerKK[0].kk.id);
          this.idKK = this.hasilWargaPerKK[0].kk.id;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getStatusWarga();
    this.getPekerjaan();
    this.getDaftarType();

    this.getWargaperKK();
    this.findKK();
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
