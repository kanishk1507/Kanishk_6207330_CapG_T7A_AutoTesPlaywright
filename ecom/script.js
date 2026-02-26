var cart = JSON.parse(localStorage.getItem("cart") || "[]");
function addToCart(name, price) {
    cart.push({ name: name, price: price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to Cart!");
}
function loadCart() {
    var cartContainer = document.getElementById("cart-items");
    if (cartContainer) {
        cartContainer.innerHTML = "";
        var total_1 = 0;
        cart.forEach(function (item) {
            total_1 += item.price;
            cartContainer.innerHTML += "\n                <p>".concat(item.name, " - \u20B9").concat(item.price, "</p>\n            ");
        });
        cartContainer.innerHTML += "<h3>Total: \u20B9".concat(total_1, "</h3>");
    }
}
function placeOrder() {
    alert("Order Placed Successfully! (Cash on Delivery)");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
}
