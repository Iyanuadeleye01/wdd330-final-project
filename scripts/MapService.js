
export default class MapService {

    static initMap(lat=9.0820, lng=8.6753, zoom=6) {
        console.log("Initializing map...");
        const map = L.map("map").setView([lat, lng], zoom);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        return map;
    }
    static addMarker(map, property) {
        if (!property?.lat || !property?.lng) return;

        L.marker([property.lat, property.lng])
            .addTo(map)
            .bindPopup(`
                <b>${property.title}</b>
                <br>${property.formatPrice()}
                <br>${property.location}`)
            .openPopup();

    }
}