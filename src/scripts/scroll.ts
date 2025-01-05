// Remove the hidden class from elements with the class of remove-hidden-on-load
document.querySelectorAll(".remove-hidden-on-load").forEach((el) => {
    el.classList.remove("hidden");
})

// Disable scroll restoration
history.scrollRestoration = "manual";

function fixScroll() {
    if (!window.location.hash) return;

    const hash = location.hash.slice(1);
    const element = document.getElementById("__" + hash);

    if (!element) return;

    element.scrollIntoView({ behavior: "smooth" });
}

// Scroll to the element with the id of the hash when the back button is clicked
window.addEventListener("popstate", () => fixScroll());
window.addEventListener("resize", () => fixScroll());

window.addEventListener("DOMContentLoaded", () => {
    requestAnimationFrame(() => {
        // Scroll to the home element
        const home = document.getElementById("__home")!;
        home.scrollIntoView({ behavior: "auto" });

        // Animate scroll to the element using scrollIntoView based on hash (id=hash)
        setTimeout(() => {
            fixScroll();
        }, 300);
    });
});
