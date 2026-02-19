// To fetch the json data
import Property from "./Property.js";

export default class PropertyService {

    static async fetchProperties(){
        const response = await fetch("../data/properties.json");
        const data = await response.json();
        return data.map(item => new Property(item));
    };
}