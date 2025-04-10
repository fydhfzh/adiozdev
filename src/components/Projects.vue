<script setup>
import { onMounted, reactive } from 'vue';
import Project from './Project.vue';
import getRepos from '../api/api';

const repos = reactive({
  data: [],
});

onMounted(async () => {
  try {
    const data = await getRepos();
    repos.data = data.filter((data) => parseInt(data.created_at) > 2023);
    console.log(repos);
  } catch (error) {
    console.error('Failed to fetch github repository data: ', error);
  }
});
</script>
<template>
  <section>
    <h1 class="text-3xl font-extrabold opacity-90">Personal Projects</h1>
    <div class="grid grid-cols-1 gap-2.5 6xl:grid-cols-2">
      <Project v-for="(repo, index) in repos.data" :name="repo.name" :description="repo.description" :tags="repo.tags" :html-url="repo.html_url" :key="index" />
      <div class="bg-contrast text-secondary rounded-md mt-2 py-2 flex justify-center items-center font-bold text-md">
        <a href="https://github.com/fydhfzh" class="flex justify-center items-center" target="_blank"
          >See more &nbsp;<font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" />
        </a>
      </div>
    </div>
  </section>
</template>
