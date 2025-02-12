// Hovedfilen





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