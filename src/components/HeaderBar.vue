<script setup>
import { Bird } from "lucide-vue-next";
import ThemeChanger from "./ThemeChanger.vue";
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
        <a class="mr-5 hover:text-neutral-500">First Link</a>
        <a class="mr-5 hover:text-neutral-500">Second Link</a>
        <a class="mr-5 hover:text-neutral-500">Third Link</a>
        <a class="mr-5 hover:text-neutral-500">Fourth Link</a>
      </nav>
      <ThemeChanger />
    </div>
  </header>
</template>
