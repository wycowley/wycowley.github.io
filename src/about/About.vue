<script setup>
import Slideshow from "../slideshow/Slideshow.vue";
import { scroll } from "../Scroll.js";
import { watch } from "vue";
//
</script>
<template>
    <div class="about">
        <div class="dividing-bar" :style="{ transform: `translateY(${0 - (scroll - 0) / 5}px)` }"></div>
        <div class="full-slide first">
            <div>
                <h1>Welcome</h1>
                <p>
                    My name is Wyatt Cowley, and I'm an incoming freshman to BYU planning to study Computer Science. Thanks for stopping by!
                    <br />
                    <br />
                    In my family, I have two siblings, Cyrus and Tessa, my dog (Kody), and my two parents.
                </p>
            </div>
            <div>
                <Slideshow class="about-slideshow"></Slideshow>
            </div>
        </div>
        <div></div>
        <div></div>
    </div>
</template>
<style scoped>
.about {
    position: relative;
}
.dividing-bar {
    width: 100%;
    height: 18vh;
    background-color: var(--accent);
    z-index: 2;
    position: absolute;
    top: 0;
}

.first {
    padding-top: 15vh;
}
.full-slide {
    width: 70%;
    margin-left: 15%;
    height: 70vh;

    display: flex;
    flex-direction: row;
}
.full-slide > div {
    width: 50%;
    height: 100%;
}
.about-slideshow {
    width: 90%;
    height: 90%;
    margin: 15%;
    box-shadow: 0 8px 30px rgb(0, 0, 0, 0.2);
    border-radius: 2px;
    transition: all 0.2s;
}
.about-slideshow:hover {
    box-shadow: 0 8px 30px rgb(0, 0, 0, 0.25);
    transform: scale(1.001);
}
</style>
