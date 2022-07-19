<script setup>
import { ref, computed, toRefs, defineProps } from "vue";
import SlideshowPill from "./SlideshowPill.vue";

const props = defineProps({
    imageUrls: {
        type: Array,
        default: ["portrait.webp", "yukon.webp", "familyHonduras.webp"],
    },
});
const { imageUrls } = toRefs(props);
const shownIndex = ref(0);

function changeSlide() {
    setSlide((shownIndex.value + 1) % imageUrls.value.length);
}
function setSlide(index) {
    shownIndex.value = index;
}

const slideToShow = computed(() => {
    console.log([imageUrls.value[shownIndex.value]]);
    return [imageUrls.value[shownIndex.value]];
});
</script>
<template>
    <div @click="changeSlide()" class="slideshow-container">
        <TransitionGroup name="slide">
            <div v-for="slide in slideToShow" :style="{ backgroundImage: `url(${slide})` }" :key="slide" class="slide"></div>
        </TransitionGroup>

        <SlideshowPill :shown-index="shownIndex" :total-indexes="imageUrls?.length" @slide-chosen="setSlide" class="pill"></SlideshowPill>
    </div>
</template>
<style scoped>
.slideshow-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    top: 0;
    left: 0;
}

.slide {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    object-fit: cover;
    background-size: cover;
    background-position: 50%;
}
.pill {
    position: absolute;
    bottom: 0.5rem;
    left: 0.5rem;
}
.slide-leave-active {
    transition: all 0.5s;
    z-index: 1;
}
.slide-leave-to {
    transform: translateX(-100%);
}
.slide-enter-from {
    transform: translateX(100%);
}
.slide-enter-active {
    transition: all 0.5s;
    z-index: 0;
}
</style>
