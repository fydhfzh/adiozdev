<script setup>
import Projects from './Projects.vue';
</script>
<template>
  <div class="flex">
    <div class="flex-1 hidden md:inline"></div>
    <div class="flex-2">
      <div>
        <br />
        <h1 class="text-center text-6xl font-extrabold">Adioz Dev.</h1>
        <br />
        <p class="w-full text-justify p-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit optio voluptatem iste ex voluptatibus, illo unde nemo corrupti tempora eum nobis
          animi possimus itaque earum ipsa atque ipsum, incidunt beatae!
        </p>
      </div>
      <br />
      <Projects />
    </div>
    <div class="flex-1 hidden md:inline"></div>
  </div>
</template>
