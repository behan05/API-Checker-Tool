
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
        duration: 0.3
    })
}

// Creating animation for Nav Items.
function animateNav() {
    gsap.from("nav ul li", {
        y: -100,
        scale: 2,
        opacity: 0,
        stagger: 0.2
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
        duration: 0.2,
        delay: 0.4,
        opacity: 0,
    });

    tl.from(".gsapSpan", {
        y: 80,
        scale: 2.5,
        opacity: 0,
        // stagger: 0.1
    });

    tl.from("#introduction p", {
        x: -200,
        scale: 0,
        opacity: 0,
    })

    tl.from(".cta-button", {
        x: -200,
        scale: 0,
        opacity: 0,
    })

}


// use only for specific section.
// window.onload = function () {
//     textAnimation();
// };

// Navbar menu script.
// Select the open menu icon, close menu icon, and nav element
const openMenuIcon = document.querySelector('.openMenu');
const closeMenuIcon = document.querySelector('.closeMenu');
const navMenu = document.querySelector('nav ul');

// Function to show the menu when openMenuIcon is clicked
function openMenu() {
    navMenu.style.display = 'block'; // Show the nav
    navMenu.classList.add("navUlStyle")
    openMenuIcon.style.display = 'none'; // Hide the open menu icon
    closeMenuIcon.style.display = 'block'; // Show the close menu icon

    gsap.from("nav ul li", {
        x: 300,
        scale: 0,
        opacity: 0,
        stagger: 0.2
    })
}

// Function to hide the menu when closeMenuIcon is clicked
function closeMenu() {
    navMenu.style.display = 'none'; // Hide the nav
    navMenu.classList.add("navUlStyle")
    openMenuIcon.style.display = 'block'; // Show the open menu icon
    closeMenuIcon.style.display = 'none'; // Hide the close menu icon
}

window.addEventListener("DOMContentLoaded", () => {
    avoidBrowserMenu();
    followCursor();
    animateLogo();
    animateNav();
    textAnimation();
    closeMenuIcon.style.display = 'none'; // Initially hide the close menu icon
})
