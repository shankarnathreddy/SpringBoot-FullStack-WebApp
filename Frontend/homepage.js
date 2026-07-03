console.log("Welcome to Spicy5 🌶️");

/* =========================
   CHECK LOGIN STATUS
========================= */

function checkLogin() {
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn === "true";
}

/* =========================
   ORDER NOW / EXPLORE MENU
========================= */

function goToLogin() {

  // USER LOGGED IN
  if (checkLogin()) {

    // Access menu page
    window.location.href = "menu.html";
  }

  // USER NOT LOGGED IN
  else {
    alert("Login to access all options 🔐");

    // Save current page
    localStorage.setItem("redirectPage","homepage.html");

    // Go to login page
    window.location.href = "login.html";
  }
}

/* =========================
   ADD CART BUTTONS
========================= */

const cartButtons = document.querySelectorAll(".price-cart button");
cartButtons.forEach(button => {
  button.addEventListener("click", function () {

    // NOT LOGGED IN
    if (!checkLogin()) {
      alert("Login to access all options 🔐");
      localStorage.setItem("redirectPage","homepage.html");
      window.location.href = "login.html";
      return;
    }

    // LOGGED IN
    alert("Add items from Menu Page 🌶️");

    // Redirect to menu page
    window.location.href = "menu.html";
  });
});

/* =========================
   LOGIN / LOGOUT BUTTON
========================= */

const loginBtn = document.querySelector(".login-btn");
if(loginBtn){
  if (checkLogin()) {

  loginBtn.innerHTML = "Logout";
  loginBtn.href = "#";

  loginBtn.addEventListener(
    "click",
    function (event) {

      event.preventDefault();

      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("spicyCart");
      localStorage.removeItem("totalAmount");
      localStorage.removeItem("orderDetails");

      alert("Logged Out Successfully 👋");

      window.location.href = "homepage.html";
    }
  );
}
  else {
    // SHOW LOGIN
    loginBtn.innerHTML = "Login";
    loginBtn.href = "login.html";
  }
}