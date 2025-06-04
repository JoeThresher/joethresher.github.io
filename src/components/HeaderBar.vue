<script setup>
// import { ref } from "vue";
import { Bird } from "lucide-vue-next";
import ThemeChanger from "./ThemeChanger.vue";

// const technicalExperience = ref(null);

// function scrollTo() {
//   technicalExperience.value.scrollIntoView({ behavior: "smooth" });
// }
</script>

<template>
  <header class="body-font sticky top-0 bg-base-100 shadow-md">
    <div
      class="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row"
    >
      <a class="title-font mb-4 flex items-center font-medium md:mb-0">
        <Bird :size="32" />
        <span class="ml-3 text-xl">Joe's GitHub</span>
      </a>
      <nav
        class="flex flex-wrap items-center justify-center text-base md:ml-auto"
      >
        <a class="mr-5 hover:text-neutral-500">About</a>
        <a href="#technical-experience" class="mr-5 hover:text-neutral-500"
          >Experience</a
        >
        <a class="mr-5 hover:text-neutral-500">Third Link</a>
        <a
          href="https://www.linkedin.com/in/josephthresher/"
          target="_blank"
          rel="noopener noreferrer"
          noreferrer
          class="mr-5 hover:text-neutral-500"
          >LinkedIn</a
        >
      </nav>
      <ThemeChanger />
    </div>
  </header>
</template>
