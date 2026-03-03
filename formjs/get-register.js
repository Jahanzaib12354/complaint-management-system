// const loadData = async (type) => {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await response.json();

//     let table = document.getElementById("userTable");

    
//     table.innerHTML = "<tr><th>" + type.toUpperCase() + "</th></tr>";

//     data.forEach(user => {

//       let row = document.createElement("tr");
//       let cell = document.createElement("td");

//       if(type === "name"){
//         cell.textContent = user.name;
//       }
//       else if(type === "email"){
//         cell.textContent = user.email;
//       }
//       else if(type === "city"){
//         cell.textContent = user.address.city;
//       }

//       row.appendChild(cell);
//       table.appendChild(row);

//     });

//   } catch (error) {
//     console.log("Error:", error);
//   }
// };

// document.getElementById("loadName").addEventListener("click", () => loadData("name"));
// document.getElementById("loadEmail").addEventListener("click", () => loadData("email"));
// document.getElementById("loadCity").addEventListener("click", () => loadData("city"));



























// document.getElementById("loadBtn").addEventListener("click", function(){

//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(data => {

//         let table = document.getElementById("userTable");

//         data.forEach(function(user){

//             let row = document.createElement("tr");  // new row
//             let cell = document.createElement("td"); // new cell

//             cell.textContent = user.name;  // name insert
//             row.appendChild(cell);         // cell row me add
//             table.appendChild(row);        // row table me add

//         });

//     })
//     .catch(error => console.log("Error:", error));

// });







// const userData = async () => {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await response.json();
    
//     const mapped = data.map((x) => x.name);
//     console.log('mapped',mapped)
//    let table = document.getElementById("userTable");

//         data.forEach(function(user){

//             let row = document.createElement("tr");  // new row
//             let cell = document.createElement("td"); // new cell

//             cell.textContent = user.name;  // name insert
//             row.appendChild(cell);         // cell row me add
//             table.appendChild(row);        // row table me add

//         });
  
//   } catch (error) {
//     document.getElementById("result").innerHTML = "Error loading data";
   
//   }
// };

// // const userName = userData()
// // console.log('username',userName)

//  document.getElementById("loadBtn").addEventListener("click", userData);







        
//   const  userData = async () => {
    
//     try{
//     let response= await  fetch("https://jsonplaceholder.typicode.com/users")
//      let data = await response.json();
//      console.log('data', data)
//      let a = data.find(u => u.id === 1);
//       let b= data.find(u => u.id === 2);
//        let c = data.find(u => u.id === 3);
//         let d = data.find(u => u.id === 4);
    
//     document.getElementById("result").innerHTML = `
   
//     <p><b>Name:</b> ${a.name}</p>
//     <p><b>Name:</b> ${b.name}</p>
//    <p><b>Name:</b> ${c.name}</p>
//    <p><b>Name:</b> ${d.name}</p>
//     `;

// }catch(error){
// document.getElementById("result").innerHTML = "Error loading data";
// }};
// document.getElementById("loadBtn").addEventListener("click",  userData);
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(function(response){
//         return response.json();   
//     })
//     .then(function(data){
        
//     let user = data.find(function(u){
//             return u.id === 1;
//         });

//         document.getElementById("result").innerHTML = `
//             <p><b>ID:</b> ${user.id}</p>
//             <p><b>Name:</b> ${user.name}</p>
//             <p><b>Username:</b> ${user.username}</p>
//             <p><b>Email:</b> ${user.email}</p>
//             <p><b>Phone:</b> ${user.phone}</p>
//         `;
//     })

//     .catch(function(error){
//         document.getElementById("result").innerHTML = "Error loading data";
//         console.log(error);
//     });





// let response = await fetch("https://jsonplaceholder.typicode.com/users");
//  let data = await response.json();
 
//  let user = data.find(u => u.id === 1);

//  // Show data
//  document.getElementById("result").innerHTML = `
//  <p><b>ID:</b> ${user.id}</p>
//  <p><b>Name:</b> ${user.name}</p>
//  <p><b>Username:</b> ${user.username}</p>
//  <p><b>Email:</b> ${user.email}</p>
//  <p><b>Phone:</b> ${user.phone}</p>
//  `;

// try{

// // Fetch API
// let response = await fetch("https://jsonplaceholder.typicode.com/users");
// let data = await response.json();

// // id = 1 wala user find karo
// let user = data.find(u => u.id === 1);

// // Show data
// document.getElementById("result").innerHTML = `
// <p><b>ID:</b> ${user.id}</p>
// <p><b>Name:</b> ${user.name}</p>
// <p><b>Username:</b> ${user.username}</p>
// <p><b>Email:</b> ${user.email}</p>
// <p><b>Phone:</b> ${user.phone}</p>
// `;

// }catch(error){
// document.getElementById("result").innerHTML = "Error loading data";
// }