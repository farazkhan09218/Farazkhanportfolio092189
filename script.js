
"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const words = [
        "IT Student",
        "AI Developer",
        "Technical Content Writer",
        "Digital Marketing & SEO Specialist"
    ];

    const typing = document.getElementById("typing");

    // Stop safely if the typing element is missing
    if (!typing) {
        console.warn('Element with id="typing" was not found.');
        return;
    }

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

        let speed = isDeleting ? 45 : 90;

        // Pause when a complete word is displayed
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            speed = 1500;
        }

        // Move to the next word after deleting the current one
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 300;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();
});
