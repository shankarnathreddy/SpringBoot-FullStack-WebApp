async function resetPassword(){
    let userData = {
        email : document.getElementById("email").value,
        password : document.getElementById("password").value
    };
    let response = await fetch("http://localhost:8097/UserForgot",{
        method : "PUT",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(userData)
    });
    let result = await response.text();
    alert(result);
}

/* SHOW / HIDE PASSWORD */
function togglePassword(){
    let password = document.getElementById("password");
    let icon = document.getElementById("toggleIcon");
    if(password.type === "password"){
        password.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
    else{
        password.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}