let ordersContainer = document.getElementById("ordersContainer");

/* FETCH ALL ORDERS */
fetch("http://localhost:8097/orderedFindAll")
.then(response => response.json())

.then(data => {

  console.log(data);

  /* NO ORDERS */

  if(data.length === 0){

    ordersContainer.innerHTML = `
      <h2 style="text-align:center; color:#666;">
        No Orders Found
      </h2>
    `;

    return;
  }

  /* DISPLAY ORDERS */

  data.forEach(order => {

    let itemsHTML = "";

    /* DISPLAY ITEMS */

    order.items.forEach(item => {

      itemsHTML += `
      <div class="item-card">

        <img src="${item.image}" alt="${item.name}">

        <h3>${item.name}</h3>

        <p>
          Quantity :
          ${item.quantity}
        </p>

        <p>
          Price :
          ₹${item.price}
        </p>

      </div>
      `;
    });

    /* DISPLAY ORDER */

    ordersContainer.innerHTML += `
    <div class="order-card">

      <div class="customer-details">

        <h2>
          ${order.fullName}
        </h2>

        <p>
          <strong>Mobile :</strong>
          ${order.mobileNumber}
        </p>

        <p>
          <strong>State :</strong>
          ${order.state}
        </p>

        <p>
          <strong>City :</strong>
          ${order.city}
        </p>

        <p>
          <strong>Address :</strong>
          ${order.address}
        </p>

        <p>
          <strong>Pincode :</strong>
          ${order.pincode}
        </p>

        <div class="total">

          Total Amount :
          ₹${order.totalAmount}

        </div>

      </div>

      <!-- BUTTONS -->

      <div class="buttons">

        <button class="view-items-btn"
        onclick="toggleItems(${order.id})">

          View Ordered Items

        </button>

        <button class="delete-btn"
        onclick="deleteOrder(${order.id})">

          Delete Order

        </button>

      </div>

      <!-- ITEMS -->

      <div class="items"
      id="items-${order.id}"
      style="display:none;">

        ${itemsHTML}

      </div>

    </div>
    `;
  });
})

.catch(error => {

  console.log(error);

  alert("Failed To Load Orders");

});

/* TOGGLE ITEMS */

function toggleItems(id){

  let itemsDiv =
  document.getElementById(`items-${id}`);

  if(itemsDiv.style.display === "none"){

    itemsDiv.style.display = "grid";
  }

  else{

    itemsDiv.style.display = "none";
  }
}

/* DELETE ORDER */

function deleteOrder(id){

  let confirmDelete =
  confirm("Delete this order?");

  if(confirmDelete){

    fetch(`http://localhost:8097/orderedDelete/${id}`, {

      method : "DELETE"

    })

    .then(response => {

      if(response.ok){

        alert("Order Deleted Successfully");

        location.reload();
      }

      else{

        alert("Failed To Delete Order");
      }
    })

    .catch(error => {

      console.log(error);
    });
  }
}