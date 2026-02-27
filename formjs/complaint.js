document.getElementById("name").value = localStorage.getItem("userName");
document.getElementById("email").value = localStorage.getItem("userEmail");

let category2 = document.getElementById("category2");
let category3 = document.getElementById("category3");

let data = {
Electronics:["Mobile","Laptop"],
Clothes:["Shirt","Shoes"]
};

document.getElementById("category1").addEventListener("change",function(){

if(this.value===""){
category2.disabled=true;
category3.disabled=true;
return;
}

category2.disabled=false;
category2.innerHTML='<option value="">Select Sub Category</option>';

data[this.value].forEach(item=>{
category2.innerHTML+=`<option>${item}</option>`;
});
});

category2.addEventListener("change",function(){
if(this.value===""){
category3.disabled=true;
return;
}

category3.disabled=false;
category3.innerHTML='<option value="">Select Issue</option>';
category3.innerHTML+='<option>Damaged</option>';
category3.innerHTML+='<option>Wrong Item</option>';
});

document.getElementById("complaintForm").addEventListener("submit",async function(e){
e.preventDefault();

let cat1=document.getElementById("category1").value;
let desc=document.getElementById("description").value.trim();
let valid=true;

if(cat1===""){
document.getElementById("cat1Error").textContent="Please select category";
valid=false;
}else{
document.getElementById("cat1Error").textContent="";
}

if(desc===""){
document.getElementById("descError").textContent="Description required";
valid=false;
}else{
document.getElementById("descError").textContent="";
}

if(!valid) return;

try{
let response=await fetch("https://jsonplaceholder.typicode.com/users/1");
let result=await response.json();

document.getElementById("apiResult").innerHTML=`
<h3>API Data Loaded</h3>
<p>Name: ${result.name}</p>
<p>Email: ${result.email}</p>
<p>City: ${result.address.city}</p>
`;

alert("Complaint Submitted Successfully");

}catch(error){
alert("API Error");
}
});