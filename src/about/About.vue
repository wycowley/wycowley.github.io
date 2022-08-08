<script setup>
import Slideshow from "../slideshow/Slideshow.vue";
import { mdiCogOutline } from "@mdi/js";
//
</script>
<template>
    <a id="about"></a>
    <div class="about">
        <div class="full-slide">
            <div class="text">
                <h1>Welcome</h1>
                <p>
                    My name is Wyatt Cowley, and I'm an incoming freshman to BYU planning to study Computer Science. Thanks for stopping by!
                    <br />
                    <br />
                    In my family, I have two siblings, Cyrus and Tessa, my dog (Kody), and my two parents.
                </p>
            </div>
            <div class="slides">
                <!-- <svg viewBox="0 0 100 100" class="svg-animation"><path d="M 40 30 L 10 10 L 30 40 L 0 50 L 30 60 L 10 90 L 40 70 L 50 100 L 60 70 L 90 90 L 70 60 L 100 50 L 70 40 L 90 10 L 60 30 L 50 0" /></svg> -->
                <svg viewBox="0 0 24 24" class="svg-animation animation1" :style="{ top: '-4vw', right: '-4vw', filter: ' hue-rotate(100deg)' }"><path d="M 0 0 L 24 0 L 24 24 L 0 24"></path></svg>
                <svg viewBox="0 0 24 24" class="svg-animation animation2" :style="{ top: '-6vw', right: '5vw', width: '10vw' }"><path d="M 0 0 L 24 0 L 24 24 L 0 24"></path></svg>

                <Slideshow class="about-slideshow" :image-urls="['family.webp', 'halfzion.webp', 'star.webp']"></Slideshow>
            </div>
        </div>
        <div class="full-slide">
            <div class="slides">
                <svg viewBox="0 0 24 24" class="svg-animation animation1" :style="{ top: '-4vw', left: '-4vw', filter: '', width: '17vw' }"><path d="M 0 0 L 24 0 L 24 24 L 0 24"></path></svg>
                <svg viewBox="0 0 24 24" class="svg-animation animation2" :style="{ top: '3vw', left: '-8vw', width: '9vw', filter: 'hue-rotate(100deg) ' }"><path d="M 0 0 L 24 0 L 24 24 L 0 24"></path></svg>

                <Slideshow class="about-slideshow" :image-urls="['piano2.webp', 'chess.webp', 'wakeboard.webp']"></Slideshow>
            </div>

            <div class="text">
                <h1>Work Experience</h1>
                <p>
                    I work at
                    <a href="https://www.peeryacademy.com/" className="link" target="_blank" rel="noopener"> Peery Piano Academy</a> as one of their Lead Guides, teaching piano to 5+ students. I have played piano for over ten years and have performed pieces such as Sonate Pathetique and Liebestraum.
                    Check out <a href="https://wyattcowley.com/music/" className="link" target="_blank" rel="noopener"> my portfolio here</a>!<br />
                    <br />
                    During the summer, I lifeguard and teach swim lessons at my local pool.
                    <br />
                    <br />
                    I participated and led a couple of clubs in high school. I was the President of the Practical Skills Club, and was part of the CS and Business clubs on campus.
                </p>
            </div>
        </div>
        <div class="full-slide">
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
            <div class="slides">
                <svg viewBox="0 0 24 24" class="svg-animation animation1" :style="{ top: '-4vw', right: '-4vw', filter: ' hue-rotate(100deg)' }"><path d="M 0 0 L 24 0 L 24 24 L 0 24"></path></svg>
                <svg viewBox="0 0 24 24" class="svg-animation animation2" :style="{ top: '2vw', right: '-2vw', width: '20vw' }"><path d="M 0 0 L 24 0 L 24 24 L 0 24"></path></svg>

                <Slideshow class="about-slideshow" :image-urls="['eagle.webp', 'zionind.webp', 'shasta.webp']"></Slideshow>
            </div>
        </div>
    </div>
</template>
<style scoped>
.about {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.svg-animation {
    position: absolute;
    width: 15vw;
    fill: rgba(var(--accent-numbers), 0.5);
    transform: scale(100%);
    backdrop-filter: blur(10px);
    border-radius: 50%;
}
.animation1 {
    animation: pulse1 3s infinite ease-in-out;
}
.animation2 {
    animation: pulse2 2.5s infinite ease-in-out;
}
.animation3 {
    animation: pulse3 5s infinite ease-in-out;
}
@keyframes pulse1 {
    0% {
        transform: scale(100%) skew(0deg);
    }
    50% {
        transform: scale(105%) skew(-5deg);
    }
}
@keyframes pulse3 {
    0% {
        transform: scale(100%) skew(-5deg);
    }
    50% {
        transform: scale(110%) skew(5deg);
    }
    100% {
        transform: scale(100%) skew(-5deg);
    }
}
@keyframes pulse2 {
    0% {
        transform: scale(110%) skew(5deg);
    }
    50% {
        transform: scale(100%) skew(0deg);
    }
    100% {
        transform: scale(110%) skew(5deg);
    }
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
.slides {
    position: relative;
    width: 100%;
    height: 100%;
}
.full-slide {
    width: clamp(400px, 90%, 1400px);
    margin-left: 5%;
    height: 75vh;

    display: flex;
    flex-direction: row;
    padding-top: 15vh;
}
.full-slide > div {
    width: 45%;
    margin: 0% 2.5%;
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
