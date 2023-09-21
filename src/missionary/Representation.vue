<script setup>
import { onMounted, ref } from "vue";
import Matter, { World, Engine, Bodies, Mouse, MouseConstraint, Runner, Render } from "matter-js";
const container = ref(null);

const startDate = new Date("2023-09-25");
const currentDate = new Date();
const days = Math.max(Math.round((currentDate - startDate) / (1000 * 60 * 60 * 24)), 0);
// const days = 30;

let added = false;
let countAdded = 0;
let intervalRef = null;
let colors = ["#adb7ff", "#ffadad", "white"];

onMounted(() => {
    const options = {
        rootMargin: "0px",
        threshold: 0.5,
    };
    const observer = new IntersectionObserver(observed, options);
    observer.observe(container.value);
});
function observed(entries) {
    if (entries[0].intersectionRatio > 0.1) {
        createThings();
    }
}
function createThings() {
    if (added) {
        return;
    }
    added = true;
    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Bodies = Matter.Bodies,
        Composite = Matter.Composite;

    // create an engine
    var engine = Engine.create();

    // create a renderer
    var render = Render.create({
        element: container.value,
        engine: engine,
        options: {
            wireframes: false,
            background: "transparent",
            width: container.value.offsetWidth,
            height: container.value.offsetHeight,
        },
    });
    console.log(container.value.offsetHeight + ", " + container.value.offsetWidth);
    // create two boxes and a ground
    var ground = Bodies.rectangle(0, container.value.offsetHeight + 30, container.value.offsetWidth * 2, 60, { isStatic: true, render: { fillStyle: "purple" } });
    var leftWall = Bodies.rectangle(-20, 0, 40, container.value.offsetHeight * 2, { isStatic: true, render: { fillStyle: "purple" } });
    var rightWall = Bodies.rectangle(container.value.offsetWidth + 20, 0, 40, container.value.offsetHeight * 2, { isStatic: true, render: { fillStyle: "purple" } });

    Composite.add(engine.world, [ground, leftWall, rightWall]);

    // run the renderer
    Render.run(render);

    // create runner
    var runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);
    engine.world.col;
    intervalRef = setInterval(() => {
        addCircle(Composite, engine.world);
    }, Math.max(500 - days * 3, 5));
    console.log("mounted");
}

function addCircle(Composite, world) {
    if (countAdded == days) {
        clearInterval(intervalRef);
        return;
    }
    var circle = Bodies.circle(container.value.offsetWidth / 2 + (Math.random() * container.value.offsetWidth) / 1.1 - container.value.offsetWidth / 2.2, -50, Math.max(30 - days / 30, 15), {
        render: {
            fillStyle: colors[countAdded % 3],
            lineWidth: 2,
        },
    });
    Composite.add(world, circle);
    countAdded++;
    console.log(countAdded);
}
</script>
<template>
    <div ref="container">
        <p>Wyatt has been on his mission for {{ days }} days</p>
    </div>
</template>
<style scoped>
@media only screen and (max-width: 500px) {
    div {
        height: calc(60vh - 5rem) !important;
    }
}

div {
    position: relative;
    width: 100%;
    height: 40vh;
    background-color: var(--main-bg);
    overflow: hidden;
}
p {
    margin: 0;
    text-align: center;
    font-size: 2rem;
    position: absolute;
    width: 80%;
    margin-left: 10%;
}
canvas {
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>
