// DOM manipulation
import StorageService from "./StorageService.js";

export default class UIController {
    static renderProperties(properties){
        const container = document.querySelector("#property-container");
        container.innerHTML = "";

        const card = document.createElement("div");
        
        properties.forEach(property => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML =`
            <img src="${property.image}"/>
            <h3>${property.title}</h3>
            <p>${property.formatPrice()}</p>
            <p>${property.location}</p>
            <button data-id="${property.id}" class="fav-btn">Save</button>`;
        container.appendChild(card);
        });
        this.attachFavoriteEvents();

    }

    static renderPropertyDetails(property){
        if(!property) return;
        const image = document.getElementById("property-image");
        const title = document.getElementById("propertyTitle");
        const price = document.getElementById("propertyPrice");
        const location = document.getElementById("propertyLocation");
        const description = document.getElementById("propertyDescription");

        image.src = property.image;
        title.textContent = property.title;
        price.textContent = property.formatPrice();
        location.textContent = property.location;
        description.textContent = property.description;
    }

    static attachFavoriteEvents(){
        const button = document.querySelectorAll(".fav-btn");
        button.forEach(btn =>{
            btn.addEventListener("click", (e) =>{
                const id = e.target.dataset.id;
                StorageService.addFavorites(id);
                alert("Saved to favorites!")
            });
        });

    }
}