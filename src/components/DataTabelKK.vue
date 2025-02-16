<template>
    <div>
      <div
        class="flex p-5 flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">Card title</h3>
          <div>
            <div id="hs-datatable-filter" class="flex flex-col">
              <div class="flex items-center space-x-2 mb-4">
                <div class="flex-0">
                  <div class="relative max-w-xs">
                    <label for="hs-table-filter-search" class="sr-only">Search</label>
                    <input type="search" v-model="searchQuery" @input="handleSearch" id="hs-table-filter-search"
                      class="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                      placeholder="Search for items" />
                    <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                      <svg class="size-4 text-gray-400 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                    </div>
                  </div>
                </div>
  
                <div class="flex-1 flex items-center justify-end space-x-2">
                  <!-- Select -->
                  <select class="hidden">
                    <option value="10" selected="">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                  </select>
                  <!-- End Select -->
                </div>
              </div>
  
              <div class="overflow-x-auto min-h-[521px]">
                <div class="min-w-full inline-block align-middle">
                  <div class="overflow-hidden">
                    <table class="min-w-full">
                      <thead class="border-y border-gray-200 dark:border-neutral-700">
                        <tr>
                          <th class="py-1 ps-3">
                            <div class="flex items-center h-5">
                              <input id="hs-datatable-select-all-rows" type="checkbox"
                                class="border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500" />
                              <label class="sr-only">Checkbox</label>
                            </div>
                          </th>
                          <th class="py-3 px-4 text-xs font-normal">Blok/No</th>
                          <th class="py-3 px-4 text-xs font-normal">Nomor Rumah</th>
                          <th class="py-3 px-4 text-xs font-normal">No. Kartu Keluarga</th>
                          <th class="py-3 px-4 text-xs font-normal">Nama Kepala Keluarga</th>
                          <th class="py-3 px-4 text-xs font-normal">NIK Kepala Keluarga</th>
                          <th class="py-3 px-4 text-xs font-normal">Jenis Kelamin</th>
                          <th class="py-3 px-4 text-xs font-normal">Tempat Lahir</th>
                          <th class="py-3 px-4 text-xs font-normal">Tanggal Lahir</th>
                          <th class="py-3 px-4 text-xs font-normal">Pekerjaan</th>
                          <th class="py-3 px-4 text-xs font-normal">No HP/WA</th>
                          <th class="py-3 px-4 text-end text-xs font-normal">Action</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-gray-200 dark:divide-neutral-700 text-center">
                        <tr v-for="user in filteredUsers" :key="user.id">
                          <!-- Checkbox -->
                          <td class="py-4 ps-4">
                            <div class="flex items-center h-5">
                              <input :id="'hs-table-filter-checkbox-' + user.id" type="checkbox" class="
              hs-datatable-select-row border-gray-300 rounded text-blue-600 
              focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 
              dark:checked:bg-blue-500 dark:checked:border-blue-500
            " />
                              <label :for="'hs-table-filter-checkbox-' + user.id" class="sr-only">
                                Checkbox
                              </label>
                            </div>
                          </td>
  
                          <!-- Data Warga -->
                          <td class="p-4 text-xs font-medium text-gray-800 dark:text-neutral-200">
                            {{ user.blok }}
                          </td>
                          <td class="p-4 text-xs font-medium text-gray-800 dark:text-neutral-200">
                            {{ user.numberhome }}
                          </td>
                          <td class="p-4 text-xs font-medium text-gray-800 dark:text-neutral-200">
                            {{ user.nokk }}
                          </td>
                          <td class="p-4 text-xs font-medium text-gray-800 dark:text-neutral-200">
                            {{ user.nama }}
                          </td>
                          <td class="p-4 text-xs font-medium text-gray-800 dark:text-neutral-200">
                            {{ user.nik }}
                          </td>
                          <td class="py-4 text-xs text-gray-800 dark:text-neutral-200">
                            {{ user.gender }}
                          </td>
                          <td class="p-4 text-xs text-gray-800 dark:text-neutral-200">
                            {{ user.tempatlahir }}
                          </td>
                          <td class="p-4 text-xs text-gray-800 dark:text-neutral-200">
                            {{ user.tgl_lahir }}
                          </td>
                          <td class="p-4 text-xs text-gray-800 dark:text-neutral-200">
                            {{ user.pekerjaan}}
                          </td>
                          <td class="p-4 text-xs text-gray-800 dark:text-neutral-200">
                            {{ user.no_hp }}
                          </td>
  
                          <!-- Tombol Aksi -->
                          <td class="p-4 text-end text-sm font-medium">
                            <button type="button" class="text-blue-600 hover:text-blue-800">
                              Delete
                            </button>
                          </td>
                        </tr>
                      </tbody>
  
                    </table>
                  </div>
                </div>
              </div>
  
              <div class="flex items-center mt-4">
                <div class="text-xs text-gray-500 ms-auto dark:text-neutral-400">
                  Showing <span>{{ filteredUsers.length }}</span> users
                </div>
              </div>
            </div>
          </div>
          <div
            class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700">
            <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">Last updated 5 mins ago</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const searchQuery = ref('')
  const users = ref([
    { id: 1, blok: 'A', numberhome: '12', nokk: '321021090109192', gender:'Laki-Laki',tempatlahir:'Jakarta',nama: 'Christina Bersh', nik:'3213123243455',tgl_lahir:'09/06/2022', number: '45', pekerjaan:'Wiraswasta', no_hp:'08932166090' },
    { id: 2, blok: 'B', numberhome: '50', nokk: '321021090109192', gender:'Laki-Laki',tempatlahir:'Bekasi',nama: 'Christina Bersh', nik:'3213123243455',tgl_lahir:'09/06/2022', number: '45', pekerjaan:'Wiraswasta', no_hp:'08932166090' },
    { id: 3, blok: 'C', numberhome: '22', nokk: '321021090109192', gender:'Laki-Laki',tempatlahir:'Subang',nama: 'Christina Bersh', nik:'3213123243455',tgl_lahir:'09/06/2022', number: '45', pekerjaan:'Wiraswasta', no_hp:'08932166090' },
    { id: 4, blok: 'D', numberhome: '3', nokk: '321021090109192', gender:'Laki-Laki',tempatlahir:'Sungai Kendal',nama: 'Joko', nik:'3213123243455',tgl_lahir:'09/06/2022', number: '45', pekerjaan:'Wiraswasta', no_hp:'08932166090' },
    { id: 5, blok: 'E', numberhome: '10', nokk: '321021090109192', gender:'Perempuan',tempatlahir:'Kudus',nama: 'Christina Bersh', nik:'3213123243455',tgl_lahir:'09/06/2022', number: '45', pekerjaan:'Wiraswasta', no_hp:'08932166090' },
    { id: 6, blok: 'F', numberhome: '11', nokk: '321021090109192', gender:'Laki-Laki',tempatlahir:'Kudus',nama: 'Christina Bersh', nik:'3213123243455',tgl_lahir:'09/06/2022', number: '45', pekerjaan:'Wiraswasta', no_hp:'08932166090' },
    { id: 7, blok: 'G', numberhome: '5', nokk: '321021090109192', gender:'Laki-Laki',tempatlahir:'Jawa',nama: 'Christina Bersh', nik:'3213123243455',tgl_lahir:'09/06/2022', number: '45', pekerjaan:'Wiraswasta', no_hp:'08932166090' },
    { id: 8, blok: 'H', numberhome: '2', nokk: '321021090109192', gender:'Laki-Laki',tempatlahir:'Tegal',nama: 'Christina Bersh', nik:'3213123243455',tgl_lahir:'09/06/2022', number: '45', pekerjaan:'Wiraswasta', no_hp:'08932166090' },
    { id: 9, blok: 'I', numberhome: '1', nokk: '321021090109192', gender:'Laki-Laki',tempatlahir:'Jakarta',nama: 'Christina Bersh', nik:'3213123243455',tgl_lahir:'09/06/2022', number: '45', pekerjaan:'Wiraswasta', no_hp:'08932166090' },
    // Add more sample users as needed
  ]);
  
  const filteredUsers = computed(() => {
    if (!searchQuery.value) {
      return users.value;
    }
    return users.value.filter(user =>
      user.blok.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.numberhome.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.nokk.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.nama.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.nik.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.gender.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.tempatlahir.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.tgl_lahir.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.pekerjaan.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.no_hp.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });
  
  function handleSearch() {
    // This function is called on input event to filter users.
    // It's already handled by the computed property `filteredUsers`.
  }
  </script>
  
  <style lang="css">
  .dt-layout-row:has(.dt-search),
  .dt-layout-row:has(.dt-length),
  .dt-layout-row:has(.dt-paging) {
    display: none !important;
  }
  </style>