import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notes', () => {
  const notes = ref([
    {
      id: "1",
      title: "Heading",
      text: "Here's some text"
    },
    {
      id: "2",
      title: "",
      text: "https://capacitorjs.com/docs/basics/workflow"
    },
    {
      id: "3",
      title: "",
      text: "Here's some more text. This is an entire note. Here we have quite some text."
    }
  ]);

  const searchTerm = ref('');

  function getNoteById(id: string) {
    return notes.value.find((note) => {
      return note.id == id;
    })
  }

  function searchNotes() {
    return notes.value.filter((note) => {
      return note.title?.toLowerCase().includes(searchTerm.value.toLowerCase()) || note.text.toLowerCase().includes(searchTerm.value.toLowerCase())
    })
  }

  function addNote(note: any) {
    notes.value.push(note)
  }

  function deleteNote(note: any) {
    const index = notes.value.indexOf(note);
    if (index > -1) {
      notes.value.splice(index, 1);
    }
  }

  return { 
    notes,
    searchTerm,
    getNoteById,
    searchNotes,
    addNote,
    deleteNote
  }
})
