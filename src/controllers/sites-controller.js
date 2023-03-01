import { db } from "../models/db.js";
import { PlaceSpec } from "../models/joi-schemas.js";

export const siteController = {
  index: {
    handler: async function (request, h) {
      const site = await db.siteStore.getSiteById(request.params.id);
      const viewData = {
        title: "Site",
        site: site,
      };
      return h.view("site-view", viewData);
    },
  },

  addPlace: {
    validate: {
      payload: PlaceSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("site-view", { title: "Add Place error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const site = await db.siteStore.getSiteById(request.params.id);
      const newPlace = {
        name: request.payload.name,
        category: request.payload.category,
        location: request.payload.location,
        description: request.payload.description,
        weather: request.payload.weather,
        images: request.payload.images,
      };
      await db.placeStore.addPlace(site._id, newPlace);
      return h.redirect(`/site/${site._id}`);
    },
  },
  deletePlace: {
    handler: async function(request, h) {
      const site = await db.siteStore.getSiteById(request.params.id);
      await db.placeStore.deletePlace(request.params.placeid);
      return h.redirect(`/site/${site._id}`);
    },
  },
};
