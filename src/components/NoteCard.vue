<script setup lang="ts">
const props = defineProps(['note']);

function truncate(string: string, length: number) {
    if (string.length > length) {
        return string.slice(0, length) + '...';
    } else return string;
}
</script>

<template>
<router-link :to="'/note/' + props.note.id">
    <div class="note">
    <h3 v-if="props.note.title">{{ truncate(props.note.title, 40) }}</h3>
    <p>{{ truncate(props.note.text, 100) }}</p>
    </div>
</router-link>

</template>

<style scoped>
.note {
    padding: 1rem;
    background-color: var(--color-background-soft);
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;
    color: var(--color-text);
    text-decoration: none;
    word-break: normal;
    overflow-wrap: anywhere;
}

.note h3 {
    margin-bottom: 0.5rem;
    font-weight: 600;
}
</style>