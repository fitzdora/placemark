import { db } from "../models/db.js";


export const dashboardController = {
    index: {
      handler: async function (request, h) {
        const sites = await db.siteStore.getAllSites();
        const viewData =  {
          title: "Placemark Dashboard",
          sites: sites,
        };
        return h.view("dashboard-view", viewData);
      },
    },
    addSite: {
      handler: async function (request, h) {
        const newSite = {
          title: request.payload.title,
        };
        await db.siteStore.addSite(newSite);
        return h.redirect("/dashboard");
      },
    },
  };
  