<script setup>
import BurgerNavigation from './BurgerNavigation.vue';
import Navigation from './Navigation.vue';
</script>
<template>
  <div class="flex justify-between">
    <h1 class="flex-1 p-2 font-extrabold">ADIOZ</h1>
    <div class="flex-2">
      <Navigation class="hidden md:flex" />
    </div>
    <div class="flex-1 items-end align-middle">
      <BurgerNavigation class="block md:hidden" />
    </div>
  </div>
</template>
