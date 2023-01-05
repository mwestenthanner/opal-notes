<script setup lang="ts">
const props = defineProps(['heading', 'text'])
</script>

<template>
<div class="note">
    <h3>{{ props.heading }}</h3>
    <p>{{ props.text }}</p>
</div>
</template>

<style scoped>
.note {
    padding: 1rem;
    background-color: var(--color-background-soft);
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;
}

.note h3 {
    margin-bottom: 0.5rem;
    font-weight: 600;
}
</style>