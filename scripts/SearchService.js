// Filter/search logic
export default class SearchService {
    static filterByText(properties, query) {
        return properties.filter(
            p => p.location.toLowerCase().includes(query.toLowerCase()) ||
                p.title.toLowerCase().includes(query.toLowerCase())
        );
    }

    static filterByType(properties, type) {
        if (type === "" || !type) return properties;
        return properties.filter(p => p.type === type);
    }

    static filterByPrice(properties, range) {
        if (!range || range === "all") return properties

        if (range.includes("+")) {
            const min = parseInt(range.replace("+", ""));
            return properties.filter(p => p.price >= min);
        }

        const [min, max] = range.split("-").map(Number);

        return properties.filter(p => p.price >= min && p.price <= max);
    }
}