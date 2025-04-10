<script setup>
import { ref } from 'vue';

const sections = ['#profile', '#experiences', '#projects', '#organizations', '#volunteers'];

const currSection = ref('#profile');

const setCurrSection = (e) => {
  currSection.value = e.target.getAttribute('href');
  console.log(e.target.getAttribute('href'));
};
</script>
<template>
  <div class="flex flex-col text-lg pt-24 gap-2.5">
    <a v-for="section in sections" :href="section" @click="setCurrSection" :class="[currSection == section ? 'font-bold' : 'opacity-65']"
      ><font-awesome-icon :icon="['fas', 'chevron-right']" v-if="currSection == section" />&nbsp;{{ section.charAt(1).toUpperCase() + section.substring(2) }}</a
    >
  </div>
</template>
