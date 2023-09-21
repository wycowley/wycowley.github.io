<script setup></script>
<template>
    <div class="content">
        <p>I have made the choice to serve a 2-year mission for the <a href="https://www.churchofjesuschrist.org/" target="_blank">Church of Jesus Christ of Latter-day Saints</a>, and have been assigned to the Chile, Viña del Mar mission speaking Spanish.</p>
        <p>I am incredibly excited for the opportunity to serve the Chilean people and teach those interested about Jesus Christ and his Restored Gospel.</p>

        <p>If you want updates, please send me an email at wyatt.cowley@missionary.org to get added to my weekly update emails</p>

        <p>Otherwise, see you in a quick two ✌️</p>

        <div class="tags-picture"></div>
    </div>
</template>
<style scoped>
@media only screen and (max-width: 950px) {
    p {
        font-size: 1.5rem !important;
    }
    .tags-picture {
        width: 100% !important;
        margin-left: 0 !important;
    }
}
.content {
    width: 80%;
    padding-left: 10%;
    padding-top: 3rem;
    padding-bottom: 3rem;
    /* height: 100vh; */

    /* height:; */
}
.tags-picture {
    background-image: url("tags.webp");
    background-size: cover;
    background-position: center;
    aspect-ratio: 16/9;
    width: 75%;
    margin-left: 12.5%;
}
.flex {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
}
p {
    font-size: 2rem;
}
a {
    color: var(--accent);
    text-decoration: none;
}
</style>
