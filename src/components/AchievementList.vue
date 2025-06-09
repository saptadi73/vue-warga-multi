<template>
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Nama Target
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Progres
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Status
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Aksi
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="item in items" :key="item.id">
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm font-medium text-gray-900">{{ item.name }}</div>
            <div class="text-sm text-gray-500">
              {{ item.progress }}/{{ item.target }}
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="w-full bg-gray-200 rounded-full h-2.5">
              <div
                class="h-2.5 rounded-full transition-all duration-500"
                :class="{
                  'bg-green-500': item.status === 'completed',
                  'bg-yellow-500': item.status === 'in-progress',
                  'bg-red-500': item.status === 'not-started',
                }"
                :style="{ width: item.progress + '%' }"
              ></div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <span
              class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
              :class="{
                'bg-green-100 text-green-800': item.status === 'completed',
                'bg-yellow-100 text-yellow-800': item.status === 'in-progress',
                'bg-red-100 text-red-800': item.status === 'not-started',
              }"
            >
              {{ getStatusText(item.status) }}
            </span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <button class="text-blue-600 hover:text-blue-900 mr-3">
              Detail
            </button>
            <button class="text-gray-600 hover:text-gray-900">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
  },
  methods: {
    getStatusText(status) {
      const statusMap = {
        completed: "Selesai",
        "in-progress": "Dalam Proses",
        "not-started": "Belum Dimulai",
      };
      return statusMap[status] || status;
    },
  },
};
</script>
