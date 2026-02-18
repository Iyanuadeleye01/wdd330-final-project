// Create property class
export default class Property {
    constructor({
        id,
        title,
        price,
        location,
        type,
        bedrooms,
        bathrooms,
        size,
        image,
        lat,
        lng,
        description
    }) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.location = location;
        this.type = type;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.size = size;
        this.image = image;
        this.lat = lat;
        this.lng = lng;
        this.description = description;
    };
    formatPrice() {
        return `#${this.price.toLocaleString()}`;
    };

    shortDescription() {
        return this.description.substring(0, 80) + "....";
    };
}