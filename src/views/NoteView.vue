<script setup lang="ts">
import { useNotesStore } from '@/stores/notes';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const noteId = useRoute().params.id;
const store = useNotesStore();

let note = {
    id: noteId.toString(),
    title: '',
    text: ''
}

const noteFromStore = store.getNoteById(noteId.toString());

if (noteFromStore) {
  note = noteFromStore;
}

function textAreaAdjust(element: any) {
  element.style.height = "1px";
  element.parentElement.style.height = "1px";

  const newHeight = element.scrollHeight;

  element.style.height = newHeight + "px";
  element.parentElement.style.height = newHeight + "px";
}

onMounted(() => {
  textAreaAdjust(document.querySelector('.title textarea'));
})

</script>

<template>
  <main>
    <router-link to="/" class="back-to-home">
      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="1" id="_1"><path d="M353,450a15,15,0,0,1-10.61-4.39L157.5,260.71a15,15,0,0,1,0-21.21L342.39,54.6a15,15,0,1,1,21.22,21.21L189.32,250.1,363.61,424.39A15,15,0,0,1,353,450Z"/></g></svg>
    </router-link>
    <div class="title">
      <textarea @keyup="textAreaAdjust($event.target)" class="heading" v-model="note.title" placeholder="Title" />
    </div>
    <div class="content">
        <textarea v-model="note.text" />
    </div>
  </main>
</template>

<style scoped>
.back-to-home svg {
  width: auto;
  height: 24px;
  fill: var(--color-text);
}

.title {
  margin-top: 1.5rem;
  height: fit-content;
}

.title textarea {
  font-size: 1.7rem;
  height: 3rem;
}

.content {
  margin-top: 1.5rem;
}

.content textarea {
  width: 100%;
  height: 76vh;
  line-height: 1.5;
}

textarea {
  background-color: transparent;
  border: none;
  color: var(--color-text);
  resize: none;
}

textarea:focus {
  outline: none;
}

textarea::-webkit-scrollbar {
  display: none;
}
</style>
