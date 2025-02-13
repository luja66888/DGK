// Hovedfilen

// Slideshow
let currentIndex = 0;
function changeSlide(n) {
    let slides = document.getElementsByClassName("slideshow__slide");
    currentIndex += n;
    if (currentIndex >= slides.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = slides.length - 1;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[currentIndex].style.display = "block";
    }
    document.addEventListener("DOMContentLoaded", () => {
        changeSlide(0);
    });