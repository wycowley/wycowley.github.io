<script setup>
import { defineProps, toRefs, ref, onMounted } from "vue";

const fullSvg = ref(null);
onMounted(() => {
    setTimeout(() => {
        let children = fullSvg.value.children;
        for (let i = 0; i < children.length; i++) {
            setTimeout(() => {
                addAnimationToLine(children[i]);
            }, i * 200);
        }
    }, 2000);
});

function addAnimationToLine(reference) {
    if (reference.classList == "ignore") {
        return;
    }
    reference.style = "stroke-dasharray: " + reference.getTotalLength() + "; stroke-dashoffset: " + reference.getTotalLength() + ";";
    reference.classList.add("line-animation");
}
</script>
<template>
    <svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" ref="fullSvg">
        <line x1="0" y1="150" x2="700" y2="150" />
        <path d="M 50 150 Q 100 150 100 200" stroke="black" fill="transparent" />
        <path d="M 150 150 Q 200 150 200 100" stroke="black" fill="transparent" />
        <path d="M 250 150 Q 300 150 300 200" stroke="black" fill="transparent" />
        <path d="M 350 150 Q 400 150 400 100" stroke="black" fill="transparent" />
        <path d="M 450 150 Q 500 150 500 200" stroke="black" fill="transparent" />
        <path d="M 550 150 Q 600 150 600 100" stroke="black" fill="transparent" />
    </svg>
</template>
<style scoped>
svg {
    position: absolute;
    width: 100%;
}
svg > * {
    opacity: 0;
}
.line-animation {
    opacity: 1;
    stroke-width: 5;
    stroke: black;
    animation: animate 2s;
    animation-fill-mode: forwards;
}
@keyframes animate {
    to {
        stroke-dashoffset: 0;
    }
}
</style>
