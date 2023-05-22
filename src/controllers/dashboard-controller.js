import { db } from "../models/db.js";
import { SiteSpec } from "../models/joi-schemas.js";


export const dashboardController = {
    index: {
      handler: async function (request, h) {
        // making sure each user is who they say they are
        const loggedInUser = request.auth.credentials;
        const sites = await db.siteStore.getUserSite(loggedInUser._id);
        const viewData =  {
          title: "Placemark Dashboard",
          user: loggedInUser,
          sites: sites,
        };
        return h.view("dashboard-view", viewData);
      },
    },
    addSite: {
      // joi schema testing link
      validate: {
        payload: SiteSpec,
        options: { abortEarly: false },
        failAction: function( request, h, error) {
          return h.view("dashboard-view", { title: "Add Site error", errors: error.details }).takeover().code(400);
        },
      },
      handler: async function (request, h) {
        // each user can only enter a site for their account
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