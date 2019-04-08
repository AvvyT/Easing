const element = document.scrollingElement;
const duration = 2000;

document.querySelector('.control').addEventListener("click", animate);

// timing-funktion
function easeCubic(t) {
    // retur värdet beskriver hur långt animationen har kommit efter en viss tid
    return Math.max(0, Math.min(1.0, t)) ** 3;
}

function animate() {
    let start = null;
    const initialScroll = element.scrollTop;

    function scrollToTop(timestamp) {
        console.log(initialScroll);

        if (!start) {
            start = timestamp;
        }

        const progress = timestamp - start;
        console.log(progress);

        const delta = progress / duration;
        const top = initialScroll - easeCubic(delta) * initialScroll;
        element.scrollTop = top;

        if (progress < duration) {
            window.requestAnimationFrame(scrollToTop);
        }
    }

    window.requestAnimationFrame(scrollToTop);
}
