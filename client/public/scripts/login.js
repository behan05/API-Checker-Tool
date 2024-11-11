
async function loginValidation() {
    const userName = document.getElementById("userName").value;
    const password = document.getElementById("password").value;


    try {

        const response = await fetch("http://localhost:5000/api/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                
            }
        });

    } catch (error) {

    }
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
        duration: 1.8
    })
}
// ****************************************************************

// ****************************************************************

// Creating animation for Nav Items.
function animateNav() {
    gsap.from("nav ul li", {
        y: -100,
        scale: 2,
        opacity: 0,
        stagger: 0.3
    })
}
// ****************************************************************

// ****************************************************************

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
    closeMenuIcon.style.display = 'none'; // Initially hide the close menu icon
})

