// Opretter en variabel 'currentIndex', som holder styr på, hvilken slide der vises
// 0 betyder, at vi starter med den første slide (da arrays i JavaScript starter ved 0)
let currentIndex = 0;

// Definerer en funktion changeSlide(n), som styrer, hvilken slide der skal vises.
// n er et tal, der bestemmer, om vi går frem (n = 1) eller tilbage (n = -1) i slideshowet.
function changeSlide(n) {

// Henter alle slides i slideshowet ved at finde HTML-elementer med klassen .slideshow__slide.
let slides = document.getElementsByClassName("slideshow__slide");

// Opdaterer currentIndex ved at tilføje n.
// Hvis n = 1, går vi en slide frem.
// Hvis n = -1, går vi en slide tilbage.    
    currentIndex += n;

// Sørger for, at slideshowet går i ring.
// Hvis currentIndex er større end antallet af slides (slides.length), starter vi forfra (0).
// Hvis currentIndex bliver negativt, går vi til den sidste slide (slides.length - 1).
    if (currentIndex >= slides.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = slides.length - 1;

// Går igennem alle slides og skjuler dem ved at sætte display: none.
for (let i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}

// Viser den slide, der svarer til currentIndex, ved at sætte display: block.    
    slides[currentIndex].style.display = "block";
}

// Når siden er færdig med at loade, kalder den changeSlide(0), så den første slide vises med det samme.
document.addEventListener("DOMContentLoaded", () => {
    changeSlide(0);
});