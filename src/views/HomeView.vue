<script setup lang="ts">
import NoteCard from '@/components/NoteCard.vue';

</script>

<template>
  <main>
    <NoteCard heading="Heading" text="Here's some text" />
    <NoteCard text="https://capacitorjs.com/docs/basics/workflow" />
    <NoteCard text="Here's some more text. This is an entire note. Here we have quite some text." />
  </main>
</template>
