<template>
  <div class="h-64 flex items-end space-x-4">
    <div
      v-for="(item, index) in data"
      :key="index"
      class="flex-1 flex flex-col items-center"
    >
      <div class="text-xs text-gray-500 mb-2">{{ item.month }}</div>
      <div class="w-full bg-gray-200 rounded-t-md relative" style="height: 90%">
        <div
          class="w-full bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-md transition-all duration-500"
          :style="{ height: item.progress + '%' }"
        ></div>
        <div class="absolute -bottom-6 text-xs font-medium text-gray-700">
          {{ item.progress }}%
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
};
</script>
