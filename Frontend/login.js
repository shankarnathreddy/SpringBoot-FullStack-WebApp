function login() {

  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let button = document.getElementById("loginBtn");

  if (email === "" || password === "") {
    alert("Please fill all fields ⚠️");
    return;
  }

  // EMAIL VALIDATION
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Enter valid email ❌");
    return;
  }

  // PASSWORD VALIDATION
  if (password.length < 7) {
    alert("Password must be at least 7 characters ❌");
    return;
  }

  // BUTTON LOADING
  button.innerHTML = "Logging in...";
  button.disabled = true;

  // BACKEND API
  fetch("http://localhost:8097/UserLogin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
  .then(res => res.text())
  .then(data => {
    if (data === "Login Success") {

      // SAVE LOGIN SESSION
      localStorage.setItem("isLoggedIn", "true");
      alert("Login Successful 🌶️");

      // REDIRECT
      let redirectPage = localStorage.getItem("redirectPage");
      if (redirectPage) {
        localStorage.removeItem("redirectPage");
        window.location.href = redirectPage;
      }
      else {
        window.location.href = "homepage.html";
      }
    }
    else {
      alert("Invalid Credentials ❌");
      button.innerHTML = "Login";
      button.disabled = false;
    }
  })
  .catch(err => {
    console.log(err);
    alert("Backend not connected ❌");
    button.innerHTML = "Login";
    button.disabled = false;
  });
}

/* =========================
   SHOW / HIDE PASSWORD
========================= */

function togglePassword(event) {
  let password = document.getElementById("password");
  let icon = event.currentTarget;
  if (password.type === "password") {
    password.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  }
  else {
    password.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}