<template>
  <div>
    <div class="p-5 w-[85vw] bg-white border shadow-sm rounded-xl">
      <div class="p-4 md:p-5">
        <h3 class="text-lg font-bold bg-gradient-to-r from-gray-500 to-slate-400 p-5 text-white rounded-t-lg">
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
                id="longitude"
                type="number"
                class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              />
              <span class="material-icons shadow-sm p-2 cursor-pointer text-white bg-slate-700">location_on</span><i class="lni lni-refresh-circle-1-clockwise shadow-sm p-2 cursor-pointer bg-purple-400 rounded-e-lg text-lg"></i>
              
            </div>
          </div>
        </div>
        <button
          class="mt-5 bg-blue-500 text-base font-semibold rounded-lg text-white decoration-2 hover:text-blue-200 hover:underline focus:underline focus:outline-none p-2 focus:text-blue-300 disabled:opacity-50 disabled:pointer-events-none"
          href="#"
        >
          Simpan GPS Coordinates
        </button>
      </div>
      <div
        class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700"
      >
        <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
          Pengisian data polygon berapa titik-titik GPS pada batas-batas wilayah
        </p>
      </div>
    </div>

    <div class="p-5 bg-white border shadow-sm rounded-xl">
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            Peta Polygon
          </h3>
          CONTENT
        </div>
        <div
          class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700"
        >
          <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
            Gambar hasil akhir polygon berupa bentuk polygon yang mendekati wilayah yang ingin ditunjukkan
          </p>
        </div>
      </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
