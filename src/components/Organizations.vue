<script setup>
import { onMounted, ref, useTemplateRef } from 'vue';
import Organization from './Organization.vue';

const organizations = [
  {
    name: 'Jak Geutanyo Rantoe 2021',
    role: 'Information Media Staff',
    date: 'Jan - Feb 2021',
    activity: 'Serve as staff in managing event design and publication',
  },
  {
    name: 'Schematics 2021',
    role: 'Security and Permit Staff',
    date: 'May - Oct 2021',
    activity: 'Serve as staff in arranging permits and event equipment',
  },
  {
    name: 'Schematics 2022',
    role: 'Security and Permit Expert Staff',
    date: 'May - Oct 2022',
    activity: 'Serve as expert staff in arranging permits and event equipment',
  },
  {
    name: 'HMTC ITS',
    role: 'Social Community Staff',
    date: 'Mar 2022 - Mar 2023',
    activity: 'Became the chief organizer of breaking the fast with orphans at B.J. Habibie orphanage and helps other work program',
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
    <h1 class="text-3xl font-extrabold">Organizations</h1>
    <div class="lg:grid grid-cols-2 gap-2.5">
      <Organization v-for="(organization, index) in organizations" v-bind="organization" :key="index" />
    </div>
  </section>
</template>
