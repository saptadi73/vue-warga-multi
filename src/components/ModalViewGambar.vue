<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
  >
    <div
      class="relative bg-white dark:bg-neutral-800 rounded-xl shadow-lg w-full max-w-3xl mx-4 overflow-hidden"
    >
      <!-- Header -->
      <div class="flex justify-between items-center bg-gradient-to-r from-purple-600 to-purple-400 px-5 py-3">
        <h3 class="text-white font-bold text-lg">{{ title }}</h3>
        <button
          @click="$emit('closeButton')"
          class="text-white bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-1"
        >
          ✕
        </button>
      </div>

      <!-- Body -->
      <div class="p-4 text-center">
        <p class="text-gray-700 dark:text-gray-200 mb-4">{{ message_modal }}</p>
        <img
          :src="imageSource"
          alt="Preview"
          class="max-w-full max-h-[70vh] object-contain rounded-md mx-auto"
        />
      </div>

      <!-- Footer Buttons -->
      <div class="flex justify-end items-center gap-2 px-5 py-3 border-t dark:border-neutral-700">
        <button
          @click="$emit('cancelButton')"
          class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg dark:bg-neutral-700 dark:text-white dark:hover:bg-neutral-600"
        >
          Close
        </button>
        <button
          @click="$emit('okeButton')"
          class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
        >
          OK
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    message_modal: String,
    imageSource: String,
  },
};
</script>
