<script setup lang="ts">
import NoteCard from '@/components/NoteCard.vue';
import { useNotesStore } from '@/stores/notes';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const store = useNotesStore();
const searchedNotes = computed(() => store.searchNotes());

</script>

<template>
  <main>
    <NoteCard v-for="note in searchedNotes" :heading="note.title" :text="note.text" />
  </main>
</template>
