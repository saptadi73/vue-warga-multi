<template>
  <div>
    <div class="p-5 w-[85vw] bg-white border shadow-sm rounded-xl">
      <div class="p-4 md:p-5">
        <h3
          class="text-lg font-bold bg-gradient-to-r from-gray-500 to-slate-400 p-5 text-white rounded-t-lg"
        >
          Isi Data Polygon
        </h3>
        <div class="mt-8 md:w-[40vw]">
          <div class="flex items-center">
            <div class="flex rounded-lg shadow-sm">
              <span
                class="inline-flex px-4 items-center min-w-fit rounded-s-md boder border-e-0 border-gray-600 text-sm text-gray-500 bg-slate-200"
                >Latitude</span
              >
              <input
                v-model="formValues.latitude"
                id="latitude"
                type="number"
                class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              />
            </div>
            <div class="flex rounded-lg shadow-sm">
              <span
                class="inline-flex px-4 items-center min-w-fit boder border-e-0 border-gray-600 text-sm text-gray-500 bg-slate-200"
                >Longitude</span
              >
              <input
                v-model="formValues.longitude"
                id="longitude"
                type="number"
                class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              />
              
              <span
              :onclick="getLocation"
                class="material-icons shadow-sm p-2 cursor-pointer text-white bg-slate-700 rounded-e-lg"
                >location_on</span
              >
              <i :onclick="cekMap" class="lni lni-check-square-2 text-lg p-2 text-center bg-slate-100 shadow-sm"></i>
            </div>
          </div>
        </div>
        <button
          class="mt-5 bg-blue-500 text-base font-semibold rounded-lg text-white decoration-2 hover:text-blue-200 hover:underline focus:underline focus:outline-none p-2 focus:text-blue-300 disabled:opacity-50 disabled:pointer-events-none"
          :onclick="tambahTitikPolygon"
        >
          Simpan GPS Coordinates
        </button>
      </div>
      <div
        class="bg-yellow-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700"
      >
        <p class="mt-1 text-sm text-red-500 dark:text-neutral-500">
          Pengisian data polygon berapa titik-titik GPS pada batas-batas wilayah, harus secara berurutan, dan titik akhir sama kan dengan titik awal.
        </p>
      </div>
    </div>

    <div class="p-5 bg-white border shadow-sm rounded-xl">
      <div class="p-4 md:p-5">
        <h3 class="text-lg font-bold text-gray-800 dark:text-white">
          Peta Polygon
        </h3>
        <div>
          <button v-if="showClear" :onclick="confirmDeletePolygon" ref="clearData" class="p-2 bg-slate-600 text-yellow-200 rounded-md shadow-md">Clear Data Polygon</button>
          <div
            ref="mapContainer"
            class="w-[400px] h-[400px] md:w-[900px] md:h-[500px] text-center mt-10 z-50"
          ></div>
        </div>
      </div>
      <div
        class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700"
      >
        <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
          Gambar hasil akhir polygon berupa bentuk polygon yang mendekati
          wilayah yang ingin ditunjukkan
        </p>
      </div>
    </div>
    <ToastCard
      v-if="showToast"
      :message_toast="message_toastku"
      v-on:dismissToast="tutupToast"
    />
    <ModalCard
    :message_modal="messageModal"
    :title="titleModal"
    v-on:cancelButton="tutupModal"
    v-on:closeButton="tutupModal"
    v-on:okeButton="clearDataPolygon"
    v-if="showModal"
    />
  </div>
</template>

<script>
import { BASE_URL } from "../base.url.utils";
import axios from "axios";
import ToastCard from "../components/ToastCard.vue";
import { ref, onMounted } from "vue";
import L, { Draggable } from "leaflet";
import { error, event } from "jquery";
import { polygon } from "leaflet";
import ModalCard from "../components/ModalCard.vue";

export default {
  components: {
    ToastCard,
    ModalCard
  },
  data() {
    return {
      formValues: {},
      message_toastku: null,
      getLocLat: null,
      getLocLong: null,
      tambahPolygon: null,
      hapusDataPolygon: null,
      dataPolygon: null,
      titleModal: null,
      messageModal: null,
    };
  },

  methods: {

    getLocation() {
      
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition((position) => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.formValues.longitude = this.lng;
          this.formValues.latitude = this.lat;
          this.map.setView([this.lat, this.lng], 50);
          L.marker([this.lat, this.lng], { draggable: true })
            .addTo(this.map)
            .on("dragend", (event) => {
              console.log(event);
            });
        });

        this.showToast=true,
        this.message_toastku="Lokasi otomatis menunjuk pada aktual lokasi Anda sekarang";
      }
    },

    cekMap(){
      this.map.setView([this.formValues.latitude, this.formValues.longitude], 50);
          L.marker([this.formValues.latitude, this.formValues.longitude], { draggable: true })
            .addTo(this.map)
            .on("dragend", (event) => {
              console.log(event);
            });
            this.showToast=true;
            this.message_toastku="Cek Lokasi yang diisi di Map";

    },

    createPolygon() {
      // create a red polygon from an array of LatLng points
      this.latlngs = [
        [-6.32358, 107.0206],
        [-6.32366, 107.02094],
        [-6.32389, 107.02088],
        [-6.32381, 107.02054],
      ];

      this.polygonku = L.polygon(this.latlngs, { color: "red" }).addTo(
        this.map
      );

      // zoom the map to the polygon
      this.map.fitBounds(this.polygonku.getBounds());
    },

    async tambahTitikPolygon() {
      // console.log('joss');
      const url = BASE_URL + "profile/new/polygon";
      await axios.post(url, this.formValues, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            this.tambahPolygon = response.data.result;
            console.log(response.data.result);
            this.showToast = true;
            this.message_toastku = "Data Polygon berhasil ditambahkan, Lanjutkan dengan titik selanjutnya jika sudah cukup cek Peta Polygon di Dashboard";
          })
          .catch((error) => {
            this.showToast=true;
            this.message_toastku=error;
          })
    },

    async clearDataPolygon() {
      const url = BASE_URL + "profile/clear";
      axios.get(url)
      .then((response) => {
        this.hapusDataPolygon = response.data.result;
        this.showToast=true;
        this.message_toastku="Data Polygon berhasil dihapus, Masukkan data baru dari awal";
        console.log(this.hapusDataPolygon);
      })
      .catch((error) => {
        this.showToast=true;
        this.message_toastku=error;

      })
    },

    async cekDataPolygon() {
      const url = BASE_URL + "profile/polygon";
        const response = await axios.get(url);
        this.dataPolygon = response.data.result;
        console.log("Data Polygon",this.dataPolygon);
        if(this.dataPolygon.length !=0) {
          this.showToast=true;
          this.showClear=true;
          this.message_toastku="Data Polygon sudah terisi jika ingin melakukan reset klik Tombol Clear Data";
        }
    },

    confirmDeletePolygon() {
      this.showModal=true;
      this.titleModal="Confirm Delete Data Polygon";
      this.messageModal="Anda Yakin menghapus semua data Polygon?";
    },

    tutupToast() {
      this.showToast = false;
    },

    tutupModal() {
      this.showModal = false;
    },
  },

  created(){
    this.cekDataPolygon();
  },

  setup() {
    const lat = ref(0);
    const lng = ref(0);
    const map = ref();
    const latlng = ref();
    const mapContainer = ref();
    const polygonku = ref();
    const showToast = ref(false);
    const showModal=ref(false);
    const showClear=ref(false);

    onMounted(() => {
      map.value = L.map(mapContainer.value).setView([51.505, -0.09], 13);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map.value);
    });

    return {
      showToast,
      showModal,
      showClear,
      lat,
      lng,
      map,
      mapContainer,
      latlng,
      polygonku,
    };
  },
};
</script>

<style lang="scss" scoped></style>
