<template>
    <div>
      <div
        class="flex p-5 flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
      >
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">Card title</h3>
          <div>
            <div
              id="hs-datatable-filter"
              class="flex flex-col"
            >
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
                    <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
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
                          <th class="py-1 text-start font-normal">Name</th>
                          <th class="py-1 text-start font-normal">Nomor Rumah</th>
                          <th class="py-1 text-start font-normal">Age</th>
                          <th class="py-1 text-start font-normal">Address</th>
                          <th class="py-2 px-3 text-end font-normal">Action</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                        <tr v-for="user in filteredUsers" :key="user.id">
                          <td class="py-3 ps-3">
                            <div class="flex items-center h-5">
                              <input
                                id="hs-table-filter-checkbox-{{ user.id }}"
                                type="checkbox"
                                class="hs-datatable-select-row border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500"
                              />
                              <label :for="'hs-table-filter-checkbox-' + user.id" class="sr-only">Checkbox</label>
                            </div>
                          </td>
                          <td class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{{ user.name }}</td>
                          <td class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{{ user.number }}</td>
                          <td class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{{ user.age }}</td>
                          <td class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{{ user.address }}</td>
                          <td class="p-3 whitespace-nowrap text-end text-sm font-medium">
                            <button type="button" class="text-blue-600 hover:text-blue-800">Delete</button>
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
          <div class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700">
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
    { id: 1, name: 'Christina Bersh', number: '45', age: 30, address: '4222 River Rd, Columbus' },
    { id: 2, name: 'David Harrison', number: '27', age: 25, address: '2952 S Peoria Ave, Tulsa' },
    { id: 3, name: 'Anne Richard', number: '31', age: 28, address: '255 Dock Ln, New Tazewell' },
    // Add more sample users as needed
  ]);
  
  const filteredUsers = computed(() => {
    if (!searchQuery.value) {
      return users.value;
    }
    return users.value.filter(user =>
      user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.number.toString().includes(searchQuery.value) ||
      user.address.toLowerCase().includes(searchQuery.value.toLowerCase())
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