<script setup lang="ts">
import { useNotesStore } from '@/stores/notes';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const store = useNotesStore();
const { searchTerm } = storeToRefs(store);
</script>

<template>
<div class="search">
    <span class="icon"><svg aria-labelledby="searchIconTitle" fill="none" role="img" stroke-linecap="square" stroke-linejoin="miter" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="searchIconTitle"/><path d="M14.4121122,14.4121122 L20,20"/><circle cx="10" cy="10" r="6"/></svg></span>
    <input v-model="searchTerm" type="search" id="site-search" name="search" placeholder="Search notes" />
</div>
</template>

<style scoped>
.search {
  background-color: var(--color-background-mute);
  padding: 0.5rem;
  display: flex;
  gap: 0.5rem;
  border-radius: 0.5rem;;
}

.search .icon {
  display: flex;
}

.search svg {
  width: 1rem;
  height: 1rem;
}

.search svg {
  stroke: var(--color-text);
}

.search input {
  border: none;
  background-color: transparent;
  width: 8rem;
  color: var(--color-text);
}
</style>