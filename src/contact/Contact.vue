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
            <svg viewBox="0 0 24 24"><path :d="mdiGithub"></path></svg>
            <svg viewBox="0 0 24 24"><path :d="mdiLinkedin"></path></svg>
            <svg viewBox="0 0 24 24"><path :d="mdiEmail"></path></svg>
            <svg viewBox="0 0 24 24"><path :d="mdiInstagram"></path></svg>
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
    padding: 2rem;
    margin: 0;
}
.icon-container {
    width: 50%;
    margin-left: 25%;
    padding: 5% 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.icon-container > svg {
    height: 5rem;
    width: 5rem;
    cursor: pointer;

    transition: transform 0.25s ease;
}
.icon-container > svg:hover {
    transform: scale(110%);
}
</style>
