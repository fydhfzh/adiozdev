<script setup>
import Experience from './Experience.vue';

const experiences = [
  {
    company: 'Suitmedia',
    role: 'Backend Engineer Intern',
    date: 'Aug - Dec 2023',
    activities: [
      'Develops a trading operational support system using the .NET and EF6.',
      'Develops bilingual features for several existing features related to issuing letters in English.',
      `Develops new features related to integration between the main system and auxiliary systems using the
ActiveMQ message broker for submitting decisions based on approval based on the role of the authorized
person.`,
      `Making adjustments to the use of OnlyOffice as a tools for displaying previews of documents for each
existing module.`,
    ],
  },
];
</script>
<template>
  <section class="w-full">
    <h1 class="text-3xl font-extrabold opacity-90">Experiences</h1>
    <div v-if="experiences.length > 0">
      <Experience v-for="e in experiences" v-bind="e" />
    </div>
  </section>
</template>
