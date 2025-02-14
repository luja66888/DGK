// Hovedfilen

// Slideshow ..... Lucas
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

/* ............. Joachim (det her er den gamle version, men vi kan stadig tage det med)
    function checker() {
      let age = document.getElementById('age').value.trim();
      const message = document.getElementById('answer');
  
      if (age === '') {
          message.textContent = 'Indtast venligst din alder.';
          message.style.color = 'white';
          message.style.fontWeight = 'bold';
  
      } else if (isNaN(age)) {
          message.textContent = 'Indtast venligst et gyldigt tal.';
          message.style.color = 'white';
          message.styleW.fonteight = 'bold';
      } else if (parseInt(age) < 18) {
          window.location = href='https://www.google.com/';
      } else {
          window.location = href='https://dgkshop.com/';
      }
  }

  */


/*  Alert menu..................... Joachim */                                        
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