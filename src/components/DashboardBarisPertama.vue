<template>
  <div>
    <div
      class="md:w-[80vw] grid p-5 md:grid-cols-2 md:gap-4 bg-white border shadow-sm rounded-xl"
    >
      <!-- start Card1  -->
      <div id="card1" class="md:w-[35vw]">
        <div class="p-4 md:p-5">
          <h3
            class="text-xl text-white p-2 rounded-t-md font-bold bg-gradient-to-r from-blue-600 to-blue-50"
          >
            Profile Wilayah
          </h3>
          <p class="mt-2 text-gray-500 font-semibold font-Poppins">
            Provinsi : <span class="text-gray-800">{{ provinsi }}</span>
          </p>
          <p
            class="mt-2 text-gray-500 font-semibold font-Poppins bg-gradient-to-r from-gray-300 to-gray-50"
          >
            Kabupaten/Kota : <span class="text-gray-800">{{ kabupaten }}</span>
          </p>
          <p class="mt-2 text-gray-500 font-semibold font-Poppins">
            Kecamatan :<span class="text-purple-600">{{ kecamatan }}</span>
          </p>
          <p
            class="mt-2 text-gray-500 font-semibold font-Poppins bg-gradient-to-r from-gray-300 to-gray-50"
          >
            Desa/Kelurahan : <span class="text-purple-600">{{ desa }}</span>
          </p>
          <p class="mt-2 text-blue-600 font-bold font-Poppins">
            Dusun/Perumahan : {{ dusun }}
          </p>
          <p class="mt-2 text-gray-500 font-bold font-Poppins">
            RT/RW : {{ rt }} / {{ rw }}
          </p>
          <p
            class="mt-2 text-gray-500 font-semibold font-Poppins bg-gradient-to-r from-gray-300 to-gray-50"
          >
            Kode Wilayah :
            <span class="font-bold text-green-500"
              >{{ kode_wilayah }}-{{ rw }}-{{ rt }}</span
            >
          </p>
          <a
              class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
              href="/dashboard"
            >
              Dashboard
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
            Profile Wilayah yang diisi berdasarkan data wilayah Kementerian
            Dalam Negeri
          </p>
        </div>
      </div>

      <!-- start Card2  -->
      <div id="card2" class="">
        <div class="p-4 md:p-5">
          <h3 class="text-lg p-2 font-bold rounded-t-md bg-gradient-to-r from-yellow-300 to-yellow-50">
            Peta Wilayah
          </h3>
          <div>
            <div
              ref="mapContainer"
              class="w-[400px] h-[400px] md:w-[600px] md:h-[250px] text-center"
            ></div>
          </div>
          <a
              class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
              href="/dashboard"
            >
              Dashboard
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
            Luas Area Terhitung {{ luas }} m<sup>2</sup>
          </p>
        </div>
      </div>
    </div>
    <LoadingOverlay/>
  </div>
</template>

<script>
import { error } from "jquery";
import { BASE_URL } from "../base.url.utils";
import axios from "axios";
import { ref, onMounted } from "vue";
import L, { Draggable } from "leaflet";
import { event } from "jquery";
import { polygon } from "leaflet";
import { useLoadingStore } from '../stores/loading'
import LoadingOverlay from "./LoadingOverlay.vue";


export default {
  components: {LoadingOverlay},
  data() {
    return {
      provinsi: null,
      kabupaten: null,
      kecamatan: null,
      desa: null,
      dusun: null,
      rt: null,
      rw: null,
      kode_wilayah: null,
      hasilEntity: null,
      dataPolygon: [],
      luas: null,
    };
  },
  methods: {
    async getEntity() {
      const url = BASE_URL + "profile/cari/" + this.id_tenant;
      await axios
        .get(url)
        .then((response) => {
          this.hasilEntity = response.data.result;
          this.provinsi = this.hasilEntity.provinsi;
          this.kabupaten = this.hasilEntity.kabupaten;
          this.kecamatan = this.hasilEntity.kecamatan;
          this.desa = this.hasilEntity.desa;
          this.dusun = this.hasilEntity.dusun;
          this.rw = this.hasilEntity.rw;
          this.rt = this.hasilEntity.rt;
          this.kode_wilayah = this.hasilEntity.kode_wilayah;
          console.log("hasil cek Profile: ",this.hasilEntity);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async getLocalStorage() {
      const data = localStorage.getItem('access_token');
      const level = localStorage.getItem('level');
      console.log('access_token :',data);
      console.log('level :', level);
    },

    async getDataPolygon() {
      this.loadingStore.show();
      try {
        const url = BASE_URL + "profile/polygon/" + this.id_tenant;
        const response = await axios.get(url);

        // Ensure it's an array
        if (!Array.isArray(response.data.result)) {
          console.error("Unexpected response format:", response.data);
          return;
        }

        this.dataPolygon = response.data.result;

        // Check the structure of `this.dataPolygon`
        console.log("Data received:", this.dataPolygon);

        const polygonLatitude = this.dataPolygon.map(data => data.latitude);
        console.log("Data Map",polygonLatitude);

        const polygonLongitude = this.dataPolygon.map(data => data.longitude);
        console.log("Data Map",polygonLongitude);

        const polygonLengkap = polygonLatitude.map((value,index) => [value,polygonLongitude[index]]);

        console.log("Data AKhir Jos", polygonLengkap);

        this.polygonku = L.polygon(polygonLengkap, { color: "red" }).addTo(
        this.map
      );

      // zoom the map to the polygon
      this.map.fitBounds(this.polygonku.getBounds());

      const geoJsonPolygon = turf.polygon([polygonLengkap]);
     const area = turf.area(geoJsonPolygon);

     this.luas = area.toFixed(2);
     console.log("Area", area);
    

        // // Ensure `row` is an array before calling `.map()`
        // const result = this.dataPolygon.map((row) =>
        //   Array.isArray(row) ? row.map((obj) => Object.values(obj)[0]) : []
        // );

        // console.log("Transformed result:", result);
        // this.result = result; // Assign it if needed
      } catch (error) {
        console.error("Error fetching data:", error);
      }finally{
        this.loadingStore.hide();
      }
    },

    getMemberMap(item) {

    }
  },
  created() {
    this.getEntity();
    this.getDataPolygon();
    this.getLocalStorage();
  },

  setup() {
    const lat = ref(0);
    const lng = ref(0);
    const map = ref();
    const latlng = ref();
    const mapContainer = ref();
    const polygonku = ref();
    const loadingStore = useLoadingStore()
    const id_tenant = localStorage.getItem("id_tenant");

    onMounted(() => {
      map.value = L.map(mapContainer.value).setView([51.505, -0.09], 13);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map.value);
    });

    return {
      lat,
      lng,
      map,
      mapContainer,
      latlng,
      polygonku,
      loadingStore,
      id_tenant,
    };
  },
};
</script>

<style lang="scss" scoped></style>
