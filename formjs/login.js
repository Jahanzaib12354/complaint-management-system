document.getElementById("loginForm").addEventListener("submit", function(e){
e.preventDefault();

let email = document.getElementById("loginEmail").value.trim();
let password = document.getElementById("loginPassword").value.trim();

let valid = true;

if(email === ""){
document.getElementById("loginEmailError").textContent="Email required";
valid=false;
}else{
document.getElementById("loginEmailError").textContent="";
}

if(password === ""){
document.getElementById("loginPassError").textContent="Password required";
valid=false;
}else{
document.getElementById("loginPassError").textContent="";
}

if(valid){
if(email===localStorage.getItem("userEmail") &&
password===localStorage.getItem("userPassword")){
alert("Login Successful");
window.location.href="complaint.html";
}else{
alert("Invalid Credentials");
}
}
});