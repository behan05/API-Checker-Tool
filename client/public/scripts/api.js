// Function to show/hide body input based on selected method
function toggleBodyInput() {
    const method = document.getElementById('method').value;
    const bodyContainer = document.getElementById('bodyContainer');

    if (method === 'POST' || method === 'PATCH') {
        bodyContainer.style.display = 'block';
    } else {
        bodyContainer.style.display = 'none';
    }
}

// Function to submit the form data
async function submitRequest() {
    const method = document.getElementById('method').value;
    const url = document.getElementById('url').value;
    const bodyData = document.getElementById('body').value;
    const displayDataContainer = document.getElementById('responseData');

    let options = {
        method: method,
        headers: { 'Content-Type': 'application/json' }
    };

    // Only add body if method is POST or PATCH
    if (method === 'POST' || method === 'PATCH') {
        try {
            // Validate JSON format
            JSON.parse(bodyData);
            options.body = JSON.stringify(bodyData); // Parse and re-stringify to validate JSON
        } catch (error) {
            alert('Invalid JSON in body data.');
            return;
        }
    } else if (method === 'GET') {
        // For GET requests, the body is not needed or allowed
        options.body = undefined; // This line is optional; it’s just to be clear
    }

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        displayDataContainer.style.display = "block";
        displayDataContainer.textContent = JSON.stringify(result, null, 2);
    } catch (error) {
        alert('Request failed: ' + error.message);
    }
}

submitRequest();

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
})