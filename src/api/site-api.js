import { Boom } from "@hapi/boom";
import { handler } from "@hapi/hapi/lib/cors.js";
import { db } from "../models/db.js";

export const siteApi = {
    find: {
        auth: false,
        handler: async function (request, h) {

        },
    },

    findOne: {
        auth: false,
        async handler(request) {

        },
    },

    create: {
        auth: false,
        handler: async function (request, h) {

        },
    },

    deleteOne: {
        auth: false,
        handler: async function (request, h) {

        },
    },

    deleteAll: {
        auth: false,
        handler: async function (request, h) {
            try {
                await db.siteStore.deleteAllSites();
                return h.response().code(204);
            } catch (err) {
                return Boom.serverUnavailable("Database Error");
            }
        },
    },
};