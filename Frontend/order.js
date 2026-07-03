let order = JSON.parse(
  localStorage.getItem("orderDetails")
);

/* NO ORDER DETAILS */
if(!order){
  alert("No Order Details Found");
  window.location.href = "checkoutpage.html";
}

/* CUSTOMER DETAILS */
document.getElementById("customerName").innerHTML = order.fullName;
document.getElementById("customerMobile").innerHTML = order.mobileNumber;
document.getElementById("customerState").innerHTML = order.state;
document.getElementById("customerCity").innerHTML = order.city;
document.getElementById("customerAddress").innerHTML = order.address;
document.getElementById("customerPincode").innerHTML = order.pincode;

/* =========================
   GET CART ITEMS
========================= */

let cart = JSON.parse(
  localStorage.getItem("spicyCart")
) || [];

/* EMPTY CART */
if(cart.length === 0){
  alert("Cart is Empty");
  window.location.href = "menu.html";
}

/* GROUP ITEMS */
let groupedItems = {};

cart.forEach(item => {

  if(groupedItems[item.name]){

    groupedItems[item.name].quantity += 1;

  }
  else{

    groupedItems[item.name] = {

      name : item.name,
      price : item.price,
      image : item.image,
      quantity : 1
    };
  }
});

/* =========================
   DISPLAY ITEMS
========================= */

let orderItems =
document.getElementById("orderItems");

let total = 0;

for(let key in groupedItems){

  let item = groupedItems[key];

  let itemTotal =
  item.price * item.quantity;

  total += itemTotal;

  orderItems.innerHTML += `

  <div class="order-item">

    <div class="left">

      <img src="${item.image}"
      alt="${item.name}">

      <div class="item-details">

        <h3>${item.name}</h3>

        <p>
          Quantity :
          ${item.quantity}
        </p>

      </div>

    </div>

    <div class="right">

      <h2>₹${itemTotal}</h2>

    </div>

  </div>
  `;
}

/* =========================
   TOTAL PRICE
========================= */

document.getElementById("totalPrice").innerHTML = total;

/* =========================
   FINAL ORDER OBJECT
========================= */

let finalOrder = {

  fullName : order.fullName,
  mobileNumber : order.mobileNumber,
  state : order.state,
  city : order.city,
  address : order.address,
  pincode : order.pincode,
  totalAmount : total,
  items : Object.values(groupedItems)
};

/* =========================
   SAVE ORDER
========================= */

fetch("http://localhost:8097/orderedSaveOrder", {

  method : "POST",

  headers : {
    "Content-Type" : "application/json"
  },

  body : JSON.stringify(finalOrder)

})

.then(data => {

  console.log("Order Saved Successfully");

  localStorage.removeItem("spicyCart");
  localStorage.removeItem("totalAmount");
  localStorage.removeItem("orderDetails");

  cart = [];

})

.catch(error => {

  console.log(error);

  alert("Server Error ❌");

});

/* =========================
   HOME BUTTON
========================= */

function goHome(){

  localStorage.removeItem("spicyCart");
  localStorage.removeItem("totalAmount");
  localStorage.removeItem("orderDetails");

  window.location.href = "homepage.html";
}