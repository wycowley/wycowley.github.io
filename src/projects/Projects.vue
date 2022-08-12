<script setup>
import IndProject from "./IndProject.vue";
import LineArt from "./LineArt.vue";
import { mdiPiano } from "@mdi/js";
import { mdiGrid } from "@mdi/js";
import { mdiFolderArrowUp } from "@mdi/js";
import { mdiController } from "@mdi/js";
import { mdiNewspaperVariant } from "@mdi/js";
import projects from "../Projects.json";
import { onMounted, ref } from "@vue/runtime-core";
const pictureList = [mdiGrid, mdiFolderArrowUp, mdiPiano, mdiController, mdiNewspaperVariant];
const openProject = ref("none");

function handleClick(name) {
    if (openProject.value == name) {
        openProject.value = "none";
    } else {
        openProject.value = name;
    }
}
</script>
<template>
    <a id="projects"></a>

    <div class="project-container">
        <div class="project-gradient"></div>
        <h1>PROJECTS</h1>
        <div class="all-projects">
            <ind-project v-for="(project, index) in projects" :key="project.name" @click="handleClick(project.name)" :image="pictureList[index]" :link="project.link" :title="project.name" :date="project.date" :description="project.description" :open="project.name === openProject"></ind-project>
        </div>
    </div>
</template>
<style scoped>
@media only screen and (max-width: 1200px) {
    .all-projects {
        flex-direction: column !important;
    }
    .all-projects > div {
        width: calc(100% - 2rem) !important;
    }
}
@media only screen and (max-width: 550px) {
    .project-container > h1 {
        font-size: 3rem !important;
    }
}
.project-gradient {
    width: 100%;
    height: 15vh;
    margin-top: 2vh;
    background-image: linear-gradient(to bottom, var(--main-bg) 0%, transparent 100%);
}
.project-container {
    width: 100%;
    min-height: 115vh;
    background-color: var(--second-bg);
}

.project-container > h1 {
    padding-left: 10%;
    padding-top: 10%;
    font-size: 4.5rem;

    margin: 0;
}

.triangle {
    position: relative;
    left: -5rem;
    width: auto;
    height: 100%;
}
.triangle > svg {
    height: 100%;
    width: 5rem;
    /* height: 100%; */
}
.triangle > svg > path {
    fill: var(--second-bg);
}
.all-projects {
    width: 80%;
    margin-left: 10%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>
