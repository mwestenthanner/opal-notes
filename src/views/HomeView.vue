<script setup lang="ts">
import NoteCard from '@/components/NoteCard.vue';
import Header from '@/components/Header.vue';
import AddButton from '@/components/AddButton.vue';
import { useNotesStore } from '@/stores/notes';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const store = useNotesStore();
const searchedNotes = computed(() => store.searchNotes());

</script>

<template>
  <Header />
  <main>
    <NoteCard v-if="searchedNotes.length" v-for="note in searchedNotes" :note="note" />
    <p v-else>No notes found.</p>
  </main>
  <AddButton />
</template>
