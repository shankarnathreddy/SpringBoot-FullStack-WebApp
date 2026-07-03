let totalCart = 0;
let cart = JSON.parse(localStorage.getItem("spicyCart")) || [];

/* =========================
   CART COUNT
========================= */
totalCart = cart.length;
let cartCount = document.getElementById("cartCount");

if(cartCount){
  cartCount.innerHTML = totalCart;
}

/* =========================
   OPEN CART PAGE
========================= */
let cartBox = document.querySelector(".cart-box");
if(cartBox){
  cartBox.onclick = function(){
    window.location.href = "cart.html";
  };
}

/* =========================
   SEARCH FUNCTION
========================= */
function searchMenu(){
  let input = document.getElementById("searchInput").value.toLowerCase();
  let cards = document.querySelectorAll(".menu-card");
  let found = false;

  cards.forEach(card => {
    let itemName = card.querySelector("h3").innerText.toLowerCase();
    if(itemName.includes(input)){
      card.style.display = "block";
      found = true;
    }
    else{
      card.style.display = "none";
    }
  });

  /* NO RESULTS */
  let noResults = document.getElementById("noResults");
  if(noResults){
    if(found){
      noResults.style.display = "none";
    }
    else{
      noResults.style.display = "block";
    }
  }
}

/* =========================
   TOAST FUNCTION
========================= */
function showToast(message){

  let toast = document.getElementById("toast");
  if(!toast) return;
  toast.innerHTML = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  },2000);
}

/* =========================
   INCREASE ITEM
========================= */
function increase(button){
  let card = button.closest(".menu-card");
  let name = card.querySelector("h3").innerText;

  /* PRICE */
  let priceText = card.querySelector(".price").innerText;
  let price = Number(priceText.replace("₹",""));

  /* IMAGE */
  let image = card.querySelector("img").src;

  /* COUNT */
  let count = button.parentElement.querySelector("span");
  let value = parseInt(count.innerHTML);
  value++;
  count.innerHTML = value;

  /* TOTAL CART */
  totalCart++;
  if(cartCount){
    cartCount.innerHTML = totalCart;
  }

  /* ADD ITEM */
  cart.push({
    name : name,
    price : price,
    image : image
  });

  /* SAVE */
  localStorage.setItem(
    "spicyCart",
    JSON.stringify(cart)
  );

  /* TOAST */
  showToast(name + " added to cart 🌶️");
}

/* =========================
   DECREASE ITEM
========================= */

function decrease(button){
  let card = button.closest(".menu-card");
  let name = card.querySelector("h3").innerText;
  let count = button.parentElement.querySelector("span");
  let value = Number(count.innerHTML);
  if(value > 0){
    value--;
    count.innerHTML = value;

    /* TOTAL CART */

    totalCart--;
    if(cartCount){
      cartCount.innerHTML = totalCart;
    }

    /* REMOVE ITEM */

    let index = cart.findIndex(
      item => item.name === name
    );

    if(index !== -1){
      cart.splice(index,1);
    }

    /* SAVE */
    localStorage.setItem(
      "spicyCart",
      JSON.stringify(cart)
    );

    /* TOAST */
    showToast(name + " removed from cart ❌");
  }
}

/* =========================
   LOAD OLD COUNTS
========================= */

function loadCounts(){
  let grouped = {};
  cart.forEach(item => {
    grouped[item.name] = (grouped[item.name] || 0) + 1;
  });
  
  let cards = document.querySelectorAll(".menu-card");
  cards.forEach(card => {
    let name = card.querySelector("h3").innerText;
    let span = card.querySelector(".cart-controls span");
    if(span){
      span.innerHTML = grouped[name] || 0;
    }
  });
}

/* LOAD COUNTS */
loadCounts();