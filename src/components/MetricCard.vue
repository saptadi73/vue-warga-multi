<template>
  <div class="bg-white rounded-lg shadow p-6 flex items-start" 
       :class="{
         'border-l-4 border-blue-500': color === 'blue',
         'border-l-4 border-green-500': color === 'green',
         'border-l-4 border-orange-500': color === 'orange',
         'border-l-4 border-purple-500': color === 'purple'
       }">
    <div class="text-3xl mr-4"><span class="material-icons text-[#e52bf1]">{{ icon }}</span></div>
    <div>
      <h3 class="text-sm font-medium text-gray-500">{{ title }}</h3>
      <p class="text-2xl font-bold text-gray-800">{{ value }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    value: [String, Number],
    icon: String,
    color: String
  }
}
</script>