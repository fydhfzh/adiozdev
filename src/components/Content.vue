<script setup>
import Projects from './Projects.vue';
import Experiences from './Experiences.vue';
import Volunteers from './Volunteers.vue';
import Sidebar from './Sidebar.vue';
import Profile from './Profile.vue';
import Organizations from './Organizations.vue';
import Footer from './Footer.vue';
</script>
<template>
  <div class="w-full md:flex xl:w-1/2">
    <Sidebar />
    <main class="pr-5 pl-5 md:w-1/2 md:py-24">
      <Profile id="profile" />
      <Experiences class="mt-20" id="experiences" />
      <Projects class="mt-20" id="projects" />
      <Organizations class="mt-20" id="organizations" />
      <Volunteers class="mt-20" id="volunteers" />
      <Footer class="mt-20" />
    </main>
  </div>
</template>
