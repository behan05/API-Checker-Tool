const signupForm = document.getElementById("signup-form");
signupForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const userName = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const fullName = document.getElementById("full-name").value;
    const dob = document.getElementById("dob").value;
    const phoneNumber = document.getElementById("phone-number").value;

    try {
        const response = await fetch("http://localhost:5000/api/auth/signup", {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({
                userName,
                email,
                password,
                confirmPassword,
                fullName,
                dob,
                phoneNumber
            })
        })

        if (!response.ok) {
            throw new Error("Failed to sign up");
        }

        const result = await response.json();
        alert(result.message || "Signup successful!"); // Display server response

        location.href = "http://127.0.0.1:5500/client/index.html"; // Redirect after success
        
    } catch (error) {
        console.error("Error:", error.message);
        alert("An error occurred while sending the request.");
    }
})














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

// Creating animation for form control
function formAnimation() {
    const tl = gsap.timeline();


    tl.from(".form-container", {
        y: 100,
        scale: 0,
        duration: 0.8,
        delay: 0.2,
    });
    tl.from("#signup-form", {
        y: 100,
        scale: 0,
        duration: 0.8,
        delay: 0.2,
    });
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
    formAnimation();
    closeMenuIcon.style.display = 'none'; // Initially hide the close menu icon
})

