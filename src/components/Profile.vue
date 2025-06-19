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
  <section ref="target" :class="[isVisible ? animateClass : idleClass]">
    <h1 class="text-3xl font-extrabold opacity-90">Profile</h1>
    <div class="w-full justify-center items-center text-pretty opacity-75">
      <p class="text-md mt-2">
        I’m excited to start my career as a Backend Engineer, where I can apply my academic knowledge and enthusiasm for coding to real-world projects.
      </p>
      <p class="text-md mt-2">
        Through my internship at a digital solutions company, I gained practical experience with technologies like <strong>.NET MVC</strong> and
        <strong>PostgreSQL</strong>.
      </p>
      <p class="text-md mt-2 opacity-100">
        Additionally, I’m passionate about Golang for API development (REST, RPC, and gRPC), particularly using frameworks like
        <strong>Gin</strong> or <strong>Echo</strong> alongside
        <span class="inline-block"
          ><strong><a href="https://gorm.io/" target="_blank">Gorm</a></strong></span
        >. I’m focused on building efficient, scalable systems and eager to deepen my expertise in server-side development while contributing to high-quality
        backend solutions.
      </p>
    </div>
  </section>
</template>
