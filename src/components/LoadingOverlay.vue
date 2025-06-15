<!-- components/LoadingOverlay.vue -->
<template>
  <div
    v-if="loadingStore.isLoading"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="text-center">
      <img src="../assets/loading.gif" alt="Loading..." class="w-16 h-16 mx-auto" />
      <p class="mt-2 text-white text-sm">Loading, please wait...</p>
    </div>
  </div>
</template>

<script setup>
import { useLoadingStore } from '../stores/loading'
const loadingStore = useLoadingStore()
</script>
