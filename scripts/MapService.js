
export default class MapService {

    static initMap() {
        console.log("Initializing map...");
        const map = L.map("map").setView([6.5244, 3.3792], 10);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        return map;
    }
    static addMarker(map, property) {
        L.marker([property.lat, property.lng])
            .addTo(map)
            .bindPopup(`<b>${property.title}</b><br>${property.formatPrice()}`);

    }
}