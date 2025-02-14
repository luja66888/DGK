// Variabler 
let cart = [];   // Array til at gemme produkter i kurven
const cartPanel = document.getElementById("cart-panel");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");

// Funktion til at vise/skjule indkøbskurven
function toggleCart() {
    cartPanel.classList.toggle("open");
}

// Funktion til at tilføje produkter til kurven
function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}
// Funktion til at fjerne produkt fra kurven
function removeFromCart(index) {
    cart.splice(index, 1); // Fjern produktet baseret på index
    updateCart();
}

// Funktion til at opdatere indkøbskurven, if-else, DOM, Operator =+, for-loop, 
function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Din kurv er tom.</p>";
    } else {
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].price;
            cartItems.innerHTML += `
                <p>${cart[i].name} - ${cart[i].price} DKK 
                <button onclick="removeFromCart(${i})">Fjern</button>
                </p>`;
        }
    }

    cartTotal.textContent = total; // Opdater den samlede pris 
    cartCount.textContent = cart.length; // Opdater antallet af varer 
}