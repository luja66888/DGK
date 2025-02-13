
// Variabler
var cart = [];
var cartPanel = document.getElementById("cart-panel");
var cartItems = document.getElementById("cart-items");
var cartTotal = document.getElementById("cart-total");
var cartCount = document.getElementById("cart-count");
var cartIcon = document.querySelector(".cart-icon");

// Funktion til at vise/skjule indkøbskurven
function toggleCart() {
    cartPanel.classList.toggle("open");
}

// Funktion til at tilføje produkter til kurven
function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

// Funktion til at opdatere indkøbskurven
function updateCart() {
    cartItems.innerHTML = ""; // Ryd eksisterende produkter
    var total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Din kurv er tom.</p>";
    } else {
        cart.forEach((item, index) => {
            var productElement = document.createElement("div");
            productElement.classList.add("cart-item");
            productElement.innerHTML = `
                <p>${item.name} - ${item.price} kr</p>
                <button class="remove-item" data-index="${index}">❌</button>
            `;
            cartItems.appendChild(productElement);
            total += item.price;
        });

        // Event Listeners til fjern-knapper
        document.querySelectorAll(".remove-item").forEach(button => {
            button.addEventListener("click", function() {
                var index = this.getAttribute("data-index");
                cart.splice(index, 1);
                updateCart();
            });
        });
    }

    cartTotal.textContent = total.toFixed(2) + " kr"; // Vis total med 2 decimaler
    cartCount.textContent = cart.length; // Opdater kurv-ikonet
}

// Luk kurven, hvis man klikker udenfor
document.addEventListener("click", function(event) {
    if (!cartPanel.contains(event.target) && !cartIcon.contains(event.target)) {
        cartPanel.classList.remove("open");
    }
});



/*// Variabler 
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