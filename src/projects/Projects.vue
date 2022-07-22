<script setup>
import IndProject from "./IndProject.vue";
</script>
<template>
    <div class="project-container">
        <h1>PROJECTS</h1>
        <IndProject :title="'hello'" :description="'a kind message'" :icon="'wave'" :date="'today'"></IndProject>
    </div>
</template>
<style scoped>
.project-container {
    width: 80%;
    padding: 10%;
}
.project-container > h1 {
    font-size: 4.5rem;
}
</style>
