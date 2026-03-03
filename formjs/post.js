const loadData = async () => { 
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/posts'); 
        let data = await response.json();
        console.log(data);
} catch (error) {
    console.log("Error:", error);
  }
}
document.getElementById("loadBtn").addEventListener("click", loadData);


// sendButton





// const submitBtn = document.querySelector("button[type='submit']");
contactForm.addEventListener('submit', async (event) => {
     
    // Prevent default form submission (page reload)
    event.preventDefault();
// const contactForm = document.getElementById("contactForm");
// const formData = new FormData(contactForm);
     let bodyValue = document.getElementById("name").value;
    let idValue = document.getElementById("id").value;
    const formData = {bodyValue , idValue}
    try {

        let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                body: formData
            })
        });

        if (!response.ok) {
            throw new Error("Network response not OK");
        }

        let data = await response.json();

        console.log("Success:", data);
       

    } catch (error) {
        console.log("Error:", error);
    }
 
    // We'll add data processing and API calls here next!
});

submitBtn.addEventListener("click", async function (event) {

    event.preventDefault(); 

    
    let bodyValue = document.getElementById("name").value;
    let idValue = document.getElementById("id").value;

    try {

        let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                body: bodyValue,
                userId: idValue
            })
        });

        if (!response.ok) {
            throw new Error("Network response not OK");
        }

        let data = await response.json();

        console.log("Success:", data);
       

    } catch (error) {
        console.log("Error:", error);
    }

});
