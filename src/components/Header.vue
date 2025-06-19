<script setup>
import { ref } from 'vue';
import Navigation from './Navigation.vue';
import BurgerNavigation from './BurgerNavigation.vue';

const initialName = 'Fayyadh Hafizh';
const name = ref('');

const ticker = setInterval(() => {
  if (name.value.length < initialName.length) {
    name.value = name.value + initialName[name.value.length];
  } else {
    clearInterval(ticker);
  }
}, 50);
</script>
<template>
  <div>
    <h1 class="text-5xl font-extrabold">
      <span class="animate-fade-in" v-for="c in name">{{ c }}</span>
    </h1>
    <h3 class="mt-2 text-lg opacity-80">Backend Engineer</h3>
    <Navigation />
  </div>
</template>
