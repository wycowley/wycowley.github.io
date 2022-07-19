<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import Slideshow from "../slideshow/Slideshow.vue";

const slideIn = ref(true);

onMounted(() => {
    window.setTimeout(() => {
        slideIn.value = false;
    }, 500);
});
</script>
<template>
    <div class="home">
        <div :style="{ transform: slideIn ? 'translateX(-100%)' : '' }">
            <Slideshow :image-urls="['portrait.webp', 'yukon.webp', 'familyHonduras.webp']"></Slideshow>
            <div class="cut-off-triangle"></div>
        </div>
        <div>
            <h1>Wyatt Cowley</h1>
            <h2>— Incoming CS student at BYU —</h2>
        </div>
    </div>
</template>
<style scoped>
.home {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    width: 100%;
}
.home > div:first-child {
    width: 60%;
    height: 100%;
    background-color: white;
    position: relative;

    transition: transform 1s;
}
.home > div:nth-child(2) {
    width: 40%;
    height: 100%;

    background-color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
}
.home > div > h1 {
    font-size: 4rem;
    margin: 0;
}
.home > div > h2 {
    margin: 0;
}
.cut-off-triangle {
    width: 0;
    height: 0;
    border-left: 10rem solid transparent;
    border-bottom: 100vh solid white;
    margin: auto 0;
    z-index: 2;

    position: absolute;
    top: 0;
    right: 0;

    pointer-events: none;
}
</style>
