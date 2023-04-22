<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from "vue";
import { scroll } from "../Scroll.js";
import { mdiDotsVertical } from "@mdi/js";
const mobile = ref(window.innerHeight < 650);
const active = ref(false);

onMounted(() => {
    mobile.value = window.innerWidth < 650;
});
window.addEventListener("resize", () => {
    if (!mobile.value && window.innerWidth < 650) {
        console.log(window.innerWidth);
        mobile.value = true;
    } else if (mobile.value && window.innerWidth > 650) {
        console.log(window.innerWidth);
        mobile.value = false;
    }
});
</script>
<template>
    <div :class="mobile ? 'navbar_mobile navbar' : 'navbar'">
        <img src="/main_logo.png" alt="logo" />
        <button class="hamburger-button" v-if="mobile" @click="active = !active">
            <svg viewBox="0 0 24 24"><path :d="mdiDotsVertical"></path></svg>
        </button>
        <a href="#home" v-if="!mobile || active"><b>Wyatt Cowley</b></a>
        <a href="#about" v-if="!mobile || active">About Me</a>
        <a href="#projects" v-if="!mobile || active">Projects</a>
        <a href="#contact" v-if="!mobile || active">Contact</a>
    </div>
</template>
<style scoped>
@media only screen and (max-width: 650px) {
}
.navbar_mobile {
    justify-content: space-between;
    flex-wrap: wrap !important;
    background-color: white;
}
.navbar_mobile > a {
    width: 100% !important;
    background-color: white !important;
    border-radius: 0 !important;
}

.navbar {
    position: fixed;
    top: 0;
    z-index: 5;

    width: 100%;
    height: 4rem;
    /* padding: 0.5rem; */
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    /* background-color: rgb(255, 255, 255); */
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.5) 100%);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    box-shadow: 0 8px 30px rgb(0, 0, 0, 0.12);

    display: flex;
    flex-direction: row;
    align-items: center;

    transition: background-color 0.5s;
}
.hamburger-button {
    width: 3rem;
    height: 3rem;
    margin: 0.5rem;
    border: none;
    background-color: transparent;
}
.hamburger-button > svg {
    height: 100%;
    width: 100%;
}
.navbar > img {
    width: 3rem;
    height: 3rem;
    margin: 0.5rem;
    margin-left: 1rem;
}
.navbar > a {
    font-size: 1.5rem;
    padding: 0.75rem;
    border-radius: 0.5rem;

    transition: all 0.25s;

    text-decoration: none;
    color: black;
    /* margin: 0 1rem; */
}
.navbar > a:hover {
    box-shadow: inset 0 0 1.5rem 0rem rgba(148, 148, 148, 0.25);
    border-radius: 1rem;
}
</style>
