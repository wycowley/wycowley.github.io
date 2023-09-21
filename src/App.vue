<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import Slideshow from "./slideshow/Slideshow.vue";
import Navbar from "./navbar/Navbar.vue";
import Home from "./home/Home.vue";
import About from "./about/About.vue";
import Projects from "./projects/Projects.vue";
import Contact from "./contact/Contact.vue";
import Missionary from "./missionary/Missionary.vue";
import Representation from "./missionary/Representation.vue";
</script>
<template>
    <div>
        <Navbar></Navbar>
        <Home></Home>
        <Missionary></Missionary>
        <Representation></Representation>
        <!-- <About></About>
        <Projects></Projects>
        <Contact></Contact> -->
    </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap");
body {
    font-family: "Poppins", sans-serif;
    --accent: rgb(77, 150, 199);
    --accent-numbers: 77, 150, 199;
    --main-bg: rgb(255, 255, 255);
    --second-bg: rgb(234, 238, 241);
    --third-bg: rgb(225, 225, 225);

    --main-shadow: 0 8px 30px rgb(0, 0, 0, 0.2);

    overflow-x: clip;
    width: 100%;
}

::selection {
    background: rgb(181, 218, 240);
}
html {
    scroll-behavior: smooth;
}

.full-size {
    width: 100%;
    height: 100%;
}
.centered {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
