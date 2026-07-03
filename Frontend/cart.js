let cart = JSON.parse(localStorage.getItem("spicyCart")) || [];
let cartItems = document.getElementById("cartItems");
let total = 0;
let emptyCart = document.getElementById("emptyCart");
let totalBox = document.getElementById("totalBox");
let checkoutBtn = document.getElementById("checkoutBtn");
let removeAllBtn = document.querySelector(".remove-all-btn");

function displayCart() {
  cartItems.innerHTML = "";
  total = 0;

  /* EMPTY CART */
  if(cart.length === 0){
    emptyCart.style.display = "block";
    totalBox.style.display = "none";
    checkoutBtn.style.display = "none";
    removeAllBtn.style.display = "none";
    return;
  }
  else{
    emptyCart.style.display = "none";
    totalBox.style.display = "block";
    checkoutBtn.style.display = "inline-block";
    removeAllBtn.style.display = "inline-block";
  }

  /* GROUP ITEMS */
  let groupedCart = {};
  cart.forEach(item => {
    if(groupedCart[item.name]){
      groupedCart[item.name].quantity += 1;
    }
    else{
      groupedCart[item.name] = {
        name: item.name,
        price: item.price,
        image: item.image,
        quantity: 1
      };
    }
  });

  /* SHOW ITEMS */
  Object.values(groupedCart).forEach(item => {
    let itemTotal = item.price * item.quantity;
    total += itemTotal;
    cartItems.innerHTML += `
      <div class="cart-item">
        <div class="left">
          <img src="${item.image}" alt="${item.name}">
          <div class="item-details">
            <h3>${item.name}</h3>
            <p>Quantity : ${item.quantity}</p>
          </div>
        </div>
        <div class="right">
          <h2>₹${itemTotal}</h2>
          <button class="remove-btn"
          onclick="removeItem('${item.name}')">
            Remove 1
          </button>
        </div>
      </div>
    `;
  });
  document.getElementById("totalPrice").innerHTML = total;

   // ✅ SAVE TOTAL HERE (FIX)
  localStorage.setItem("totalAmount", total);
}

/* REMOVE SINGLE ITEM */
function removeItem(name){
  let index = cart.findIndex(item => item.name === name);
  if(index !== -1){
    cart.splice(index, 1);
  }
  localStorage.setItem(
    "spicyCart",
    JSON.stringify(cart)
  );
  displayCart();
}

/* REMOVE ALL ITEMS */
function removeAllItems(){
  cart = [];
  localStorage.removeItem("spicyCart");
  localStorage.removeItem("totalAmount");
  displayCart();
}

/* GO TO CHECKOUT */
function goToCheckout(){
  if(cart.length === 0){
    alert("Your cart is empty!");
    return;
  }
  window.location.href = "checkoutpage.html";
}

/* LOAD CART */
displayCart();
