import Boom from "@hapi/boom";
import { db } from "../models/db.js";
import { IdSpec, SiteArraySpec, SiteSpec, SiteSpecPlus } from "../models/joi-schemas.js";
import { validationError } from "./logger.js";


export const siteApi = {
    find: {
        auth: {
            strategy: "jwt",
        },
        handler: async function (request, h) {
            try {
                const sites = await db.siteStore.getAllSites();
                return sites;
            } catch (err) {
                return Boom.serverUnavailable("Database error");
            }
        },
        tags: ["api"],
        // response: { schema: SiteArraySpec, failAction: validationError },
        description: "Get all sites",
        notes: "Returns all site",
    },
    

    findOne: {
        auth: {
            strategy: "jwt",
        },
        async handler (request) {
            try { 
                const site = await db.siteStore.getSiteById(request.params.id);
                if (!site) {
                    return Boom.notFound("No Site with this id");
                }
                return site;
            } catch (err) {
                return Boom.serverUnavailable("No Site with this id");
            }
        },
        tags: ["api"],
        description: "Get a Site",
        notes: "Returns a Site",
        // validate: { params: { id: IdSpec }, failAction: validationError},
        response: { schema: SiteSpecPlus, failAction: validationError },
    },

    create: {
        auth: {
            strategy: "jwt",
        },
        handler: async function (request, h) {
            try {
                const site = request.payload;
                const newSite = await db.siteStore.addSite(site);
                if (newSite) {
                    return h.response(newSite).code(201);
                }
                return Boom.badImplementation("error creating site");
            } catch (err) {
                return Boom.serverUnavailable("Database error");
            }
        },
        tags: ["api"],
        description: "Create a Site",
        notes: "Returns the newly created Site",
        // validate: { payload: SiteSpec, failAction: validationError},
        // response: { schema: SiteSpecPlus, failAction: validationError },
    },

    deleteOne: {
        auth: {
            strategy: "jwt",
        },
        handler: async function (request, h) {
            try {
                const site = await db.siteStore.getSiteById(request.params.id);
                if (!site) {
                    return Boom.notFound("No Site with this id");
                }
                await db.siteStore.deleteSiteById(site._id);
                return h.response().code(204);
            } catch (err) {
                return Boom.serverUnavailable("No Site with this id");
            }
        },
        tags: ["api"],
        description: "Delete a Site",
        notes: "Deletes one Site",
       // validate: { params: { id: IdSpec }, failAction: validationError},
    },

    deleteAll: {
        auth: {
            strategy: "jwt",
        },
        handler: async function (request, h) {
            try {
                await db.siteStore.deleteAllSites();
                return h.response().code(204);
            } catch (err) {
                return Boom.serverUnavailable("Database Error");
            }
        },
        tags: ["api"],
        description: "Delete all Sites",
    },
};