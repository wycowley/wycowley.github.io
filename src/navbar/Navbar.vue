<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from "vue";
import { scroll } from "../Scroll.js";
const atTop = ref(true);

watch(scroll, (newValue) => {
    console.log("help");
    if (newValue == 0) {
        atTop.value = true;
    } else if (atTop.value == true) {
        atTop.value = false;
    }
});
var scrollListener;
</script>
<template>
    <div class="navbar" :style="{ backgroundColor: atTop ? 'rgb(255,255,255)' : '' }">
        <img src="main_logo.gif" />
        <a><b>Wyatt Cowley</b></a>
        <a>About Me</a>
        <a>Projects</a>
        <a>Contact</a>
    </div>
</template>
<style scoped>
.navbar {
    position: fixed;
    top: 0;
    z-index: 5;

    width: 100%;
    height: 4rem;
    padding: 0.5rem;
    /* background-color: rgb(255, 255, 255); */
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.5) 100%);
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 30px rgb(0, 0, 0, 0.12);

    display: flex;
    flex-direction: row;
    align-items: center;

    transition: background-color 0.5s;
}
.navbar > img {
    width: 3rem;
    height: 3rem;
    margin-left: 1rem;
}
.navbar > a {
    font-size: 1.5rem;
    padding: 0.75rem;
    border-radius: 0.5rem;

    transition: all 0.25s;
    /* margin: 0 1rem; */
}
.navbar > a:hover {
    box-shadow: inset 0 0 1.5rem 0rem rgba(148, 148, 148, 0.25);
    border-radius: 1rem;
}
</style>
