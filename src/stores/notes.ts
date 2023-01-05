import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notes', () => {
  const notes = ref([
    {
      id: 1,
      title: "Heading",
      text: "Here's some text"
    },
    {
      id: 2,
      text: "https://capacitorjs.com/docs/basics/workflow"
    },
    {
      id: 3,
      text: "Here's some more text. This is an entire note. Here we have quite some text."
    }
  ]);

  const searchTerm = ref('')

  function searchNotes() {
    return notes.value.filter((note) => {
      return note.title?.toLowerCase().includes(searchTerm.value.toLowerCase()) || note.text.toLowerCase().includes(searchTerm.value.toLowerCase())
    })
  }

  function addNote(note: any) {
    notes.value.push(note)
  }

  return { 
    notes,
    searchTerm,
    searchNotes,
    addNote
  }
})
