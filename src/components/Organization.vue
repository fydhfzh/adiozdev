<script setup>
const { name, role, date, activity } = defineProps(['name', 'role', 'date', 'activity']);
</script>
<template>
  <div class="inline-block w-full rounded-md mt-2 p-2 text-pretty hover:backdrop-blur-2xl hover:bg-secondary/5">
    <h2 class="text-xl font-semibold opacity-85">{{ name + ' - ' + role }}</h2>
    <h3 class="opacity-50">{{ date }}</h3>
    <p class="mt-2 list-outside list-disc text-md opacity-75 text-pretty">{{ activity }}</p>
  </div>
</template>
