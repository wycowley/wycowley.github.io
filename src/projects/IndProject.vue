<script setup>
import { defineProps, defineEmits, toRefs, ref } from "vue";
const props = defineProps({
    title: String,
    description: String,
    date: String,
    image: String,
    open: Boolean,
    link: String,
});
const { title, description, date, image, open, link } = toRefs(props);

console.log(title.value);
</script>
<template>
    <div class="container">
        <div class="title-container">
            <div>
                <svg viewBox="0 0 24 24"><path :d="image" ref="path"></path></svg>
                <h2>{{ title }}</h2>
            </div>
            <p>{{ date }}</p>
        </div>
        <Transition name="slide-in">
            <div class="description-container" v-if="open" @click.stop>
                <p>{{ description }}</p>
                <div>
                    <a :href="link" target="_blank">Check it out</a>
                </div>
            </div>
        </Transition>
    </div>
</template>
<style scoped>
.container {
    position: relative;
    /* width: calc(100% - 5rem); */
    width: calc(48% - 2rem);
    background-color: white;
    border: rgba(0, 0, 0, 0.025) 1px solid;
    border-radius: 1rem;
    padding: 1rem;

    margin-right: 1%;
    margin-top: 1%;

    height: fit-content;

    /* justify-content: center; */
}
.title-container {
    position: relative;

    z-index: 3;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.title-container > div > h2 {
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0 0 0 1rem;
    user-select: none;
    display: inline-block;
    line-height: 3rem;
}
.title-container > p {
}
.title-container > div > svg {
    float: left;
    height: 3rem;
}
.description-container {
    overflow: hidden;
}
.description-container a {
    color: var(--accent);
    filter: brightness(0.7);
    text-decoration: none;
}

.slide-in-enter-from,
.slide-in-leave-to {
    max-height: 0;
}
.slide-in-enter-active,
.slide-in-leave-active {
    transition: max-height 0.35s;
}
.slide-in-enter-to,
.slide-in-leave-from {
    max-height: 200px;
}
</style>
