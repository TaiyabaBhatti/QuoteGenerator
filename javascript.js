const button = document.getElementById("generate-btn");
const quote=document.getElementById("quote");
const author=document.getElementById("author");

// url of the api end point
const api="https://api.quotable.io/random";
button.addEventListener("click",()=>{
    fetch(api)
    .then((response) => response.json())
    .then((data) => {

quote.textContent=`"${data.content}"`;
author.textContent=`-${data.author}`;

    })
    .catch((error) => {

        console.error("Error fetching the quote:", error);
    });




});



