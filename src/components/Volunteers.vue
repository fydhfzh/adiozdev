<script setup>
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
</script>
<template>
  <section>
    <h1 class="text-3xl font-extrabold">Volunteers</h1>
    <div>
      <Volunteer v-for="(volunteer, index) in volunteers" v-bind="volunteer" :key="index" />
    </div>
  </section>
</template>
