//To save items in local storage 

export default class StorageService {

    static saveFavorites(favorites) {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    static getFavorites() {
        return JSON.parse(localStorage.getItem("favorites")) || [];
    }

    static addFavorites(propertyId) {
        const favorites = this.getFavorites();
        if (!favorites.includes(propertyId)) {
            favorites.push(propertyId);
            this.saveFavorites(favorites);
        }
    }
}
