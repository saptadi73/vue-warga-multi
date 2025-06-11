import axios from "axios";
import { BASE_URL } from "../base.url.utils";
import { ref } from "vue";

const jmlWargaSetorBulan = ref(0);
const listWargaSetorBulan = ref([]);
const jmlSetoranIuranBulan = ref(0);

const jmlPengeluaranBulan = ref(0);
const listPengeluaranBulan = ref([]);

const jmlPemasukanLainBulan = ref(0);
const listPemasukanLainBulan = ref([]);
const jmlTransaksiPemasukanLain = ref(0);

const jumlahKK = ref(0);
const listKK = ref([]);

async function getWargaSetorBulan() {
  try {
    const response = await axios.get(`${BASE_URL}bayar/daftar/setor`);
    const data = response.data.data;
    listWargaSetorBulan.value = data;
    console.log("warga setor iuran bulan ini : ", data);
  } catch (error) {
    console.log(error);
  }
  return listWargaSetorBulan.value;
}

async function getJmlSetoranBulan() {
  try {
    const response = await axios.get(`${BASE_URL}bayar/iuran/bulanan`);
    const data = response.data.data[0].jumlah;
    jmlSetoranIuranBulan.value = data;
    // console.log("Jumlah setor iuran bulan ini : ", data);
  } catch (error) {
    console.log(error);
  }
  return jmlSetoranIuranBulan.value;
}

async function getJumlahWargaSetoranBulan() {
  const data = await getWargaSetorBulan();
  jmlWargaSetorBulan.value = data.length;
  return jmlWargaSetorBulan.value;
}

async function getListKK() {
  try {
    const response = await axios.get(`${BASE_URL}warga/list/kk`);
    const data = response.data.result;
    listKK.value = data;
    console.log("list KK : ", data);
  } catch (error) {
    console.log(error);
  }
  return listKK.value;
}

async function getJumlahKK() {
  const data = await getListKK();
  jumlahKK.value = data.length;
  return jumlahKK.value;
}

async function getListPemasukanBulan() {
  try {
    const tanggal = new Date();
    const month = tanggal.getMonth(); // September
    const year = tanggal.getFullYear();

    const startDate = new Date(year, month, 1); // September 1, 2023
    const endDate = new Date(year, month + 1, 1);

    const url = `${BASE_URL}bayar/list/anggaran`;
    const id_type_anggaran = 1;
    const id_jenis_anggaran = 0;
    const tanggal_awal = "2025-06-01";
    const tanggal_akhir = "2025-06-30";

    formValues.value = {
      id_type_anggaran: id_type_anggaran,
      id_jenis_anggaran: id_jenis_anggaran,
      tanggal_akhir: tanggal_akhir,
      tanggal_awal: tanggal_awal,
    };
    console.log("hasil formvalue yang benar :", formValues.value);
    const listSetorAnggaran = await axios.post(url, formValues.value, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    listPemasukanLainBulan.value = listSetorAnggaran.data.result;
    console.log(
      " Hasil Laporan Setoran Anggaran : ",
      listPemasukanLainBulan.value
    );
  } catch (error) {
    console.log(error);
  }
  return listPemasukanLainBulan.value;
}

async function getjmlPemasukanLainBulan() {
  try {
    const response = await axios.get(`${BASE_URL}bayar/masuk/bulanan`);
    const data = response.data.data[0].jumlah;
    jmlPemasukanLainBulan.value = data;
    console.log("jumlah pemasukan bulan ini : ", data);
  } catch (error) {
    console.log(error);
  }
  return jmlPemasukanLainBulan.value;
}

async function getTransaksiPemasukanLainBulan() {
  const TransaksiPemasukanBulanIni = await getListPemasukanBulan();
  jmlTransaksiPemasukanLain.value = TransaksiPemasukanBulanIni.length;
  return jmlTransaksiPemasukanLain.value;
}

async function getListPengeluaranBulan() {
  try {
    const tanggal = new Date();
    const month = tanggal.getMonth(); // September
    const year = tanggal.getFullYear();

    const startDate = new Date(year, month, 1); // September 1, 2023
    const endDate = new Date(year, month + 1, 1);

    const url = `${BASE_URL}bayar/list/anggaran`;
    const id_type_anggaran = 2;
    const id_jenis_anggaran = 0;
    const tanggal_awal = startDate;
    const tanggal_akhir = endDate;

    formValues.value = {
      id_type_anggaran: id_type_anggaran,
      id_jenis_anggaran: id_jenis_anggaran,
      tanggal_akhir: tanggal_akhir,
      tanggal_awal: tanggal_awal,
    };
    console.log("hasil formvalue yang benar :", formValues.value);
    const listSetorAnggaran = await axios.post(url, formValues.value, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    listPengeluaranBulan.value = listSetorAnggaran.data.result;
    console.log(
      " Hasil Laporan Setoran Anggaran : ",
      listPengeluaranBulan.value
    );
  } catch (error) {
    console.log(error);
  }
  return listPengeluaranBulan.value;
}

async function getJmlPengeluaranBulan() {
    try {
    const response = await axios.get(`${BASE_URL}bayar/keluar/bulanan`);
    const data = response.data.data[0].jumlah;
    jmlPengeluaranBulan.value = data;
    console.log("jumlah pengeluaran bulan ini : ", data);
  } catch (error) {
    console.log(error);
  }
  return jmlPengeluaranBulan.value;
}

// Export jika ingin dipakai di komponen
export {
  jmlWargaSetorBulan,
  listWargaSetorBulan,
  jmlSetoranIuranBulan,
  jmlPengeluaranBulan,
  listPengeluaranBulan,
  jmlPemasukanLainBulan,
  listPemasukanLainBulan,
  jumlahKK,
  listKK,
  getWargaSetorBulan,
  getJmlSetoranBulan,
  getJumlahWargaSetoranBulan,
  getListKK,
  getJumlahKK,
  getListPemasukanBulan,
  getjmlPemasukanLainBulan,
  getListPengeluaranBulan,
  getJmlPengeluaranBulan,
  getTransaksiPemasukanLainBulan,
  jmlTransaksiPemasukanLain
};
