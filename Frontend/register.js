function register() {

  let fullname = document.getElementById("fullname").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirmPassword").value.trim();

  // EMPTY CHECK
  if (!fullname || !email || !phone || !password || !confirmPassword) {
    alert("Please fill all fields ⚠️");
    return;
  }

  // NAME VALIDATION
  let namePattern = /^[A-Za-z\s]+$/;

  if (!namePattern.test(fullname)) {
    alert("Name must contain only letters ❌");
    return;
  }

  if (fullname.length < 4) {
    alert("Name must be minimum 4 letters ❌");
    return;
  }

  // EMAIL VALIDATION
  if (!email.endsWith("@gmail.com")) {
    alert("Email must end with @gmail.com ❌");
    return;
  }

  // PHONE VALIDATION
  let phonePattern = /^[0-9]{10}$/;

  if (!phonePattern.test(phone)) {
    alert("Phone must be exactly 10 digits ❌");
    return;
  }

  // PASSWORD VALIDATION
  if (password.length < 7) {
    alert("Password must be minimum 7 characters ❌");
    return;
  }

  // CONFIRM PASSWORD
  if (password !== confirmPassword) {
    alert("Passwords do not match ❌");
    return;
  }

  // USER OBJECT
  let user = {fullname,email,phone,password};

  // SAVE USER
  fetch("http://localhost:8097/userRegister", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
  .then(res => res.text())
  .then(data => {
    if(data === "Registration Success"){
      alert("Registration Successful 🎉");
      window.location.href = "login.html";
    }
    else{
      alert("Registration Successful 🎉");
    }
  })
  .catch(err => {
    alert("Backend not connected ❌");
    console.log(err);
  });
}

/* =========================
   SHOW / HIDE PASSWORD
========================= */
function togglePassword(id, icon) {
  let field = document.getElementById(id);
  if (field.type === "password") {
    field.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  }
  else {
    field.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}