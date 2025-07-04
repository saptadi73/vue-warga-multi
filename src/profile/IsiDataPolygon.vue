<template>
  <div>
    <!-- Form Input -->
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
                class="inline-flex px-4 items-center min-w-fit rounded-s-md border border-e-0 border-gray-600 text-sm text-gray-500 bg-slate-200"
              >
                Latitude
              </span>
              <input
                v-model="formValues.latitude"
                type="number"
                class="py-2 px-3 block w-full border-gray-200 shadow-sm text-sm"
              />
            </div>
            <div class="flex rounded-lg shadow-sm ml-2">
              <span
                class="inline-flex px-4 items-center min-w-fit border border-e-0 border-gray-600 text-sm text-gray-500 bg-slate-200"
              >
                Longitude
              </span>
              <input
                v-model="formValues.longitude"
                type="number"
                class="py-2 px-3 block w-full border-gray-200 shadow-sm text-sm"
              />
              <span
                @click="getLocation"
                title="Get Location Now"
                class="material-icons shadow-sm p-2 cursor-pointer text-white bg-slate-700 rounded-e-lg"
              >
                location_on
              </span>
            </div>
          </div>
        </div>

        <button
          @click="tambahTitikPolygon"
          class="mt-5 bg-blue-500 text-base font-semibold rounded-lg text-white p-2"
        >
          Simpan GPS Coordinates
        </button>
      </div>
      <div class="bg-yellow-100 border-t rounded-b-xl py-3 px-4">
        <p class="text-sm text-red-500">
          Titik polygon harus berurutan, dan titik akhir harus sama dengan titik
          awal.
        </p>
      </div>
    </div>

    <!-- Map & Polygon -->
    <div class="p-5 bg-white border shadow-sm rounded-xl">
      <div class="p-4 md:p-5">
        <h3 class="text-lg font-bold text-gray-800">Peta Polygon</h3>
        <div>
          <button
            v-if="showClear"
            @click="confirmDeletePolygon"
            class="p-2 bg-slate-600 text-yellow-200 rounded-md shadow-md"
          >
            Clear Data Polygon
          </button>
          <div
            ref="mapContainer"
            class="w-[400px] h-[400px] md:w-[900px] md:h-[500px] mt-10 z-50"
          ></div>
        </div>
      </div>
      <div class="bg-gray-100 border-t rounded-b-xl py-3 px-4">
        <p class="text-sm text-gray-500">
          Hasil akhir polygon ditampilkan di peta.
        </p>
      </div>
    </div>

    <!-- Feedback Components -->
    <ToastCard
      v-if="showToast"
      :message_toast="messageToast"
      v-on:dismissToast="tutupToast"
    />
    <ModalCard
      v-if="showModal"
      :message_modal="modalMessage"
      :title="modalTitle"
      @okeButton="clearDataPolygon"
      @closeButton="showModal = false"
      @cancelButton="showModal = false"
    />
    <LoadingOverlay />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import L from "leaflet";
import { BASE_URL } from "../base.url.utils";
import ToastCard from "../components/ToastCard.vue";
import ModalCard from "../components/ModalCard.vue";
import trailku from "../trail/trail";
import api from "../user/axios";
import LoadingOverlay from "../components/LoadingOverlay.vue";
import { useLoadingStore } from "../stores/loading";

const formValues = ref({ latitude: null, longitude: null });
const showToast = ref(false);
const messageToast = ref("");
const showModal = ref(false);
const modalTitle = ref("");
const modalMessage = ref("");
const showClear = ref(false);
const dataPolygon = ref([]);
const polygonku = ref([]);
const map = ref(null);
const mapContainer = ref(null);
const polygonLayer = ref(null);
const id_tenant = localStorage.getItem("id_tenant");
const loadingStore = useLoadingStore();
const luas = ref(0);

const tutupToast = () => {
  showToast.value = false;
  formValues.longitude = "";
  formValues.latitude = "";
  window.location.reload();
};

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      formValues.value.latitude = position.coords.latitude;
      formValues.value.longitude = position.coords.longitude;
      map.value.setView(
        [formValues.value.latitude, formValues.value.longitude],
        18
      );
      L.marker([formValues.value.latitude, formValues.value.longitude], {
        draggable: true,
      }).addTo(map.value);
    });
  }
};

const tambahTitikPolygon = async () => {
  const url = BASE_URL + "profile/new/polygon";
  formValues.value.id_tenant = id_tenant;
  await api
    .post(url, formValues.value, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      const data = response.data;
      showToast.value = true;
      messageToast.value = data.message;
      const trail = trailku(messageToast.value);
    })
    .catch((error) => {
      console.log(error);
      showToast.value = true;
      messageToast.value = error;
    });

  await getDataPolygon();
};

const clearDataPolygon = async () => {
  const url = BASE_URL + "profile/clear/" + id_tenant;
  await axios.get(url);
  dataPolygon.value = [];
  if (polygonLayer.value) map.value.removeLayer(polygonLayer.value);
  messageToast.value = "Data polygon berhasil dihapus";
  const trail = await trailku(messageToast.value);
  console.log(trail);
  showToast.value = true;
};

const confirmDeletePolygon = () => {
  modalTitle.value = "Hapus Data Polygon";
  modalMessage.value = "Yakin ingin menghapus semua titik polygon?";
  showModal.value = true;
};

const getDataPolygon = async () => {
  // const url = BASE_URL + "profile/polygon/" + id_tenant;
  // const response = await axios.get(url);
  // dataPolygon.value = response.data.result;
  // console.log("Data Polygon :",dataPolygon.value);

  // if (polygonLayer.value) map.value.removeLayer(polygonLayer.value);

  // const latlngs = dataPolygon.value.map((item) => [
  //   item.latitude,
  //   item.longitude,
  // ]);
  // if (latlngs.length >= 3) {
  //   polygonLayer.value = L.polygon(latlngs, { color: "red" }).addTo(map.value);
  //   map.value.fitBounds(polygonLayer.value.getBounds());
  // }

  // if (latlngs.length) showClear.value = true;

  try {
    const url = BASE_URL + "profile/polygon/" + id_tenant;
    const response = await axios.get(url);

    // Ensure it's an array
    if (!Array.isArray(response.data.result)) {
      console.error("Unexpected response format:", response.data);
      return;
    }

    dataPolygon.value = response.data.result;

    // Check the structure of `this.dataPolygon`
    console.log("Data received:", dataPolygon.value);

    const polygonLatitude = dataPolygon.value.map((data) => data.latitude);
    console.log("Data Map", polygonLatitude);

    const polygonLongitude = dataPolygon.value.map((data) => data.longitude);
    console.log("Data Map", polygonLongitude);

    const polygonLengkap = polygonLatitude.map((value, index) => [
      value,
      polygonLongitude[index],
    ]);

    console.log("Data AKhir Jos", polygonLengkap);

    if (polygonku.value) {
      map.value.removeLayer(polygonku.value);
    }

    polygonku.value = L.polygon(polygonLengkap, { color: "red" }).addTo(
      map.value
    );

    // zoom the map to the polygon
    map.value.fitBounds(polygonku.value.getBounds());

    const geoJsonPolygon = turf.polygon([polygonLengkap]);
    const area = turf.area(geoJsonPolygon);

    luas.value = area.toFixed(2);
    console.log("Area", area);

    // // Ensure `row` is an array before calling `.map()`
    // const result = this.dataPolygon.map((row) =>
    //   Array.isArray(row) ? row.map((obj) => Object.values(obj)[0]) : []
    // );

    // console.log("Transformed result:", result);
    // this.result = result; // Assign it if needed
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {

  }
};

onMounted(() => {
  map.value = L.map(mapContainer.value).setView([-6.2, 106.8], 13);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map.value);

  getDataPolygon();
});

watch(dataPolygon, () => {
  getDataPolygon();
});
</script>

<style scoped>
.material-icons {
  font-size: 24px;
}
</style>
