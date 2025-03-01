<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div class="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
            <div>
                <button @click="toggleDropdown" class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                    <span class="sr-only">Action button</span>
                    Action
                    <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
                <!-- Dropdown menu -->
                <div v-if="isDropdownOpen" class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
                        <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a></li>
                        <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a></li>
                        <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a></li>
                    </ul>
                    <div class="py-1">
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                    </div>
                </div>
            </div>
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="text" v-model="searchQuery" @input="filterUsers" id="table-search-users" class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users">
            </div>
        </div>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-center text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="p-4">
                        <div class="flex items-center">
                            <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="checkbox-all-search" class="sr-only">checkbox</label>
                        </div>
                    </th>
                    <th scope="col" class="py-3 px-4 text-xs font-normal">Nama Lengkap</th>
                    <th scope="col" class="py-3 px-4 text-xs font-normal">NIK/Paspor</th>
                    <th scope="col" class="py-3 px-4 text-xs font-normal">Status Warga Negara</th>
                    <th scope="col" class="py-3 px-4 text-xs font-normal">Keterangan</th>
                    <th scope="col" class="py-3 px-4 text-xs font-normal">Status</th>
                    <th scope="col" class="py-3 px-4 text-xs font-normal">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in filteredUsers" :key="user.id" class="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="w-4 p-4">
                        <div class="flex items-center">
                            <input :id="'checkbox-table-search-' + user.id" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label :for="'checkbox-table-search-' + user.id" class="sr-only">checkbox</label>
                        </div>
                    </td>
                    <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                        <img class="w-10 h-10 rounded-full" :src="user.image" :alt="user.name">
                        <div class="ps-3">
                            <div class=" text-left text-base font-semibold">{{ user.name }}</div>
                            <div class="font-normal text-gray-500">{{ user.email }}</div>
                        </div>  
                    </th>
                    <td class="p-4 text-xs font-medium text-gray-800 dark:text-neutral-200">{{ user.nik }}</td>
                    <td class="p-4 text-xs font-medium text-gray-800 dark:text-neutral-200">{{ user.swn }}</td>
                    <td class="p-4 text-xs font-medium text-gray-800 dark:text-neutral-200">{{ user.keterangan }}</td>
                    <td class="p-4 text-xs font-medium text-gray-800 dark:text-neutral-200">
                        <div class="flex items-center text-center">
                            <div :class="{'h-2.5 w-2.5 rounded-full bg-green-500 me-2': user.status === 'Online', 'h-2.5 w-2.5 rounded-full bg-red-500 me-2': user.status === 'Offline'}"></div> {{ user.status }}
                        </div>
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import cowok1 from '../assets/cowok1.jpg';

const isDropdownOpen = ref(false);
const searchQuery = ref('');
const users = ref([
    { id: 1, name: 'Neil Sims', email: 'neil.sims@gmail.com', nik: '3216019138120', swn: 'Warga Negeri Indonesia', keterangan: 'Pindahan', status: 'Online', image: cowok1},
    { id: 2, name: 'Bonnie Green', email: 'bonnie@gmail.com', nik: '1267498784769', swn: 'Warga Negeri Indonesia', keterangan: 'Pindahan', status: 'Online', image: cowok1},
    { id: 3, name: 'Jese Leos', email: 'jese@gmail.com', nik: '1268648612821', swn: 'Warga Negeri Indonesia', keterangan: 'Pindahan', status: 'Online', image: cowok1 },
    { id: 4, name: 'Thomas Lean', email: 'thomas@gmail.com', nik: '1472397719711', swn: 'Warga Negeri Asing', keterangan: 'Kososng', status: 'Online', image: cowok1 },
    { id: 5, name: 'Leslie Livingston', email: 'leslie@gmail.com', nik: '1236126398612', swn: 'Warga Negeri Indonesia', keterangan: 'Pindahan', status: 'Offline', image: cowok1},
]);

const filteredUsers = computed(() => {
    const query = searchQuery.value.toLowerCase();
    return users.value.filter(user =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.nik.toLowerCase().includes(query) ||
        user.swn.toLowerCase().includes(query) ||
        user.keterangan.toLowerCase().includes(query)
    );
});

function toggleDropdown() {
    isDropdownOpen.value = !isDropdownOpen.value;
}

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
    const dropdown = document.querySelector('.relative .z-10');
    const button = event.target.closest('button');
    const searchInput = document.getElementById('table-search-users');
    
    if (
        dropdown && !dropdown.contains(event.target) && 
        !button && 
        !searchInput.contains(event.target)
    ) {
        isDropdownOpen.value = false;
    }
});
</script>

<style>
/* Add custom styles here if needed */
</style>