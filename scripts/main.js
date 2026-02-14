//Hamburger button
const hambtn = document.querySelector("#hamburger-btn");
// hambtn.addEventListener("click", () =>{
//     hambtn.classList.toggle("show");

// });
const nav = document.querySelector(".nav-btn");

hambtn.addEventListener("click", () =>{
    nav.classList.toggle("show");
})