<script setup>
import { ref, toRef } from "vue";

const props = defineProps({
    shownIndex: Number,
    totalIndexes: Number,
});
const emits = defineEmits({
    slideChosen: Number,
});
</script>
<template>
    <div @click.stop>
        <button v-for="index in totalIndexes" aria-label="slideshow button" :key="index" @click.stop="$emit('slideChosen', index - 1)" :style="{ backgroundColor: shownIndex == index - 1 ? 'white' : '' }"></button>
    </div>
</template>
<style scoped>
div {
    padding: 0.25rem;
    border-radius: 50px;
    background-color: rgba(224, 224, 224, 0.336);
    box-shadow: 0 8px 30px rgb(0 0 0 / 12%);
    backdrop-filter: blur(10px);
    width: fit-content;

    z-index: 2;
}
button {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0 0.25rem;
    background-color: rgba(255, 255, 255, 0.5);

    transition: background-color 0.1s;
}
button:hover {
    background-color: rgba(248, 248, 248, 0.75);
}
</style>
