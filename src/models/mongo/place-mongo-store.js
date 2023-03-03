import { Place } from "./place.js";

export const placeMongoStore = {
    async getPlacesBySiteId(id) {
        const places = await Place.find({ siteid: id }).lean();
        return places;
    },
};