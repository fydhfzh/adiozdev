<script setup>
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ref } from 'vue';

const sections = ['#profile', '#experiences', '#projects', '#organizations', '#volunteers'];

const currSection = ref('#profile');

const setCurrSection = (e) => {
  currSection.value = e.target.getAttribute('href');
  console.log(e.target.getAttribute('href'));
};
</script>
<template>
  <div class="hidden md:flex md:flex-col md:text-lg md:pt-24 md:gap-2.5">
    <a
      v-for="section in sections"
      :href="section"
      @click="setCurrSection"
      :class="[currSection == section ? 'font-bold animate-slide-right' : 'opacity-65', 'transition-all']"
      ><FontAwesomeIcon :icon="faChevronRight" v-if="currSection == section" />&nbsp;{{ section.charAt(1).toUpperCase() + section.substring(2) }}</a
    >
  </div>
</template>
