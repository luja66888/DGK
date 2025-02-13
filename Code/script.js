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

/* // jeg har lige gemt det her som note så vi ikke skal verify hver gang //
    window.addEventListener('load', () => {
        const age = prompt("Indtast din alder:");
        if (age >= 18) {
          alert("Velkommen til Den Gamle Købmandsgaard!");
          localStorage.setItem('ageVerified', true); 
        } else {
          alert("Du skal være mindst 18 år for at besøge denne side.");
          window.location.href = "https://www.google.com";
        }
      }
    );

    */