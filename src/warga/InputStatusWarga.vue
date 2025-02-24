<template>
    <div>
      <div
        class="grid w-[90vw] p-5 md:grid-cols-2 md:gap-4 bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
      >
        <!-- start Card  -->
        <div id="card1" class="">
          <div class="p-4 md:p-5">
            <h3 class="text-lg font-bold text-gray-800 dark:text-white">
              Pengisian Status Kewargaan
            </h3>
            <div>
              <div>
                <div class="sm:flex rounded-lg shadow-sm">
                  <span
                    class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400"
                    >Isi Status Kewargaan</span
                  >
                  <input
                    type="text"
                    class="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  />
                </div>
              </div>
            </div>
            <button
              class="mt-5 bg-purple-500 text-base font-semibold rounded-lg text-white decoration-2 hover:text-purple-200 hover:underline focus:underline focus:outline-none p-2 focus:text-purple-300 disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              Simpan
            </button>
          </div>
          <div
            class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700"
          >
            <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
              Hasil Pengisian dan Daftar Status Kewargaan yang sudah ada tertera di table bawah
            </p>
          </div>
        </div>
      </div>
      <StatusWarga/>
      
    </div>
  </template>
  
  <script>
  import StatusWarga from "../warga/TabelStatusWarga.vue";

  export default{
    components: { 
      StatusWarga,
     },
  }
  </script>
  
  <style lang="css">
  .dt-layout-row:has(.dt-search),
  .dt-layout-row:has(.dt-length),
  .dt-layout-row:has(.dt-paging) {
    display: none !important;
  }
  </style>
  