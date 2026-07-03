let form = document.getElementById("checkoutForm");

form.addEventListener("submit", function (e) {

  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let mobile = document.getElementById("mobile").value.trim();
  let state = document.getElementById("state").value;
  let city = document.getElementById("city").value;
  let address = document.getElementById("address").value.trim();
  let pincode = document.getElementById("pincode").value.trim();

  let isValid = true;

  /* RESET ERRORS */
  document.getElementById("nameError").innerText = "";
  document.getElementById("mobileError").innerText = "";
  document.getElementById("stateError").innerText = "";
  document.getElementById("cityError").innerText = "";
  document.getElementById("addressError").innerText = "";
  document.getElementById("pincodeError").innerText = "";

  /* NAME VALIDATION */
  let nameRegex = /^[A-Za-z ]{4,}$/;

  if (!nameRegex.test(name)) {

    document.getElementById("nameError").innerText =
      "Name must be alphabets and more than 4 letters";

    isValid = false;
  }

  /* MOBILE VALIDATION */

  let mobileRegex = /^[0-9]{10}$/;

  if (!mobileRegex.test(mobile)) {

    document.getElementById("mobileError").innerText =
      "Enter valid 10 digit mobile number";

    isValid = false;
  }

  /* STATE VALIDATION */

  if (state === "") {

    document.getElementById("stateError").innerText =
      "Please select a state";

    isValid = false;
  }

  /* CITY VALIDATION */

  if (city === "") {

    document.getElementById("cityError").innerText =
      "Please select a city";

    isValid = false;
  }

  /* ADDRESS VALIDATION */

  if (address.length < 5) {

    document.getElementById("addressError").innerText =
      "Enter valid address";

    isValid = false;
  }

  /* PINCODE VALIDATION */

  let pinRegex = /^[0-9]{6}$/;

  if (!pinRegex.test(pincode)) {

    document.getElementById("pincodeError").innerText =
      "Enter valid 6 digit pincode";

    isValid = false;
  }

  /* SUCCESS */

  if (isValid) {

    let totalAmount =
      localStorage.getItem("totalAmount") || 0;

    let orderDetails = {

      fullName: name,
      mobileNumber: mobile,
      state: state,
      city: city,
      address: address,
      pincode: pincode,
      totalAmount: totalAmount
    };

    /* SAVE IN LOCAL STORAGE */

    localStorage.setItem(
      "orderDetails",
      JSON.stringify(orderDetails)
    );

    /* GO TO ORDER PAGE */

    window.location.href = "order.html";
  }
});