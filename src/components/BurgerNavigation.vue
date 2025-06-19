<script setup lang="ts">
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ref, watch } from 'vue';

const isVisible = ref(false);
const toggleNavigation = () => {
  isVisible.value = !isVisible.value;
};

const sections = ['#profile', '#experiences', '#projects', '#organizations', '#volunteers'];

const currSection = ref('#profile');

const setCurrSection = (e) => {
  currSection.value = e.target.getAttribute('href');
  console.log(e.target.getAttribute('href'));
};

watch(isVisible, () => {
  console.log(isVisible.value);
});
</script>
<template>
  <nav class="inline-block md:hidden fixed top-0 right-0 p-2 h-dvh bg-black/30">
    <div class="rounded-md p-2 bg-gray-900 flex gap-2">
      <div>
        <button @click="toggleNavigation" class="cursor-pointer">
          <FontAwesomeIcon :icon="faBars" size="2xl" />
        </button>
      </div>
      <div v-if="isVisible" class="flex flex-col text-2xl gap-8">
        <a
          v-for="section in sections"
          :href="section"
          @click="setCurrSection"
          :class="[currSection == section ? 'font-bold' : 'opacity-65', 'transition-all']"
          >{{ section.charAt(1).toUpperCase() + section.substring(2) }}</a
        >
      </div>
    </div>
  </nav>
</template>
