<template>
  <div class="dashboard">
    <h1>Dashboard Pencapaian</h1>
    <div class="overview">
      <MetricCard
        title="Total Iuran"
        :value="totalIuran"
        icon="savings"
        color="blue"
      />
      <MetricCard
        title="Kas Masuk"
        :value="totalPemasukan"
        icon="wallet"
        color="green"
      />
      <MetricCard
        title="Kas Keluar"
        :value="totalPengeluaran"
        icon="shopping_cart"
        color="orange"
      />
      <MetricCard
        title="Saldo"
        :value="saldo"
        icon="point_of_sale"
        color="purple"
      />
    </div>
    <div><KeuanganLineChart/></div>
    <div>
      <PieDonutChart/>
    </div>
    <LoadingOverlay/>
  </div>
</template>

<script>
import MetricCard from "./MetricCard.vue";
import ProgressChart from "./ProgressCard.vue";
import axios from "axios";
import { onMounted, computed } from "vue";
import { ref } from "vue";
import { BASE_URL } from "../base.url.utils";
import PieDonutChart from "./PieDonutChart.vue";
import KeuanganLineChart from "./KeuanganLineChart.vue";
import { useLoadingStore } from "../stores/loading";
import LoadingOverlay from "../components/LoadingOverlay.vue";




export default {
  components: {
    MetricCard,
    ProgressChart,
    PieDonutChart,
    KeuanganLineChart,
    LoadingOverlay,
  },
  data() {
    return {
      totalIuran: null,
      totalPemasukan: null,
      totalPengeluaran: null,
      saldo: null,
    };
  },
  computed: {
    percentage() {
      return Math.round((this.achieved / this.totalTarget) * 100);
    },
  },

  methods: {
    async getTotalKabeh() {
      this.loadingStore.show();
      try {
        const TotalKabehane = await axios.get(`${BASE_URL}bayar/total/total`);
        console.log("total kabehane :", TotalKabehane.data);
        const totalIuranku = parseInt(TotalKabehane.data.totalIuranKabeh);
        const totalPemasukanku = parseInt(TotalKabehane.data.totalMasukKabeh);
        const totalPengeluaranku = parseInt(
          TotalKabehane.data.totalKeluarKabeh
        );
        const saldoku = totalIuranku + totalPemasukanku - totalPengeluaranku;

        this.totalIuran = this.formatRupiah(totalIuranku);
        this.totalPemasukan = this.formatRupiah(totalPemasukanku);
        this.totalPengeluaran = this.formatRupiah(totalPengeluaranku);
        this.saldo = this.formatRupiah(saldoku);
      } catch (error) {
        console.log(error);
      }finally{
        this.loadingStore.hide();
      }
    },

    formatRupiah(number) {
      const amount = number;

      // Format as Indonesian Rupiah (IDR)
      const formattedIDR = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0, // Rupiah usually doesn't show decimals
        maximumFractionDigits: 0,
      }).format(amount);

      return formattedIDR;
    },
  },
  created() {
    this.getTotalKabeh();
  },
  setup() {
    const loadingStore = useLoadingStore();
    return {loadingStore}
  }
};
</script>

<style>
.dashboard {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.overview {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

.achievement-list {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

h1 {
  color: #2c3e50;
  margin-bottom: 30px;
}

/* Tambahkan ini jika belum ada */
.charts {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}
</style>
