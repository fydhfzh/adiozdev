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
  <a
    :href="htmlUrl"
    target="_blank"
    class="pl-4 py-2 mt-2 overflow-hidden transition-all border-l-4 hover:border-l-32 border-contrast shadow-contrast rounded-md rounded-l-none hover:backdrop-blur-2xl hover:bg-secondary/5"
  >
    <h2 class="font-bold text-lg line-clamp-1">{{ repo.name }}</h2>
    <div>
      <p class="text-ellipsis line-clamp-2 opacity-65">{{ repo.description }}</p>
    </div>
    <div class="flex flex-wrap p-2 gap-2">
      <Tag v-for="tag in repo.tags" :tag="tag" />
    </div>
  </a>
</template>
