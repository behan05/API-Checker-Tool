
// prevant the Default Browser Feature After Click On the Image.
function avoidBrowserMenu() {
    const illustration = document.getElementById("illustration");

    illustration.addEventListener("contextmenu", (dert) => {
        dert.preventDefault();
    })
}

// Follow white rounded div to curser when cursor move over window.
function followCursor() {
    const cursor = document.getElementById("cursor");
    window.addEventListener("mousemove", (dert) => {
        gsap.to(cursor, {
            x: dert.x,
            y: dert.y,
            duration: 0.4,
        })
    })
}

// Creating animation for Logo.
function animateLogo() {
    const logo = document.getElementById("logo");
    gsap.from(logo, {
        scale: 0,
        duration: 1.8
    })
}

// Creating animation for Nav Items.
function animateNav() {
    gsap.from("nav ul li", {
        y: -100,
        scale: 2,
        opacity: 0,
        stagger: 0.3
    })
}

// Animate main section || text animation.

function textAnimation() {
    const h1Element = document.querySelector("#introduction h1");
    const h1Text = h1Element.textContent;

    if (typeof h1Text === "string") {

        // Clearing existing text in the h1 element.
        h1Element.textContent = "";

        // Breaking text content into an array of characters.
        const charactersArray = h1Text.split("");
        let charSet = "";

        // Wrapping each character in a span and appending it to the h1.
        charactersArray.forEach((text, index) => {
            if (charactersArray[index] === " ") {
                charSet += " ";
            }
            else {
                charSet += `<span class="gsapSpan">${text}</span>`;
            }
        });
        // Appending TextNode.
        h1Element.innerHTML = charSet;
    };

    const tl = gsap.timeline();

    tl.from("#visuals img", {
        y: 100,
        scale: 0,
        duration: 0.8,
        delay: 0.8,
        opacity: 0,
    });

    tl.from(".gsapSpan", {
        y: 80,
        scale: 2.5,
        opacity: 0,
        stagger: 0.1
    });

    tl.from("#introduction p", {
        x: -200,
        scale: 0,
        opacity: 0,
        duration: 0.8
    })

    tl.from(".cta-button", {
        x: -200,
        scale: 0,
        opacity: 0,
        duration: 0.8
    })

}


// use only for specific section.
// window.onload = function () {
//     textAnimation();
// };

window.addEventListener("DOMContentLoaded", () => {
    avoidBrowserMenu();
    followCursor();
    animateLogo();
    animateNav();
    textAnimation();
})
