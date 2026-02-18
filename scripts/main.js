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
document.addEventListener("DOMContentLoaded", async () =>{
    const properties = await PropertyService.fetchProperties();
    let filteredProperties = properties;
    UIController.renderProperties(filteredProperties);

    //Map
    const mapElement = document.getElementById("map");
    let map;

    if (mapElement) {
        map = MapService.initMap();
        properties.forEach(p => MapService.addMarker(map, p));
    }

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