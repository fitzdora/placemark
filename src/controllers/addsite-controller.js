import { db } from "../models/db.js";
import { guideMongoStore } from "../models/mongo/guide-mongo-store.js";
 // this is what I was initially trying to build for the frontend
export const addSiteController = {
    index: {
        handler: async function (request, h) {
            const guides = await guideMongoStore.getAllGuides();
            return h.view("add-site", {title: "add a site", guides: guides });
        }
    },

    report: {
        handler: async function (request, h) {
            const addSites = await db.addSiteStore.getAlladdSites();
            return h.view("site-review", {
                title: "Site Employee Overview",
                addSites: addSites,
            });
        },
    },
    addSite: {
        handler: async function(request, h) {
            try {
                const loggedinUser = request.auth.credentials;
                const rawGuide = request.payload.guide.split(",");
                const guide = await db.guideMongoStore.findByName(rawGuide[0]);
                await db.addSiteStore.addSite(request.payload.amount, request.payload.method, loggedinUser.id, guide._id);
                return h.redirect("/dashboard/site-review")
            } catch (err){
                return h.view("main", { errors: [{ message: err.message }] });
            }
        },
    }

};