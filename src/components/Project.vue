<script setup>
import Tag from './Tag.vue';

const repo = defineProps({
  name: String,
  description: String,
  tags: Array,
  htmlUrl: String,
});
</script>
<template>
  <div class="pl-4 py-2 mt-2 overflow-hidden border-l-4 border-contrast shadow-contrast rounded-md rounded-l-none hover:backdrop-blur-2xl hover:bg-secondary/5">
    <h2 class="font-bold text-lg line-clamp-1">
      <a :href="htmlUrl" target="_blank">{{ repo.name }}</a>
    </h2>
    <div>
      <p class="text-ellipsis">{{ repo.description }}</p>
    </div>
    <!-- <div class="grid grid-cols-3 p-2 gap-2">
      <Tag v-for="tag in repo.tags.slice(0, 3)" :tag="tag" />
    </div> -->
  </div>
</template>
