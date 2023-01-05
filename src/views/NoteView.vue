<script setup lang="ts">
import { useNotesStore } from '@/stores/notes';
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import * as linkify from "linkifyjs";

const noteId = useRoute().params.id;
const store = useNotesStore();
const router = useRouter();

let note = {
    id: noteId.toString(),
    title: '',
    text: ''
}

const noteFromStore = store.getNoteById(noteId.toString());

if (noteFromStore) {
  note = noteFromStore;
} else {
  // throw error
}

function textAreaAdjust(element: any) {
  element.style.height = "1px";
  element.parentElement.style.height = "1px";

  const newHeight = element.scrollHeight;

  element.style.height = newHeight + "px";
  element.parentElement.style.height = newHeight + "px";
}

function toggleModal() {
  const modal = document.querySelector<HTMLElement>('.modal');
  if (modal) {
    console.log(modal.style.display)
    if (modal.style.display !== "block") {
      modal.style.display = "block";
    } else modal.style.display = "none";
  }
}

function deleteItem() {
  toggleModal()
  store.deleteNote(note);
  router.push('/');
}

function backToOverview() {
  if (!note.title && !note.text) {
    store.deleteNote(note);
  }

  router.push('/');
}

function findLinks(string: string) {
    const links = linkify.find(string);
    return links.map(link => {
        return link.href
    })
}

onMounted(() => {
  textAreaAdjust(document.querySelector('.title textarea'));
  textAreaAdjust(document.querySelector('.content textarea'));
})

</script>

<template>
  <main>
    <div class="menu">
      <button class="back" @click="backToOverview()">
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="1" id="_1"><path d="M353,450a15,15,0,0,1-10.61-4.39L157.5,260.71a15,15,0,0,1,0-21.21L342.39,54.6a15,15,0,1,1,21.22,21.21L189.32,250.1,363.61,424.39A15,15,0,0,1,353,450Z"/></g></svg>
      </button>
      <button class="delete" @click="toggleModal()">
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title/><path d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320" s/><line x1="80" x2="432" y1="112" y2="112"/><path d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40" /><line x1="256" x2="256" y1="176" y2="400"/><line x1="184" x2="192" y1="176" y2="400"/><line x1="328" x2="320" y1="176" y2="400"/></svg>
      </button>
    </div>
    <div class="title">
      <textarea @keyup="textAreaAdjust($event.target)" class="heading" v-model="note.title" placeholder="Title" />
    </div>
    <div class="content">
        <textarea @keyup="textAreaAdjust($event.target)" v-model="note.text" />
    </div>
    <div class="link-preview" v-for="link in findLinks(note.text)">
      <span class="icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18,10.82a1,1,0,0,0-1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8A1,1,0,0,1,5,7h7.18a1,1,0,0,0,0-2H5A3,3,0,0,0,2,8V19a3,3,0,0,0,3,3H16a3,3,0,0,0,3-3V11.82A1,1,0,0,0,18,10.82Zm3.92-8.2a1,1,0,0,0-.54-.54A1,1,0,0,0,21,2H15a1,1,0,0,0,0,2h3.59L8.29,14.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L20,5.41V9a1,1,0,0,0,2,0V3A1,1,0,0,0,21.92,2.62Z" /></svg>
      </span>
      <a :href="link" @click.stop>{{ link }}</a>
    </div>
    <div class="modal">
      <p>Delete item?</p>
      <button class="delete" @click="deleteItem()">Delete</button>
      <button @click="toggleModal()">Cancel</button>
    </div>
  </main>
</template>

<style scoped>
.menu {
  display: flex;
  justify-content: space-between;
}

.menu button {
  background-color: transparent;
  border: none;
}

.back svg {
  width: auto;
  height: 1.5rem;
  fill: var(--color-text);
}

.delete svg {
  width: auto;
  height: 1.5rem;
  stroke: var(--color-text);
  stroke-width: 24px;
  fill: none;
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
  height: 3rem;
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

.modal {
  display: none;
  position: absolute;
  background-color: var(--color-background-mute);
  border-radius: 0.5rem;
  padding: 1rem;
  width: 80%;
  left: 10%;
  top: 45%;
}

.modal button {
  margin-top: 1rem;
  width: 45%;
  margin-right: 5%;
  border: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  color : var(--color-text);
  background-color: var(--color-background);
}

.modal .delete {
  background-color: rgb(157, 42, 42);
}

.link-preview {
    margin-top: 2rem;
    border-radius: 0.5rem;
    border: 1px solid var(--color-border);
    font-size: 80%;
    padding: 0.5rem 1rem;
    display: flex;
}

.link-preview a {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.icon {
    margin-right: 0.5rem;
}

.icon svg {
    width: 0.8rem;
    height: 0.8rem;
    fill: var(--color-link);
}
</style>
