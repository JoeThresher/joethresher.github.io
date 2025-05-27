<script setup>
import { Bird } from "lucide-vue-next";
</script>

<template>
  <header
    class="flex h-[80px] w-full flex-col items-center justify-center bg-white shadow-md md:flex-row md:justify-between md:px-10 dark:bg-gray-700"
  >
    <nav class="mx-auto flex w-[92%] items-center justify-between">
      <div class="w-auto font-bold text-blue-950">
        <Bird class="inline" size="24px" />
        Sample Header Bar
      </div>
      <div
        class="absolute top-[-100%] left-0 flex min-h-[60vh] w-full items-center px-5 duration-500 md:static md:min-h-fit md:w-auto"
      >
        <ul
          class="flex flex-col gap-8 md:flex-row md:items-center md:gap-[4vw]"
        >
          <li>
            <a class="hover:text-gray-500" href="#">Home</a>
          </li>
          <li>
            <a class="hover:text-gray-500" href="#">About</a>
          </li>
          <li>
            <a class="hover:text-gray-500" href="#">Contact Support</a>
          </li>
          <li>
            <a class="hover:text-gray-500" href="#">Courses</a>
          </li>
          <li>
            <a class="hover:text-gray-500" href="#">Pricing</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
