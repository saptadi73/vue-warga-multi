import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../warga/InputBlokWarga.vue"),
    },
    {
        path: "/main",
        name: "main",
        component: () => import("../views/MainLayoutView.vue"),
    },
    {
      path: "/menu",
      name: "menu",
      component: () => import("../views/MainPageLayout.vue"),  
    },
    {
      path: "/form",
      name: "form",
      component: () => import("../views/MainFormSample.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/MainProfilePageView.vue"),
      children: [
        {
          path: "input",
          name: "input",
          component: () => import("../profile/IsiProfileEntity.vue"),
        },
        {
          path: "input/polygon",
          name: "input_polygon",
          component: () => import("../profile/IsiDataPolygon.vue"),
        },
        {
          path: "register/user",
          name: "register_user",
          component: () => import("../profile/RegisterUser.vue"),
        },
        
      ],
    },
    {
      path: "/warga",
      name: "warga",
      component: () => import("../views/MainWargaPageView.vue"),
      children: [
        {
          path: "input/blok",
          name: "input_blok",
          component: () => import("../warga/InputBlokWarga.vue"),
        },
        {
          path: "input/warga",
          name: "input_warga",
          component: () => import("../warga/IsiDataWarga.vue"),
        },
        {
          path: "input/type",
          name: "input_type",
          component: () => import("../warga/InputTypeWarga.vue"),
        },
        {
          path: "input/pekerjaan",
          name: "input_pekerjaan",
          component: () => import("../warga/InputPekerjaanWarga.vue"),
        },
        {
          path: "input/status",
          name: "input_status",
          component: () => import("../warga/InputStatusWarga.vue"),
        },
        {
          path: "modal",
          name: "modal",
          component: () => import("../components/ToastCard.vue"),
        },
        {
          path: 'daftar/kk',
          name: 'daftar_kk',
          component: () => import('../warga/DaftarKkWarga.vue'),
        },
        {
          path: 'daftar/table',
          name: 'daftar_table',
          component: () => import('../warga/TabelBlokWarga.vue'),
        },
        {
          path: 'tambah/warga/:nik/:kk',
          name:  'tambah_warga',
          component: () => import('../warga/TambahWarga.vue'),
        },
        {
          path: 'edit/warga/:nik/:kk',
          name:  'edit_warga',
          component: () => import('../warga/EditWarga.vue'),
        },
        {
          path: 'edit/kk/:nik/:kk',
          name:  'edit_rumah',
          component: () => import('../warga/EditRumahKk.vue'),
        },
        {
          path: 'del/kk/:nik/:kk',
          name:  'del_rumah',
          component: () => import('../warga/DelRumahWarga.vue'),
        },
        
      ],
    },
    {
      path: "/anggaran",
      name: "anggaran",
      component: () => import("../views/MainAnggaranPageView.vue"),
      children: [
        {
          path: "input/type",
          name: "input_type_anggaran",
          component: () => import("../anggaran/InputTypeAnggaran.vue"),
        },
        {
          path: "input/anggaran",
          name: "input_anggaran",
          component: () => import("../anggaran/InputAnggaranWarga.vue"),
        },
        {
          path: "input/jenis/anggaran/masuk",
          name: "input_jenis_anggaran_masuk",
          component: () => import("../anggaran/IsiJenisAnggaranMasuk.vue"),
        },
        {
          path: "edit/jenis/anggaran/masuk/:id",
          name: "edit_jenis_anggaran_masuk",
          component: () => import("../anggaran/EditJenisAnggaranMasuk.vue"),
        },
        {
          path: "input/jenis/anggaran/keluar",
          name: "input_jenis_anggaran_keluar",
          component: () => import("../anggaran/IsiJenisAnggaranKeluar.vue"),
        },
        {
          path: "edit/jenis/anggaran/keluar/:id",
          name: "edit_jenis_anggaran_keluar",
          component: () => import("../anggaran/EditJenisAnggaranKeluar.vue"),
        },
        {
          path: "upload/bukti/:id",
          name: "upload_bukti_anggaran",
          component: () => import("../anggaran/InputFileBuktiSetor.vue"),
        }
      ],
    },
    {
      path: "/iuran",
      name: "iuran",
      component: () => import("../views/MainIuranPageView.vue"),
      children: [
        {
          path: "input/iuran",
          name: "input_iuran",
          component: () => import("../iuran/IsiIuranWarga.vue"),
        },
        {
          path: "input/jenis",
          name: "input_jenis_iuran",
          component: () => import("../iuran/IsiJenisIuran.vue"),
        },
        {
          path: "edit/jenis/:id",
          name: "edit_jenis_iuran",
          component: () => import("../iuran/EditJenisIuran.vue"),
        },
        {
          path: "bayar/iuran",
          name: "bayar_iuran",
          component: () => import("../warga/TableKKBayarIuran.vue"),
        },
        {
          path: "bayar/kk/:id/:nama",
          name: "bayar_iuran_kk",
          component: () => import("../iuran/BayarIuranKK.vue"),
        },
      ],
    },

    {
      path: "/cobasidebar",
      name: "cobasidebar",
      component: () => import("../components/CobaSidebar.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/MainDashboard.vue"),
    },
    {
      path: "/polygon",
      name: "polygon",
      component: () => import("../profile/GetPolygonData.vue"),
    },
    {
      path: "/daftarkk",
      name: "daftarkk",
      component: () => import("../components/DaftarKK.vue"),
    },

    {
      path: "/daftarkk/update",
      name: "updatekk",
      component: () => import("../components/UpdateTabelKK.vue"),
    },
    {
      path: "/status",
      name: "status",
      component: () => import("../warga/TabelStatusWarga.vue"),
    }

  ],
});

export default router;
