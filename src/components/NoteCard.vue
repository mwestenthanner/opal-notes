<script setup lang="ts">
import * as linkify from "linkifyjs";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps(['note']);

function cleanUpString(string: string, truncation: number) {
    string = removeLinksFromString(string);
    return truncate(string, truncation);
}

function removeLinksFromString(string: string) {
    const links = findLinks(string);

    links.forEach(link => {
        string = string.replace(link, '');
    })

    return string;
}

function truncate(string: string, length: number) {
    if (string.length > length) {
        return string.slice(0, length) + '...';
    } else return string;
}

function findLinks(string: string) {
    const links = linkify.find(string);
    return links.map(link => {
        return link.href
    })
}

function openNote() {
    router.push('/note/' + props.note.id)
}
</script>

<template>
    <div class="note" @click="openNote()">
        <h3 v-if="props.note.title">{{ cleanUpString(props.note.title, 40) }}</h3>
        <p>{{ cleanUpString(props.note.text, 200) }}</p>
        <div v-for="link in findLinks(props.note.text)">
            <p v-if="!props.note.title">Link</p>
            <div class="link-preview">
                <span class="icon">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18,10.82a1,1,0,0,0-1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8A1,1,0,0,1,5,7h7.18a1,1,0,0,0,0-2H5A3,3,0,0,0,2,8V19a3,3,0,0,0,3,3H16a3,3,0,0,0,3-3V11.82A1,1,0,0,0,18,10.82Zm3.92-8.2a1,1,0,0,0-.54-.54A1,1,0,0,0,21,2H15a1,1,0,0,0,0,2h3.59L8.29,14.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L20,5.41V9a1,1,0,0,0,2,0V3A1,1,0,0,0,21.92,2.62Z" /></svg>
                </span>
                <a :href="link" @click.stop>{{ link }}</a>
            </div>
        </div>
    </div>
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

.link-preview {
    margin-top: 0.5rem;
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
    width: 10px;
    height: 10px;
    fill: var(--color-link);
}
</style>