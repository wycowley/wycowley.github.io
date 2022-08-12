<script setup>
import { mdiGithub } from "@mdi/js";
import { mdiLinkedin } from "@mdi/js";
import { mdiInstagram } from "@mdi/js";
import { mdiEmail } from "@mdi/js";
</script>
<template>
    <a id="contact"></a>
    <div class="contact-container">
        <div class="contact-gradient"></div>
        <div class="icon-container">
            <a href="https://github.com/wycowley" target="_blank">
                <svg viewBox="0 0 24 24"><path :d="mdiGithub"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/wyatt-cowley-a93505239/" target="_blank">
                <svg viewBox="0 0 24 24"><path :d="mdiLinkedin"></path></svg>
            </a>
            <a href="mailto:wycowley@gmail.com" target="_blank">
                <svg viewBox="0 0 24 24"><path :d="mdiEmail"></path></svg>
            </a>
            <a href="https://www.instagram.com/wycowley/" target="_blank">
                <svg viewBox="0 0 24 24"><path :d="mdiInstagram"></path></svg>
            </a>
        </div>
        <h1>Created by Wyatt Cowley using Vue.js</h1>
    </div>
</template>
<style scoped>
.contact-gradient {
    height: 15vh;
    width: 100%;
    background-image: linear-gradient(to bottom, var(--second-bg) 0%, transparent 100%);
    filter: hue-rotate(-100deg);
}
.contact-container {
    width: 100%;
    background-color: var(--second-bg);
    filter: hue-rotate(100deg);
}
.contact-container > h1 {
    font-size: 1rem;
    text-align: center;
    padding-top: 0rem;
    padding-bottom: 2rem;
    margin: 0;
}
.icon-container {
    width: 95%;
    padding: 5% 2.5%;
    padding-bottom: 3%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.icon-container > a {
    padding: 0 3%;
}
.icon-container > a > svg {
    height: 4.5rem;
    width: 4.5rem;
    cursor: pointer;

    transition: transform 0.25s ease;
}
.icon-container > a > svg:hover {
    transform: scale(110%);
}
</style>
