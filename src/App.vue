<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AddButton from './components/AddButton.vue';
import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <RouterView />
  <AddButton />
</template>

<style scoped>
</style>
