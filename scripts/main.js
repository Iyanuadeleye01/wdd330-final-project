//import the modules
import PropertyService from "./PropertyService.js";
import SearchService from "./SearchService.js";
import MapService from "./MapService.js";
import UIController from "./UIController.js";

//Hamburger button
const hambtn = document.querySelector("#hamburger-btn");
const nav = document.querySelector(".nav-btn");

hambtn.addEventListener("click", () => {
    nav.classList.toggle("show");
})

//To render properties
document.addEventListener("DOMContentLoaded", async () => {
    //DOM for the properties listing page
    const propertyContainer = document.getElementById("property-container");
    //DOM for the property details page
    const propertyTitle = document.getElementById("propertyTitle");

    // Fetch the properties data
    const properties = await PropertyService.fetchProperties();

    let property;
    // Properties listing page
    if (propertyContainer) {
        UIController.renderProperties(properties);
    }


    // Property details page
    if (propertyTitle) {
        const selectedId = new URLSearchParams(window.location.search).get("id");

        property = properties.find(p => p.id == selectedId);
        UIController.renderPropertyDetails(property);

        if (property && property.lat && property.lng) {
            const map = MapService.initMap(property.lat, property.lng, 13);
            MapService.addMarker(map, property);
        }

    }


    //Map
    // const mapElement = document.getElementById("map");
    // let map;

    // if (mapElement) {
    //     map = MapService.initMap();
    //     MapService.addMarker(map, property);
    // }

    //Search event
    const search = document.getElementById("search");
    search.addEventListener("input", (e) => {
        const filteredProperties = SearchService.filterByText(properties, e.target.value);
        UIController.renderProperties(filteredProperties);
    });

    //Filter by property types
    const filteredType = document.getElementById("typeFilter");

    filteredType.addEventListener("change", (e) => {
        let filtered = SearchService.filterByType(properties, e.target.value);
        UIController.renderProperties(filtered);
    });

    //Filter by Price
    const filteredPrice = document.getElementById("priceFilter");

    filteredPrice.addEventListener("change", (e) => {
        let filteredByPriceP = SearchService.filterByPrice(properties, e.target.value);
        UIController.renderProperties(filteredByPriceP);
    });

})