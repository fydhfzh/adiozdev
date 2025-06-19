<script setup>
const props = defineProps({
  tag: String,
});
</script>
<template>
  <span class="flex justify-center items-center rounded-2xl mt-2 inset-shadow-contrast inset-shadow-md bg-contrast text-white w-auto text-sm font-semibold p-2">
    <h3>{{ props.tag }}</h3>
  </span>
</template>
