// DOM manipulation
import StorageService from "./StorageService.js";

export default class UIController {
    static renderProperties(properties) {
        const container = document.querySelector("#property-container");
        if (!container) return;

        container.innerHTML = "";

        properties.forEach(property => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
            <a href="property_details.html?id=${property.id}">
                <img src="${property.image}" alt="${property.title}" />
                <h3>${property.title}</h3>
            </a>
            <p>${property.formatPrice()}</p>
            <p>${property.location}</p>
            <button data-id="${property.id}" class="fav-btn">Save</button>
        `;

            container.appendChild(card);
        });

        this.attachFavoriteEvents();
    }

    static renderPropertyDetails(property) {
        if (!property) return;

        const image = document.getElementById("property-image");
        const title = document.getElementById("propertyTitle");

        if (!image || !title) return; // prevent crash if wrong page

        const price = document.getElementById("propertyPrice");
        const location = document.getElementById("propertyLocation");
        const description = document.getElementById("propertyDescription");

        image.src = property.image;
        image.alt = property.title;
        title.textContent = property.title;
        price.textContent = property.formatPrice();
        location.textContent = property.location;
        description.textContent = property.description;
    }

    static attachFavoriteEvents() {
        const button = document.querySelectorAll(".fav-btn");
        button.forEach(btn => {
            btn.addEventListener("click", (e) => {
                const id = e.target.dataset.id;
                StorageService.addFavorites(id);
                alert("Saved to favorites!")
            });
        });

    }
}