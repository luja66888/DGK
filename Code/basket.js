
// Variabler 
var cart = [];
var cartPanel = document.getElementById("cart-panel");
var cartItems = document.getElementById("cart-items");
var cartTotal = document.getElementById("cart-total");
var cartCount = document.getElementById("cart-count");

// Funktion til at vise/skjule indkøbskurven
function toggleCart() {
    cartPanel.classList.toggle("open");
}

// Funktion til at tilføje produkter til kurven
function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

// Funktion til at opdatere indkøbskurven, if-else, DOM, Operator =+, for-loop, array
function updateCart() {
    cartItems.innerHTML = "";
    var total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Din kurv er tom.</p>"; // tekst bliver udskiftet med produkter med else
    } else {
        for (var i = 0; i < cart.length; i++) {  //  for-loop
            var item = cart[i]; // Hent produktet fra arrayet
            total += item.price; // Tilføj prisen for hvert produkt til den samlede pris
            cartItems.innerHTML += `<p>${item.name}  ${item.price} DKK</p>`; // Opdater DOM med produktinformation
        }
    }

    cartTotal.textContent = total; // Opdater den samlede pris i DOM
    cartCount.textContent = cart.length; // Opdater antallet af varer i DOM
}