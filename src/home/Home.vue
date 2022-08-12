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
    <a id="home"></a>
    <div class="home">
        <div :style="{ transform: slideIn ? 'translateX(-100%)' : '' }">
            <Slideshow :image-urls="['yukon2.webp', 'yukon.webp', 'familyHonduras.webp']"></Slideshow>
            <svg class="cut-off-triangle" viewBox="0 0 20 100" preserveAspectRatio="none"><path d="M20 0, L20 100, L0 100"></path></svg>
        </div>
        <div>
            <div>
                <h1>Wyatt Cowley</h1>
                <h2>— Incoming CS student at BYU —</h2>
            </div>
        </div>
    </div>
</template>
<style scoped>
@media only screen and (max-width: 500px) {
    .home > div > div > h1 {
        font-size: 2.5rem !important;
    }
    .home > div > div > h2 {
        font-size: 1.25rem !important;
    }
}
@media only screen and (max-width: 950px) {
    .home {
        display: block !important;
        position: relative !important;
    }
    .home > div:first-child {
        width: 100% !important;
    }
    .home > div:nth-child(2) {
        position: absolute !important;
        bottom: 3rem !important;
        left: 0 !important;
        width: 100% !important;
        height: auto !important;
        display: flex !important;
        align-items: center !important;
        pointer-events: none;
        background-color: transparent !important;
    }
    .home > div:nth-child(2) > div {
        background-color: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        min-width: 50% !important;
        /* margin-top: 30%; */
        padding: 1rem;
        border-radius: 0.5rem;
        text-align: center;
        z-index: 3;
    }
    .cut-off-triangle {
        display: none;
        /* right: 0re; */
    }
}

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
.home > div > div > h1 {
    font-size: 4rem;
    margin: 0;
}
.home > div > div > h2 {
    margin: 0;
}
.cut-off-triangle {
    width: 10rem;
    height: 100vh;
    margin: auto 0;
    z-index: 2;

    position: absolute;
    top: 0;
    right: 0;

    pointer-events: none;

    fill: var(--main-bg);
}
</style>
