import { Place } from "./place.js";
import { Site } from "./site.js";

export const placeMongoStore = {
    async getAllPlaces() {
         const places = await Place.find().lean();
         return places;
    },

    async addPlace(siteId, place) {
        place.siteid = siteId;
        const newPlace = new Place(place);
        const placeObj = await newPlace.save();
        return this.getPlaceById(placeObj._id);
    }, 

    async getPlacesBySiteId(id) {
        const places = await Place.find({ siteid: id }).lean();
        return places;
    },

    async getPlaceById(id) {
        if(id) {
            const place = await Place.findOne({ _id: id }).lean();
            return place;
        }
        return null;
    },

    async deletePlace(id) {
        try {
        await Place.deleteOne({ _id: id });
        } catch (error) {
            console.log("bad id");
        }
    },

    async deleteAllPlaces() {
        await Place.deleteMany({});
    },

    async updatePlace(place, updatedPlace) {
        const placeDoc = await Place.findOne({ _id: place._id });
        placeDoc.title = updatedPlace.title;
        placeDoc.category = updatedPlace.category;
        placeDoc.location = updatedPlace.location;
        placeDoc.description = updatedPlace.description;
        placeDoc.weather = updatedPlace.weather;
        placeDoc.images = updatedPlace.images;
        await placeDoc.save();
    },
};