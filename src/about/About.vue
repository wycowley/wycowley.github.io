<script setup>
import Slideshow from "../slideshow/Slideshow.vue";
import { scroll } from "../Scroll.js";
import { watch } from "vue";
//
</script>
<template>
    <div class="about">
        <!-- <div class="dividing-bar" :style="{ transform: `translateY(${0 - (scroll - 0) / 5}px)` }"></div> -->
        <div class="dividing-bar"></div>

        <div class="full-slide first">
            <div class="text">
                <h1>Welcome</h1>
                <p>
                    My name is Wyatt Cowley, and I'm an incoming freshman to BYU planning to study Computer Science. Thanks for stopping by!
                    <br />
                    <br />
                    In my family, I have two siblings, Cyrus and Tessa, my dog (Kody), and my two parents.
                </p>
            </div>
            <div>
                <Slideshow class="about-slideshow" :image-urls="['family.webp', 'halfzion.webp', 'star.webp']"></Slideshow>
            </div>
        </div>
        <div class="full-slide first">
            <div>
                <Slideshow class="about-slideshow" :image-urls="['piano2.webp', 'chess.webp', 'wakeboard.webp']"></Slideshow>
            </div>

            <div class="text">
                <h1>Work Experience</h1>
                <p>
                    I work at
                    <a href="https://www.peeryacademy.com/" className="link" target="_blank" rel="noopener"> Peery Piano Academy</a> as one of their Lead Guides, teaching piano to 5+ students. I have played piano for over ten years and have performed pieces such as Sonate Pathetique and Liebestraum.
                    Check out
                    <a href="https://wyattcowley.com/music/" className="link" target="_blank" rel="noopener"> my portfolio here </a>
                    !<br />
                    <br />
                    During the summer, I lifeguard and teach swim lessons at my local pool.
                    <br />
                    <br />
                    I participated and led a couple of clubs in high school. I was the President of the Practical Skills Club, and was part of the CS and Business clubs on campus.
                </p>
            </div>
        </div>
        <div class="full-slide first">
            <div class="text">
                <h1>Interests</h1>
                <p>
                    At school I play Water Polo and Swimming, and have played for all 4 years, on varsity my Junior and Senior years. I am Varsity Swim Captain this year.
                    <br />
                    <br />I am a member of the Church of Jesus Christ of Latter Day Saints, and attend weekly devotionals and activities with my church and youth congregation. I am also a Eagle Scout. <br />
                    <br />
                    In my free time, I love to read epic fantasy, spend time in the outdoors, and play Minecraft bedwars with my friends. I love going on adventures with the communities I'm a part of: such as scaling Mt. Shasta or scuba diving in Honduras.
                </p>
            </div>
            <div>
                <Slideshow class="about-slideshow" :image-urls="['eagle.webp', 'zionind.webp', 'shasta.webp']"></Slideshow>
            </div>
        </div>
    </div>
</template>
<style scoped>
.about {
    position: relative;
}
.dividing-bar {
    width: 100%;
    height: 18vh;
    background-color: var(--main-bg);
    z-index: 2;
    position: absolute;
    top: 0;
}

.text > h1 {
    font-size: 2.25rem;
    margin: 0;
    margin-bottom: 0.5rem;
}
.text > p {
    font-size: 1.25rem;
    margin: 0;
}
.text a {
    color: var(--accent);
}
.first {
    padding-top: 15vh;
}
.full-slide {
    width: 90%;
    margin-left: 5%;
    height: 75vh;

    display: flex;
    flex-direction: row;
}
.full-slide > div {
    width: 45%;
    margin: 2.5%;
    height: 100%;
}
.about-slideshow {
    width: 90%;
    height: 100%;
    box-shadow: var(--main-shadow);
    border-radius: 2px;
    transition: all 0.2s;
}
.about-slideshow:hover {
    box-shadow: 0 8px 30px rgb(0, 0, 0, 0.25);
    transform: scale(1.002);
}
</style>
