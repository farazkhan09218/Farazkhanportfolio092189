/* Portfolio interactions: typing animation + responsive navigation */
"use strict";

document.addEventListener("DOMContentLoaded", () => {
    // Typing animation
    const words = [
        "IT Student",
        "AI Developer",
        "Technical Content Writer",
        "Digital Marketing & SEO Specialist"
    ];

    const typing = document.getElementById("typing");

    if (typing) {
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            const currentWord = words[wordIndex];

            if (isDeleting) {
                charIndex--;
                typing.textContent = currentWord.substring(0, charIndex);
            } else {
                charIndex++;
                typing.textContent = currentWord.substring(0, charIndex);
            }

            let speed = isDeleting ? 45 : 85;

            if (!isDeleting && charIndex >= currentWord.length) {
                isDeleting = true;
                speed = 1400;
            } else if (isDeleting && charIndex <= 0) {
                charIndex = 0;
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                speed = 250;
            }

            window.setTimeout(typeEffect, speed);
        }

        typeEffect();
    }

    // Accessible mobile navigation
    const menuToggle = document.getElementById("menu-toggle");
    const navigation = document.getElementById("primary-navigation");

    if (menuToggle && navigation) {
        const closeMenu = () => {
            navigation.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        };

        menuToggle.addEventListener("click", () => {
            const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

            menuToggle.setAttribute("aria-expanded", String(!isOpen));
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Open navigation menu" : "Close navigation menu"
            );
            navigation.classList.toggle("is-open", !isOpen);
        });

        navigation.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") closeMenu();
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 768) closeMenu();
        });
    }
});
