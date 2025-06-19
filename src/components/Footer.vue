<script setup>
import { onMounted, ref, useTemplateRef } from 'vue';

const animateClass = 'transition-all animate-slide-fade-in';
const idleClass = 'opacity-0';
const target = useTemplateRef('target');
const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
      }
    },
    {
      threshold: 0.5,
    }
  );

  observer.observe(target.value);
});
</script>
<template>
  <section ref="target" :class="['flex justify-center pb-10', isVisible ? animateClass : idleClass]">
    <p class="opacity-75 text-pretty">"Dont expect too much on the design, I tried my best as a Backend Developer!" - <strong>Fayyadh Hafizh</strong></p>
  </section>
</template>
