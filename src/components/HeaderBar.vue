<script setup>
import { Bird } from "lucide-vue-next";
</script>

<template>
  <header
    class="body-font sticky top-0 bg-white text-gray-600 shadow-md dark:bg-gray-700"
  >
    <div
      class="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row"
    >
      <a
        class="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0"
      >
        <Bird :size="32" />
        <span class="ml-3 text-xl">Tailblocks</span>
      </a>
      <nav
        class="flex flex-wrap items-center justify-center text-base md:ml-auto"
      >
        <a class="mr-5 hover:text-gray-900">First Link</a>
        <a class="mr-5 hover:text-gray-900">Second Link</a>
        <a class="mr-5 hover:text-gray-900">Third Link</a>
        <a class="mr-5 hover:text-gray-900">Fourth Link</a>
      </nav>
      <button
        class="mt-4 inline-flex items-center rounded border-0 bg-gray-100 px-3 py-1 text-base hover:bg-gray-200 focus:outline-none md:mt-0"
      >
        Button
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="ml-1 h-4 w-4"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header>
</template>
