

document.querySelectorAll('aside a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target ID
        const targetElement = document.getElementById(targetId);

        // Scroll smoothly to the target element
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});










// body animation.

function bodyAnimation() {
    gsap.from(".mainContainer", {
        x: 0,
        y: 0,
        opacity: 0,
        duration: 1,
        scale: 0
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
// ****************************************************************

// ****************************************************************

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
// ****************************************************************

// ****************************************************************
// Navbar menu script.
// Select the open menu icon, close menu icon, and nav element
const openMenuIcon = document.querySelector('.openMenu');
const closeMenuIcon = document.querySelector('.closeMenu');
const navMenu = document.querySelector('nav ul');

// Function to show the menu when openMenuIcon is clicked
function openMenu() {
    navMenu.style.display = 'block'; // Show the nav
    navMenu.classList.add("navUlStyle") // toggle css
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
// ****************************************************************


window.addEventListener("DOMContentLoaded", () => {
    followCursor();
    animateLogo();
    animateNav();
    bodyAnimation();
    closeMenuIcon.style.display = 'none'; // Initially hide the close menu icon
})