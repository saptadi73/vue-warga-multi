<template>
  <div>
    <h3
      class="mx-auto md:text-xl text-center font-bold font-Roboto mt-1 text-white p-3 bg-gradient-to-r from-blue-600 via-teal-400 to-green-400 rounded-lg shadow-lg">
      Pengisian Data Profile Wilayah
    </h3>

    <div
      class="w-[85vw] grid p-5 md:grid-cols-2 md:gap-4 bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      <!-- start Card  -->
      <div id="card1" class="md:w-[40vw] w-full">
        <div class="p-2 md:p-3">
          <div class="mt-10">
            <div class="relative">
              <select id="provinsi"
                class="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2">
                <option selected="">Pilih Provinsi</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <label for="provinsi"
                class="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500">Provinsi</label>
            </div>
          </div>
          <div class="mt-6">
            <div class="relative">
              <select id="kabupaten"
                class="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2">
                <option selected="">Pilih Kabupaten/Kota</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <label for="kabupaten"
                class="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500">Provinsi</label>
            </div>
          </div>

          <div class="mt-6">
            <div class="relative">
              <select id="kecamatan"
                class="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2">
                <option selected="">Pilih Kecamatan</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <label for="kecamatan"
                class="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500">Provinsi</label>
            </div>
          </div>
        </div>
        <div
          class="bg-gradient-to-r from-teal-200 via-green-100 to-blue-200 border-t rounded-full py-3 px-4 md:py-4 md:px-5">
          <p class="mt-1 text-sm text-gray-800">
            Wilayah berdasarkan data resmi Kementerian Dalam Negeri RI
          </p>
        </div>
      </div>

      <!-- start Card  -->
      <div id="card2" class="md:w-[40vw] w-full">
        <div class="p-4 md:p-5">
          <div class="mt-10">
            <div class="relative">
              <select id="provinsi"
                class="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2">
                <option selected="">Pilih Desa/Kelurahan</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <label
                class="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500">Desa/Kelurahan</label>
            </div>
          </div>
          <div class="mt-3">
            <div class="flex rounded-lg shadow-sm">
              <span
                class="inline-flex px-4 items-center min-w-fit rounded-s-md boder border-e-0 border-gray-600 text-sm text-gray-500 bg-slate-200">Dusun/Perumahan</span>
              <input type="text"
                class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none" />
            </div>
          </div>
          <div class="mt-3">
            <div class="flex items-center">
              <div class="flex rounded-lg shadow-sm">
                <span
                  class="inline-flex px-4 items-center min-w-fit rounded-s-md boder border-e-0 border-gray-600 text-sm text-gray-500 bg-slate-200">No.
                  RW</span>
                <input id="rw" type="number"
                  class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none" />
              </div>
              <div class="flex rounded-lg shadow-sm">
                <span
                  class="inline-flex px-4 items-center min-w-fit boder border-e-0 border-gray-600 text-sm text-gray-500 bg-slate-200">No.
                  RT</span>
                <input id="rt" type="number"
                  class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none" />
              </div>
            </div>
          </div>
          <button
            class="mt-5 bg-blue-500 text-base font-semibold rounded-lg text-white decoration-2 hover:text-blue-200 hover:underline focus:underline focus:outline-none p-2 focus:text-blue-300 disabled:opacity-50 disabled:pointer-events-none"
            href="#">
            Simpan Wilayah
          </button>
        </div>
        <div
          class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700">
          <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
            Setiap Wilayah terdaftar dengan nomor unik khusus
          </p>
        </div>
      </div>
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div class="pb-4 bg-white dark:bg-gray-900">
        <label for="table-search" class="sr-only">Search</label>
        <label for="trash">Delete</label>
        <div class="relative mt-1">
          <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="text" id="table-search"
            class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for items" />
        </div>
      </div>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
          <tr>
            <th scope="col" class="p-4">
              <div class="flex items-center">
                <input id="checkbox-all-search" type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="checkbox-all-search" class="sr-only">checkbox</label>
              </div>
            </th>
            <th scope="col" class="px-6 py-3">Provinsi</th>
            <th scope="col" class="px-6 py-3">Kabupaten/Kota</th>
            <th scope="col" class="px-6 py-3">Kecamatan</th>
            <th scope="col" class="px-6 py-3">Kelurahan</th>
            <th scope="col" class="px-6 py-3">Dusun/Perumahan</th>
            <th scope="col" class="px-6 py-3">No.RW</th>
            <th scope="col" class="px-6 py-3">No.RT</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 text-center">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input id="checkbox-table-search-1" type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
              </div>
            </td>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Jawa Barat
            </th>
            <td class="px-6 py-4">Cirebon</td>
            <td class="px-6 py-4">Palimanan</td>
            <td class="px-6 py-4">Nganjuk</td>
            <td class="px-6 py-4">Dusun 1</td>
            <td class="px-6 py-4">11</td>
            <td class="px-6 py-4">03</td>
            <td class="px-6 py-4 flex justify-center space-x-4">
              <!-- Tombol Edit -->
              <a href="#" onclick="editItem()" class="text-blue-600 hover:text-blue-800 transition duration-200"
                title="Edit">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.862 3.487a2.25 2.25 0 113.182 3.182L6.75 19.863l-4.5 1.318 1.318-4.5L16.862 3.487z" />
                </svg>
              </a>

              <!-- Tombol Hapus -->
              <a href="#" onclick="deleteItem()" class="text-red-600 hover:text-red-800 transition duration-200"
                title="Hapus">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6 6h12M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2m2 0v14a2 2 0 01-2 2H9a2 2 0 01-2-2V6h10z" />
                </svg>
              </a>
            </td>
          </tr>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 text-center">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input id="checkbox-table-search-1" type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
              </div>
            </td>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Jawa Barat
            </th>
            <td class="px-6 py-4">Banten</td>
            <td class="px-6 py-4">Tangerang</td>
            <td class="px-6 py-4">Cingkareng</td>
            <td class="px-6 py-4">Pengalengan</td>
            <td class="px-6 py-4">13</td>
            <td class="px-6 py-4">11</td>
            <td class="px-6 py-4 flex justify-center space-x-4">
              <!-- Tombol Edit -->
              <a href="#" onclick="editItem()" class="text-blue-600 hover:text-blue-800 transition duration-200"
                title="Edit">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.862 3.487a2.25 2.25 0 113.182 3.182L6.75 19.863l-4.5 1.318 1.318-4.5L16.862 3.487z" />
                </svg>
              </a>

              <!-- Tombol Hapus -->
              <a href="#" onclick="deleteItem()" class="text-red-600 hover:text-red-800 transition duration-200"
                title="Hapus">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6 6h12M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2m2 0v14a2 2 0 01-2 2H9a2 2 0 01-2-2V6h10z" />
                </svg>
              </a>
            </td>
          </tr>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 text-center">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input id="checkbox-table-search-1" type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
              </div>
            </td>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Jawa Barat
            </th>
            <td class="px-6 py-4">Banten</td>
            <td class="px-6 py-4">Tangerang</td>
            <td class="px-6 py-4">Cingkareng</td>
            <td class="px-6 py-4">Pengalengan</td>
            <td class="px-6 py-4">13</td>
            <td class="px-6 py-4">11</td>
            <td class="px-6 py-4 flex justify-center space-x-4">
              <!-- Tombol Edit -->
              <a href="#" onclick="editItem()" class="text-blue-600 hover:text-blue-800 transition duration-200"
                title="Edit">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.862 3.487a2.25 2.25 0 113.182 3.182L6.75 19.863l-4.5 1.318 1.318-4.5L16.862 3.487z" />
                </svg>
              </a>

              <!-- Tombol Hapus -->
              <a href="#" onclick="deleteItem()" class="text-red-600 hover:text-red-800 transition duration-200"
                title="Hapus">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6 6h12M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2m2 0v14a2 2 0 01-2 2H9a2 2 0 01-2-2V6h10z" />
                </svg>
              </a>
            </td>
          </tr>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 text-center">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input id="checkbox-table-search-1" type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
              </div>
            </td>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Jawa Barat
            </th>
            <td class="px-6 py-4">Banten</td>
            <td class="px-6 py-4">Tangerang</td>
            <td class="px-6 py-4">Cingkareng</td>
            <td class="px-6 py-4">Pengalengan</td>
            <td class="px-6 py-4">13</td>
            <td class="px-6 py-4">11</td>
            <td class="px-6 py-4 flex justify-center space-x-4">
              <!-- Tombol Edit -->
              <a href="#" onclick="editItem()" class="text-blue-600 hover:text-blue-800 transition duration-200"
                title="Edit">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.862 3.487a2.25 2.25 0 113.182 3.182L6.75 19.863l-4.5 1.318 1.318-4.5L16.862 3.487z" />
                </svg>
              </a>

              <!-- Tombol Hapus -->
              <a href="#" onclick="deleteItem()" class="text-red-600 hover:text-red-800 transition duration-200"
                title="Hapus">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6 6h12M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2m2 0v14a2 2 0 01-2 2H9a2 2 0 01-2-2V6h10z" />
                </svg>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { BASE_URL } from "../base.url.utils";

export default {};
</script>

<style lang="scss" scoped></style>
