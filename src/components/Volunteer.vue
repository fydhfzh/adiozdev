<script setup>
const { company, role, date, activities } = defineProps(['company', 'role', 'date', 'activities']);
</script>
<template>
  <div class="inline-block w-full mt-2 p-2 rounded-md hover:backdrop-blur-2xl hover:bg-secondary/5">
    <h2 class="text-xl font-semibold opacity-85">{{ company + ' - ' + role }}</h2>
    <h3 class="opacity-50">{{ date }}</h3>
    <ul v-if="activities.length > 0" class="ml-5">
      <li v-for="a in activities" class="mt-2 list-outside list-disc text-md opacity-75 text-pretty">{{ a }}</li>
    </ul>
  </div>
</template>
