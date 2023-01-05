<script setup lang="ts">
import { useNotesStore } from '@/stores/notes';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useNotesStore();

function addNote() {
    const noteId = uuidv4();

    const note = {
        id: noteId,
        title: '',
        text: ''
    }

    store.addNote(note);
    router.push('/note/' + noteId);
}
</script>

<template>
<div class="add-button" @click="addNote()">
    <button>+</button>
</div>
</template>

<style scoped>
.add-button {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
}

button {
    border: none;
    width: 3rem;
    height: 3rem;
    border-radius: 1rem;
    font-size: 1.5rem;
    color: var(--color-text);
    background-color: var(--color-link);
}
</style>