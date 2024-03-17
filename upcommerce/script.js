let cartItems = [];
let totalPrice = 0;

function addToCart(productName) {
  const productPrice = getProductPrice(productName);
  cartItems.push({ name: productName, price: productPrice });
  totalPrice += productPrice;
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-items");
  const totalSpan = document.getElementById("cart-total");
  
  cartList.innerHTML = "";
  cartItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });

  totalSpan.textContent = totalPrice.toFixed(2);
}

function getProductPrice(productName) {
  switch (productName) {
    case 'Galaxy S23':
      return 19.99;
    case 'Galaxy S21':
      return 29.99;
    case 'iPhone 13':
      return 39.99;
    default:
      return 0;
  }
}

function clearCart() {
    cartItems = []; // Reset the cart items array
    totalPrice = 0; // Reset the total price
    updateCart(); // Update the cart display
  }
