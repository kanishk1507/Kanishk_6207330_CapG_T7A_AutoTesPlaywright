interface Product {
    name: string;
    price: number;
}

let cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");

function addToCart(name: string, price: number): void {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to Cart!");
}

function loadCart(): void {
    const cartContainer = document.getElementById("cart-items");

    if (cartContainer) {
        cartContainer.innerHTML = "";

        let total = 0;

        cart.forEach((item) => {
            total += item.price;

            cartContainer.innerHTML += `
                <p>${item.name} - ₹${item.price}</p>
            `;
        });

        cartContainer.innerHTML += `<h3>Total: ₹${total}</h3>`;
    }
}

function placeOrder(): void {
    alert("Order Placed Successfully! (Cash on Delivery)");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
}