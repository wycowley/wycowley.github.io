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
                    My name is Wyatt Cowley, and I'm a CS student at BYU. I'm currently looking for internships in the Bay Area for this summer. Thanks for stopping by!
                    <br />
                    <br />
                    I am adept at frontend languages and frameworks such as React, Vue, and Flutter. I also have experience with backend languages such as Python, Java, and C++.
                </p>
            </div>
            <div class="slides">
                <svg viewBox="0 0 24 24" class="svg-animation animation1" :style="{ top: '-4vw', right: '-4vw', filter: ' hue-rotate(100deg)' }"><path d="M 0 0 L 24 0 L 24 24 L 0 24"></path></svg>
                <svg viewBox="0 0 24 24" class="svg-animation animation2" :style="{ top: '-6vw', right: '5vw', width: '10vw' }"><path d="M 0 0 L 24 0 L 24 24 L 0 24"></path></svg>

                <Slideshow class="about-slideshow" :image-urls="['cover.webp', 'family.webp', 'star.webp']"></Slideshow>
            </div>
        </div>
        <div class="full-slide">
            <div class="text">
                <h1>Work Experience</h1>
                <p>
                    This past year, I worked as a Research Assistant in a lab at BYU. I worked with other students to develop a full-stack application in preparation for training AIs to navigate a virtual social environment.
                    <br />
                    <br />
                    In high school I worked at
                    <a href="https://www.peeryacademy.com/" className="link" target="_blank" rel="noopener"> Peery Piano Academy</a> as one of their Lead Guides, teaching piano to 5+ students. Check out
                    <a href="https://wyattcowley.com/music/" className="link" target="_blank" rel="noopener"> my personal music portfolio here</a>!<br />
                    <br />
                    I also lifeguarded and taught swim lessons at my local city pool.
                    <br />
                    <br />
                    At Mountain View High School, I was the President of the Practical Skills Club, and was part of the CS and Business clubs.
                </p>
            </div>
            <div class="slides">
                <svg viewBox="0 0 24 24" class="svg-animation animation1" :style="{ top: '-4vw', left: '-4vw', filter: '', width: '17vw' }"><path d="M 0 0 L 24 0 L 24 24 L 0 24"></path></svg>
                <svg viewBox="0 0 24 24" class="svg-animation animation2" :style="{ top: '3vw', left: '-8vw', width: '9vw', filter: 'hue-rotate(100deg) ' }"><path d="M 0 0 L 24 0 L 24 24 L 0 24"></path></svg>

                <Slideshow class="about-slideshow" :image-urls="['piano2.webp', 'chess.webp', 'wakeboard.webp']"></Slideshow>
            </div>
        </div>
        <div class="full-slide">
            <div class="text">
                <h1>Interests</h1>
                <p>
                    In my free time, I love to read epic fantasy, spend time in the outdoors, and play Minecraft bedwars with my friends. I love going on adventures: such as scaling Mt. Shasta or scuba diving in Honduras.
                    <br />
                    <br />
                    I am a member of the Church of Jesus Christ of Latter Day Saints, and attend weekly devotionals and activities with my church and youth congregation.<br />
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
@media only screen and (max-width: 950px) {
    .full-slide {
        flex-direction: column-reverse !important;
        height: auto !important;
        width: 100% !important;
        margin-left: 0 !important;
    }

    .about-slideshow {
        width: 100% !important;
    }
    .slides {
        height: 75vh !important;
        padding: 2.5% !important;
        width: 95% !important;
        margin: 0 !important;
    }

    .text {
        width: 95% !important;
        margin: 2.5% !important;
        margin-top: 4rem !important;
    }
    .svg-animation {
        display: none !important;
    }
}
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
    -webkit-backdrop-filter: blur(10px);
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
    filter: brightness(0.7);
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
.full-slide:nth-child(2) {
    flex-direction: row-reverse;
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
