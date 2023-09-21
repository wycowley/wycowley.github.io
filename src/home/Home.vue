<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import Slideshow from "../slideshow/Slideshow.vue";

const mobile = ref(false);

onMounted(() => {
    mobile.value = window.innerWidth <= 950;
});

window.addEventListener("resize", () => {
    if (!mobile.value && window.innerWidth <= 950) {
        mobile.value = true;
    } else if (mobile.value && window.innerWidth > 950) {
        mobile.value = false;
    }
});
</script>
<template>
    <a id="home"></a>
    <div class="home">
        <div>
            <div v-if="!mobile" class="full-screen-picture"></div>
            <div v-else class="mobile-picture"></div>
            <svg class="cut-off-triangle" viewBox="0 0 20 100" preserveAspectRatio="none"><path d="M20 0, L20 100, L0 100"></path></svg>
        </div>
        <div>
            <div>
                <h1>Wyatt Cowley</h1>
                <h2>— Serving a mission in Chile —</h2>
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
        position: relative !important;
        flex-direction: column !important;
        justify-content: center !important;
        align-items: center !important;
    }
    .home > div:first-child {
        position: static !important;
        max-width: 400px;
        width: 80% !important;
        box-shadow: var(--main-shadow);
        height: auto !important;
        aspect-ratio: 1/1 !important;
        border-radius: 50%;
    }
    .home > div:nth-child(2) {
        position: absolute !important;
        bottom: 1rem !important;
        left: 0 !important;
        width: 100% !important;
        height: auto !important;
        display: flex !important;
        align-items: center !important;
        pointer-events: none;
        background-color: transparent !important;
    }
    .home > div:nth-child(2) > div {
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
    .home > div > div > h1 {
        font-size: 2.5rem !important;
    }
    .home > div > div > h2 {
        font-size: 1.25rem !important;
    }
}
.mobile-picture {
    width: 100%;
    height: 100%;
    background-image: url(mission_portrait.webp);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    object-fit: cover;
    border-radius: 50%;
}
.full-screen-picture {
    background-image: url(mission_portrait.webp);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    object-fit: fit;
    width: 100%;
    height: 100%;
}
.home {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: calc(100vh - 5rem);
    margin-top: 5rem;
    width: 100%;
}
.home > div:first-child {
    width: 50%;
    height: 100%;
    background-color: white;
    position: relative;

    transition: transform 1s;
}
.home > div:nth-child(2) {
    width: 50%;
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
    height: calc(100vh - 5rem);
    margin: auto 0;
    z-index: 2;

    position: absolute;
    top: 0;
    right: 0;

    pointer-events: none;

    fill: var(--main-bg);
}
</style>
