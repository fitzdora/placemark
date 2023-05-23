import Boom from "@hapi/boom";
import { db } from "../models/db.js";
import { IdSpec, GuideArraySpec, GuideSpec, GuideSpecPlus } from "../models/joi-schemas.js";
import { validationError } from "./logger.js";


export const guideApi = {
    find: {
        auth: {
            strategy: "jwt",
        },
        handler: async function (request, h) {
            try {
                const guides = await db.guideStore.getAllGuides();
                return guides;
            } catch (err) {
                return Boom.serverUnavailable("Database error");
            }
        },
        tags: ["api"],
        description: "Get all guides",
        notes: "Returns all guide",
    },
    

    findOne: {
        auth: {
            strategy: "jwt",
        },
        async handler (request) {
            try { 
                const guide = await db.guideStore.getGuideById(request.params.id);
                if (!guide) {
                    return Boom.notFound("No guide with this id");
                }
                return guide;
            } catch (err) {
                return Boom.serverUnavailable("No guide with this id");
            }
        },
        tags: ["api"],
        description: "Get a guide",
        notes: "Returns a guide",
        response: { schema: GuideSpecPlus, failAction: validationError },
    },

    create: {
        auth: {
            strategy: "jwt",
        },
        handler: async function (request, h) {
            try {
                const guide = request.payload;
                const newguide = await db.guideStore.addGuide(guide);
                if (newguide) {
                    return h.response(newguide).code(201);
                }
                return Boom.badImplementation("error creating guide");
            } catch (err) {
                return Boom.serverUnavailable("Database error");
            }
        },
        tags: ["api"],
        description: "Create a guide",
        notes: "Returns the newly created guide",
    }, 

    deleteOne: {
        auth: {
            strategy: "jwt",
        },
        handler: async function (request, h) {
            try {
                const guide = await db.guideStore.getGuideById(request.params.id);
                if (!guide) {
                    return Boom.notFound("No guide with this id");
                }
                await db.guideStore.deleteGuideById(guide._id);
                return h.response().code(204);
            } catch (err) {
                return Boom.serverUnavailable("No guide with this id");
            }
        },
        tags: ["api"],
        description: "Delete a guide",
        notes: "Deletes one guide",
       
    },

    deleteAll: {
        auth: {
            strategy: "jwt",
        },
        handler: async function (request, h) {
            try {
                await db.guideStore.deleteAllGuides();
                return h.response().code(204);
            } catch (err) {
                return Boom.serverUnavailable("Database Error");
            }
        },
        tags: ["api"],
        description: "Delete all guides",
    }
};