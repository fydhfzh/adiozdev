<script setup>
import { onMounted, reactive, ref, useTemplateRef } from 'vue';
import Project from './Project.vue';
import getRepos from '../api/api';

const repos = reactive({
  data: [],
});

onMounted(async () => {
  try {
    const data = await getRepos();
    repos.data = data.filter((data) => parseInt(data.created_at) > 2023);
  } catch (error) {
    console.error('Failed to fetch github repository data: ', error);
  }
});

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
    <h1 class="text-3xl font-extrabold opacity-90">Personal Projects</h1>
    <div class="grid grid-cols-1 gap-2.5 6xl:grid-cols-2">
      <Project
        v-for="(repo, index) in repos.data"
        :name="repo.name"
        :description="repo.description"
        :tags="repo.topics"
        :html-url="repo.html_url"
        :key="index"
      />
      <div class="bg-contrast text-secondary rounded-md mt-2 py-2 flex justify-center items-center font-bold text-md">
        <a href="https://github.com/fydhfzh" class="flex justify-center items-center" target="_blank"
          >See more &nbsp;<font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" />
        </a>
      </div>
    </div>
  </section>
</template>
