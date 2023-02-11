import { db } from "../models/db.js";


export const dashboardController = {
    index: {
      handler: async function (request, h) {
        // making sure each user is who they say they are
        const loggedInUser = request.auth.credentials;
        const sites = await db.siteStore.getUserSites(loggedInUser._id);
        const viewData =  {
          title: "Placemark Dashboard",
          user: loggedInUser,
          sites: sites,
        };
        return h.view("dashboard-view", viewData);
      },
    },
    addSite: {
      handler: async function (request, h) {
        // each user can only enter playlists for their account
        const loggedInUser = request.auth.credentials;
        const newSite = {
          userid: loggedInUser._id,
          title: request.payload.title,
        };
        await db.siteStore.addSite(newSite);
        return h.redirect("/dashboard");
      },
    },
    deleteSite: {
      handler: async function (request, h) {
        const site = await db.siteStore.getSiteById(request.params.id);
        await db.siteStore.deleteSiteById(site._id);
        return h.redirect("/dashboard");
      },
    },
  };
  