document.getElementById("registerForm").addEventListener("submit", function(e){
e.preventDefault();

let username = document.getElementById("username").value.trim();
let email = document.getElementById("email").value.trim();
let password = document.getElementById("password").value.trim();

let valid = true;

if(username === ""){
document.getElementById("userError").textContent="Username required";
valid=false;
}else{
document.getElementById("userError").textContent="";
}

if(email === ""){
document.getElementById("emailError").textContent="Email required";
valid=false;
}else{
document.getElementById("emailError").textContent="";
}

if(password === ""){
document.getElementById("passError").textContent="Password required";
valid=false;
}else{
document.getElementById("passError").textContent="";
}

if(valid){
localStorage.setItem("userName",username);
localStorage.setItem("userEmail",email);
localStorage.setItem("userPassword",password);
alert("Registration Successful");
window.location.href="login.html";
}
});