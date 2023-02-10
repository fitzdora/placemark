import { v4 } from "uuid";

let places = [];

export const placeMemStore = {
  async getAllPlaces() {
    return places;
  },

  async addPlace(siteId, place) {
    place._id = v4();
    place.siteid = siteId;
    places.push(place);
    return place;
  },

  async getPlacesBySiteId(id) {
    return places.filter((place) => place.siteid === id);
  },

  async getPlaceById(id) {
    return places.find((place) => place._id === id);
  },

  async getSitePlaces(siteId) {
    return tracks.filter((place) => place.siteid === siteId);
  },

  async deletePlace(id) {
    const index = places.findIndex((place) => place._id === id);
    places.splice(index, 1);
  },

  async deleteAllPlaces() {
    places = [];
  },

  async updatePlace(place, updatedPlace) {
    place.name = updatedPlace.name;
    place.category = updatedPlace.category;
    place.location = updatedPlace.location;
    place.description = updatedPlace.description;
    place.weather = updatedPlace.weather;
    place.images = updatedPlace.images;
  },
};
