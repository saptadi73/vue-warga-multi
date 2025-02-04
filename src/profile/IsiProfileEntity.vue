<template>
    <div>
      <div
        class="w-[90vw] grid p-5 md:grid-cols-2 md:gap-4 bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
      >
        <!-- start Card  -->
        <div id="card1" class="w-[40vw]">
          <div class="p-4 md:p-5">
            <h3 class="text-lg font-bold text-gray-800 dark:text-white">
              Input Data Wilayah Provinsi dan Kabupaten
            </h3>
            <div class="mt-10">
              <div class="relative">
                <select id="provinsi" class="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm  focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2">
                  <option selected="">Pilih Provinsi</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                <label for="provinsi" class="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                  peer-focus:text-xs
                  peer-focus:-translate-y-1.5
                  peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                  peer-[:not(:placeholder-shown)]:text-xs
                  peer-[:not(:placeholder-shown)]:-translate-y-1.5
                  peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500">Provinsi</label>
              </div>
            </div>
            <div class="mt-6">
              <div class="relative">
                <select id="kabupaten" class="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm  focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2">
                  <option selected="">Pilih Kabupaten/Kota</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                <label for="kabupaten" class="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                  peer-focus:text-xs
                  peer-focus:-translate-y-1.5
                  peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                  peer-[:not(:placeholder-shown)]:text-xs
                  peer-[:not(:placeholder-shown)]:-translate-y-1.5
                  peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500">Provinsi</label>
              </div>
            </div>

            <div class="mt-6">
              <div class="relative">
                <select id="kecamatan" class="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm  focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2">
                  <option selected="">Pilih Kecamatan</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                <label for="kecamatan" class="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                  peer-focus:text-xs
                  peer-focus:-translate-y-1.5
                  peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                  peer-[:not(:placeholder-shown)]:text-xs
                  peer-[:not(:placeholder-shown)]:-translate-y-1.5
                  peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500">Provinsi</label>
              </div>
            </div>
            
            
          </div>
          <div
            class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5"
          >
            <p class="mt-1 text-sm text-gray-500 ">
              WIlayah berdasarkan data resmi Kementerian Dalam Negeri RI
            </p>
          </div>
        </div>
  
        <!-- start Card  -->
        <div id="card1" class="w-[40vw]">
          <div class="p-4 md:p-5">
            <h3 class="text-lg font-bold text-gray-800 dark:text-white">
              Input Data Wilayah Desa/Kelurahan dan Perumahan
            </h3>
            <div class="mt-10">
              <div class="relative">
                <select id="provinsi" class="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm  focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2">
                  <option selected="">Pilih Desa/Kelurahan</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                <label class="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                  peer-focus:text-xs
                  peer-focus:-translate-y-1.5
                  peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                  peer-[:not(:placeholder-shown)]:text-xs
                  peer-[:not(:placeholder-shown)]:-translate-y-1.5
                  peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500">Desa/Kelurahan</label>
              </div>
            </div>
            <div class="mt-3">
              <div class="flex rounded-lg shadow-sm">
                <span class="inline-flex px-4 items-center min-w-fit rounded-s-md boder border-e-0 border-gray-600 text-sm text-gray-500 bg-slate-200">Dusun/Perumahan</span>
                <input type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none">
              </div>
            </div>
            <div class="mt-3">
              <div class="flex items-center">
                <div class="flex rounded-lg shadow-sm">
                  <span class="inline-flex px-4 items-center min-w-fit rounded-s-md boder border-e-0 border-gray-600 text-sm text-gray-500 bg-slate-200">No. RW</span>
                  <input id="rw" type="number" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                </div>
                <div class="flex rounded-lg shadow-sm">
                  <span class="inline-flex px-4 items-center min-w-fit boder border-e-0 border-gray-600 text-sm text-gray-500 bg-slate-200">No. RT</span>
                  <input id="rt" type="number" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                </div>
              </div>
              
            </div>
            <button
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
    </div>
  </template>
  
  <script>
   import { BASE_URL } from '../base.url.utils';
   
export default {

}
</script>
  
  <style lang="scss" scoped></style>
  