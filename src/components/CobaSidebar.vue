<template>
    <div>
      <!-- Sidebar -->
      <div
        :class="{
          'w-14': !isiSideBar,
          'w-64': isiSideBar,
        }"
        class="fixed top-0 left-0 z-10 h-full bg-gradient-to-r from-purple-200 to-slate-100 transition-all duration-500 p-3"
      >
        <span
          @click="openSideBar"
          class="material-icons transition-transform duration-500 cursor-pointer bg-purple-700 text-white border border-purple-800 rounded-full absolute -right-3 top-9"
          :class="{ 'rotate-180': !isiSideBar, 'rotate-0': isiSideBar }"
        >
          arrow_back
        </span>
        <div class="flex items-center space-x-2">
          <img src="../assets/logo_rukun.png" class="w-10 h-10" />
          <h1 v-if="isiSideBar" class="font-Poppins text-2xl">
            <span class="font-bold text-[#ca13c5]">IURAN</span>
            <span class="font-semibold text-[#2b94f1]">WARGA</span>
          </h1>
        </div>
  
        <div v-for="menu in menus" :key="menu.title" class="mt-4">
          <div @click="toggleSubmenu(menu)" class="flex items-center cursor-pointer p-2 hover:bg-slate-100 rounded-md">
            <span class="material-icons text-[#e52bf1]">{{ menu.icon }}</span>
            <span v-if="isiSideBar" class="ml-4 text-blue-600">{{ menu.title }}</span>
            <span v-if="isiSideBar && menu.submenu" class="material-icons ml-auto text-blue-600">arrow_drop_down</span>
          </div>
          <ul v-if="menu.open && menu.submenu" class="ml-6 text-[#0824a1] bg-yellow-200 rounded-md">
            <li v-for="sub in menu.submenu" :key="sub.name" class="hover:bg-slate-100 p-1">
              <router-link :to="sub.path" class="block">{{ sub.name }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isiSideBar: false,
        menus: [
          {
            title: "Dashboard",
            icon: "dashboard",
            path: "/dashboard",
          },
          {
            title: "Profile",
            icon: "settings_accessibility",
            submenu: [
              { name: "Profile RT/RW", path: "/profile/input" },
              { name: "Isi Map Wilayah", path: "/profile/input/polygon" },
              { name: "Pendaftaran User", path: "/profile/register/user" },
            ],
            open: false,
          },
          {
            title: "Warga",
            icon: "group",
            submenu: [
              { name: "Isi Blok/No. Baru", path: "/warga/input/blok" },
              { name: "Daftar KK", path: "#" },
              { name: "Isi Jenis Pekerjaan", path: "/warga/input/pekerjaan" },
              { name: "Isi Status Warga", path: "/warga/input/status" },
              { name: "Register Warga Baru", path: "/warga/input/warga" },
            ],
            open: false,
          },
        ],
      };
    },
    methods: {
      openSideBar() {
        this.isiSideBar = !this.isiSideBar;
      },
      toggleSubmenu(menu) {
        menu.open = !menu.open;
      },
    },
  };
  </script>
  
  <style scoped>
  @media (max-width: 768px) {
    .w-64 {
      width: 100%;
    }
  }
  </style>
  