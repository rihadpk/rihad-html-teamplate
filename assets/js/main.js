// ===========================
// testimonials start
// ===========================

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
        },
        1200: {
            slidesPerView: 2,
        },
    },
});

// ===========================
// animated text loop (hero section maybe)
// ===========================

const animatedWords = ["Wordpress", "Theme", "Developer"];
let currentWordIndex = 0;
const textElement = document.getElementById("animated-text");

function showNextWord() {
    textElement.classList.add("word-fade-out");

    textElement.addEventListener("animationend", function handleFadeOut() {
        textElement.removeEventListener("animationend", handleFadeOut);

        currentWordIndex = (currentWordIndex + 1) % animatedWords.length;
        textElement.textContent = animatedWords[currentWordIndex];

        textElement.classList.remove("word-fade-out");
        textElement.classList.add("word-fade-in");

        textElement.addEventListener("animationend", function handleFadeIn() {
            textElement.removeEventListener("animationend", handleFadeIn);
            textElement.classList.remove("word-fade-in");

            setTimeout(showNextWord, 1500);
        });
    });
}

textElement.textContent = animatedWords[currentWordIndex];
setTimeout(showNextWord, 1500);

// ===========================
// counter section
// ===========================

const counters = document.querySelectorAll(".count");
const speed = 50;

counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    let count = 0;

    const updateCount = () => {
        const increment = Math.ceil(target / speed);

        if (count < target) {
            count += increment;
            counter.textContent = count + "+";
            setTimeout(updateCount, 20);
        } else {
            counter.textContent = target + "+";
        }
    };

    updateCount();
});

// ===========================
// contact title morph text
// ===========================

// header sticky //
const header = document.getElementById("mainHeader");
let isSticky = false;

window.addEventListener("scroll", () => {
    if (window.scrollY > 50 && !isSticky) {
        header.classList.add("is-sticky");
        isSticky = true;
    } else if (window.scrollY <= 50 && isSticky) {
        header.classList.remove("is-sticky");
        isSticky = false;
    }
});
// end //

// Skills //
document.addEventListener("DOMContentLoaded", () => {
    const skillFills = document.querySelectorAll(".progress-fill");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const width = fill.getAttribute("data-width");
                fill.style.width = width;
                observer.unobserve(fill);
            }
        });
    }, { threshold: 0.4 });

    skillFills.forEach(fill => {
        fill.style.width = "0"; // Initial
        observer.observe(fill);
    });
});

// end //

// smoth scrool //
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const target = document.getElementById(targetId);
        const offset = 80; // your sticky header height

        if (target) {
            const topPos = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({
                top: topPos,
                behavior: "smooth"
            });
        }
    });
});
// end //

// Preloader //


// end //
