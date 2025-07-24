let slideIndex = 0;
let autoplayTimer = null;

document.addEventListener("DOMContentLoaded", () => {
    showSlides(slideIndex);
    startAutoplay();
});

function plusSlides(n) {
    stopAutoplay();
    showSlides(slideIndex += n);
    startAutoplay();
}

function currentSlide(n) {
    stopAutoplay();
    showSlides(slideIndex = n);
    startAutoplay();
}

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
        slides[i].style.zIndex = 0;
    }

    slides[slideIndex].style.opacity = 1;
    slides[slideIndex].style.zIndex = 1;

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    dots[slideIndex].classList.add("active");
}

function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setTimeout(() => {
        slideIndex++;
        showSlides(slideIndex);
        startAutoplay();
    }, 3000); 
}

function stopAutoplay() {
    clearTimeout(autoplayTimer);
}
