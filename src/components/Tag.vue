<script setup>
const props = defineProps({
  tag: String,
});
</script>
<template>
  <span class="flex justify-center items-center rounded-2xl border-l-1 border-b-1 border-white mt-2 text-white w-auto text-xs">
    <h3>{{ props.tag }}</h3>
  </span>
</template>
