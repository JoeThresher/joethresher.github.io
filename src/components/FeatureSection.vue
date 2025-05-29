<script setup>
import { Server, Terminal } from "lucide-vue-next";
</script>

<template>
  <section class="body-font">
    <div class="container mx-auto px-5 py-24">
      <div class="mb-20 flex w-full flex-col text-center">
        <h2
          class="title-font mb-1 text-xs font-medium tracking-widest text-primary"
        >
          ROOF PARTY POLAROID
        </h2>
        <h1 class="title-font text-2xl font-medium sm:text-3xl">
          Technical Experience
        </h1>
      </div>
      <div class="-m-4 flex flex-wrap">
        <div class="p-4 md:w-1/3">
          <div class="flex h-full flex-col rounded-lg bg-base-200 p-8">
            <div class="mb-3 flex items-center">
              <div
                class="mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-content"
              >
                <Server />
              </div>
              <h2 class="title-font text-lg font-medium">Cloud and Server</h2>
            </div>
            <div class="flex-grow">
              <p class="text-base leading-relaxed">
                Certified AWS Cloud Practitioner, homelabber, and Linux
                enthusiast. Experience working with Terraform and Docker for
                infrastructure management and deployment.
              </p>
              <a class="mt-3 inline-flex items-center text-primary"
                >Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="p-4 md:w-1/3">
          <div class="flex h-full flex-col rounded-lg bg-base-200 p-8">
            <div class="mb-3 flex items-center">
              <div
                class="mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-content"
              >
                <Terminal />
              </div>
              <h2 class="title-font text-lg font-medium">
                Full Stack Development
              </h2>
            </div>
            <div class="flex-grow">
              <p class="text-base leading-relaxed">
                Experience with both frontend and backend development using
                modern web technologies.
              </p>
              <a class="mt-3 inline-flex items-center text-primary"
                >Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="p-4 md:w-1/3">
          <div class="flex h-full flex-col rounded-lg bg-base-200 p-8">
            <div class="mb-3 flex items-center">
              <div
                class="mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-content"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path
                    d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"
                  ></path>
                </svg>
              </div>
              <h2 class="title-font text-lg font-medium">Some Other Thing</h2>
            </div>
            <div class="flex-grow">
              <p class="text-base leading-relaxed">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a class="mt-3 inline-flex items-center text-primary"
                >Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
