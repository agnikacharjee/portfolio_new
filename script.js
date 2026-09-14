```javascript
// =====================================================
// AGNIK ACHARJEE PORTFOLIO
// JAVASCRIPT
// =====================================================


// =====================================================
// MOBILE MENU
// =====================================================

const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

function closeMenu() {
    menuToggle.setAttribute("aria-expanded", "false");
    mobileNav.classList.remove("is-open");
    mobileNav.setAttribute("aria-hidden", "true");
}

menuToggle.addEventListener("click", () => {

    const isOpen = mobileNav.classList.toggle("is-open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    mobileNav.setAttribute(
        "aria-hidden",
        String(!isOpen)
    );

});


// Close mobile menu when a link is clicked

mobileNav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", closeMenu);

});


// =====================================================
// PROJECT TABS
// =====================================================

const tabs = document.querySelectorAll(".project-tab");
const panels = document.querySelectorAll(".project-panel");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        const target = tab.dataset.project;

        // Remove active class from all tabs
        tabs.forEach(t => {
            t.classList.remove("active");
        });

        // Remove active class from all projects
        panels.forEach(panel => {
            panel.classList.remove("active");
        });

        // Activate clicked tab
        tab.classList.add("active");

        // Activate selected project
        const selectedProject = document.getElementById(target);

        if (selectedProject) {
            selectedProject.classList.add("active");
        }

    });

});


// =====================================================
// SCROLL REVEAL ANIMATION
// =====================================================

const revealTargets = document.querySelectorAll(
    ".section-label, " +
    ".section-heading, " +
    ".about-text, " +
    ".code-card, " +
    ".skill-card, " +
    ".timeline-item, " +
    ".project-panel, " +
    ".edu-card, " +
    ".mini-card, " +
    ".contact-box"
);


// Add reveal class

revealTargets.forEach(element => {

    element.classList.add("reveal");

});


// Create observer

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


// Observe elements

revealTargets.forEach(element => {

    observer.observe(element);

});


// =====================================================
// BACK TO TOP BUTTON
// =====================================================

const backTop = document.querySelector(".back-top");


window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =====================================================
// TERMINAL LOAD EFFECT
// =====================================================

const terminalBody = document.querySelector(".terminal-body");


window.addEventListener("load", () => {

    if (terminalBody) {

        terminalBody.style.opacity = "0";

        setTimeout(() => {

            terminalBody.style.transition =
                "opacity 0.5s ease";

            terminalBody.style.opacity = "1";

        }, 250);

    }

});


// =====================================================
// ACTIVE NAVIGATION
// =====================================================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".desktop-nav a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= section
```
