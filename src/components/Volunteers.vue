<script setup>
import { onMounted, ref, useTemplateRef } from 'vue';
import Volunteer from './Volunteer.vue';

const volunteers = [
  {
    company: 'Pusat Kajian Halal ITS',
    role: 'Halal Supervisor',
    date: 'Apr - Dec 2022',
    activities: [
      'Learning what is halal product according to Islamic law.',
      'Assisting micro/small/medium enterprises (MSMEs) to gain halal certification for their products.',
      'Reporting the result to Pusat Kajian Halal ITS.',
    ],
  },
];

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
  <section ref="target" :class="[isVisible ? animateClass : idleClass]">
    <h1 class="text-3xl font-extrabold">Volunteers</h1>
    <div>
      <Volunteer v-for="(volunteer, index) in volunteers" v-bind="volunteer" :key="index" />
    </div>
  </section>
</template>
