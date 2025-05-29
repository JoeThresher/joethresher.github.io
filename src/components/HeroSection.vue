<script setup></script>

<template>
  <section class="body-font">
    <div
      class="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row"
    >
      <div
        class="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:justify-evenly md:pr-16 md:text-left lg:flex-grow lg:pr-24"
      >
        <h1 class="title-font mb-4 text-3xl font-medium sm:text-4xl">
          Joe Thresher's <br class="hidden lg:inline-block" />GitHub
        </h1>
        <p class="mb-8 leading-relaxed md:max-w-xl">
          Hello! I'm Joe, a software engineer with a passion for free and open
          source software. This page is very much a work in progress. I'm going
          to write more text here at some point. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Recusandae fugit magnam, enim, qui
          necessitatibus minus placeat beatae itaque non nesciunt, sunt
          blanditiis voluptatum assumenda! Aliquam id cum nobis cupiditate?
          Laudantium!
        </p>
        <div class="flex justify-center">
          <button
            class="inline-flex rounded border-0 bg-primary px-6 py-2 text-lg text-primary-content hover:bg-primary/80 focus:outline-none"
          >
            Button
          </button>
          <button
            class="ml-4 inline-flex rounded border-0 bg-base-200 px-6 py-2 text-lg text-base-content hover:bg-base-300 focus:outline-none"
          >
            Button
          </button>
        </div>
      </div>
      <div class="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
        <img
          class="rounded object-cover object-center"
          alt="hero"
          src="https://dummyimage.com/720x600"
        />
      </div>
    </div>
  </section>
</template>
