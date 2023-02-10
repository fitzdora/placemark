import { db } from "../models/db.js";

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
    handler: async function (request, h) {
      const site = await db.siteStore.getSiteById(request.params.id);
      const newPlace = {
        name: request.payload.name,
        category: request.payload.category,
        location: request.payload.location,
        decription: request.payload.description,
        weather: request.payload.weather,
        images: request.payload.images,
      };
      await db.placeStore.addPlace(site._id, newPlace);
      return h.redirect(`/site/${site._id}`);
    },
  },
};
