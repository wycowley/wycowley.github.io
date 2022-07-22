<script setup>
import { defineProps, toRefs, ref } from "vue";
const props = defineProps({
    title: String,
    description: String,
    icon: String,
    date: String,
    link: String,
});
const { title, description, icon, date, link } = toRefs(props);

const open = ref(false);

function switchOpen() {
    open.value = !open.value;
}
</script>
<template>
    <div @click="switchOpen" class="container">
        <h2>{{ title }}</h2>
        <Transition name="slide">
            <div v-if="open">
                <p>{{ description }}</p>
                <a> {{ link }}</a>
            </div>
        </Transition>
    </div>
</template>
<style scoped>
.container {
    background-color: rgb(255, 255, 255);
    width: 35%;

    box-shadow: var(--main-shadow);
}
.container > div {
    /* height: 5rem; */
    position: relative;
}

.slide-leave-active {
    transition: all 0.5s;
}
.slide-enter-active {
    transition: all 0.5s;
}
.slide-enter-from {
    top: -50%;
}
.slide-enter-to {
    top: 0vh;
}
.slide-leave-from {
    top: 0vh;
}
.slide-leave-to {
    top: -50%;
}
</style>
