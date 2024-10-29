function fetchDataPassToServer() {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const userMessage = document.getElementById("userMessage").value;

        try {
            const response = await fetch("http://localhost:5000/api/support/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    userMessage
                })
            }); 

            if (!response.ok) {
                // convert respons json into js object.
                const errorData = await response.json(); // Optional: Read error response
                throw new Error(`Error: ${errorData.message || response.statusText}`);
            } else {
                const data = await response.json();
                alert("Request sent successfully: " + data.message);

                // Clear form fields after submission
                form.reset();
            }
        } catch (error) {
            console.error(`Server is not responding: ${error.message}`);
            alert("An error occurred: " + error.message); // Inform user about the error
        }
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

// Form animation.

function formAnimation() {
    const tl = gsap.timeline();
    tl.from(".contact-container", {
        opacity: 0,
        scale: 0,
    });

    tl.from(".contact-container p", {
        y: -100,
        opacity: 0,
        scale: 2
    })
    tl.from(".contact-container h1", {
        y: -100,
        opacity: 0,
        scale: 3
    })

    tl.from("#contactForm label", {
        y: -10,
        opacity: 0,
        scale: 3,
        stagger: 0.1
    })

    tl.from("#contactForm input", {
        y: -10,
        opacity: 0,
        scale: 3,
        stagger: 0.1
    })
    tl.from("#contactForm textarea", {
        y: -10,
        opacity: 0,
        scale: 3,
        stagger: 0.1
    })
    tl.from("#contactForm button", {
        y: 10,
        opacity: 0,
        scale: 0,
    })
}

window.addEventListener("DOMContentLoaded", () => {
    followCursor();
    animateLogo();
    animateNav();
    formAnimation();
    fetchDataPassToServer();
    closeMenuIcon.style.display = 'none'; // Initially hide the close menu icon
})