<template>
    <div>
      <div class="w-[80vw]">
        <div id="hs-datatable-filter" class="flex flex-col">
          <div class="flex items-center space-x-2 mb-4">
            <div class="flex-0">
              <div class="relative max-w-xs">
                <label for="hs-table-filter-search" class="sr-only">Search</label>
                <input
                  type="search"
                  v-model="searchQuery"
                  @input="handleSearch"
                  id="hs-table-filter-search"
                  class="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                  placeholder="Search for items"
                />
                <div
                  class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3"
                >
                  <svg
                    class="size-4 text-gray-400 dark:text-neutral-500"
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
                          <input
                            id="hs-datatable-select-all-rows"
                            type="checkbox"
                            class="border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500"
                          />
                          <label class="sr-only">Checkbox</label>
                        </div>
                      </th>
                      <th class="py-1 text-start font-normal">No</th>
                      <th class="py-1 text-start font-normal">Kepala Keluarga</th>
                      <th class="py-1 text-start font-normal">Blok</th>
                      <th class="py-1 text-start font-normal">No.Rumah</th>
                      <th class="py-1 text-start font-normal">No.KK</th>
                      <th class="py-1 text-start font-normal">Tempat Lahir</th>
  
                      <th class="py-2 px-3 text-end font-normal">Action</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                    <tr v-for="(user, index) in filteredUsers" :key="user.id">
                      <td class="py-3 ps-3">
                        <div class="flex items-center h-5">
                          <input
                            :id="'hs-table-filter-checkbox-' + user.id"
                            type="checkbox"
                            class="hs-datatable-select-row border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500"
                          />
                          <label
                            :for="'hs-table-filter-checkbox-' + user.id"
                            class="sr-only"
                            >Checkbox</label
                          >
                        </div>
                      </td>
                      <td
                        class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                      >
                        {{ index + 1 }}
                      </td>
                      <td
                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                      >
                        {{ user.warga[0].nama }}
                      </td>
                      <td
                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                      >
                        {{ user.blok.blok }}
                      </td>
                      <td
                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                      >
                        {{ user.no_rumah }}
                      </td>
                      <td
                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                      >
                        {{ user.no_kk }}
                      </td>
                      <td
                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                      >
                        {{ user.warga[0].tempat_lahir }}
                      </td>
                      <td
                        class="p-3 whitespace-nowrap text-end text-sm font-medium"
                      >
                        <button
                          type="button"
                          class="text-blue-600 hover:text-blue-800"
                          @click="jumptoBayar(`${user.id}`,`${user.warga[0].nama}`)"
                        >
                          Bayar Iuran
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
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from "vue";
  import axios from "axios";
  import { BASE_URL } from "../base.url.utils";
  import router from "../router";
  import { useRoute } from 'vue-router';

const route = useRoute();
  
  const searchQuery = ref("");
  const url = BASE_URL + "warga/list/kk";
  const users = ref([]);
  
  onMounted(async () => {
    try {
      const response = await axios.get(url);
      users.value = response.data.result;
      console.log("hasil list KK", users.value);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  });
  
  const filteredUsers = computed(() => {
    if (!searchQuery.value) {
      return users.value;
    }
    return users.value.filter(
      (user) =>
        user.warga[0].nama.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        user.no_kk.toString().includes(searchQuery.value) ||
        user.blok.blok.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        user.no_rumah.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        user.warga[0].tempat_lahir.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });

  function jumptoBayar(id,nama) {
    const url = '/iuran/bayar/kk/'+id+'/'+nama;
    router.push(url);
  }
  
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
  