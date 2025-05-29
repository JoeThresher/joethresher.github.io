<script setup>
import { RouterLink, RouterView } from "vue-router";
import HeaderBar from "./components/HeaderBar.vue";
import FooterBar from "./components/FooterBar.vue";
</script>

<template>
  <HeaderBar />
  <RouterView />
  <FooterBar />
</template>
