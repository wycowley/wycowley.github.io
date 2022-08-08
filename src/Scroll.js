import { ref } from "vue";
import _throttle from "lodash/throttle";
export const scroll = ref(0);
document.addEventListener(
    "scroll",
    _throttle(function () {
        scroll.value = window.scrollY;
    }, 30)
);
