import Boom from "@hapi/boom";
import { handler } from "@hapi/vision/lib/schemas.js";
import { db } from "../models/db.js";

export const placeApi = {
    find: {
        auth: false,
        handler: async function (request, h) {
            try {
                const places = await db.placeStore.getAllPlaces();
                return places;
            } catch (err) {
                return Boom.serverUnavailable("Database Error");
            }
        },
    },

    findOne: {
        auth: false,
        async handler (request) {
            try {
                const place = await db.placeStore.getPlaceById(request.params.id);
                if (!place) {
                    return Boom.notFound("No Place with this id");
                }
                return place;
            } catch (err) {
                return Boom.serverUnavailable("No Place with this id");
            }
        },
    },

    create: {
        auth: false,
        handler: async function (request, h) {
            try {
                const place = await db.placeStore.addPlace(request.params.id, request.payload);
                if (place) {
                    return h.response(place).code(201);
                }
                return Boom.badImplementation("error creating place");
            } catch (err) {
                return Boom.serverUnavailable("Database Error");
            }
        },
    },

    deleteAll: {
        auth: false,
        handler: async function (request, h) {
            try {
                await db.placeStore.deleteAllPlaces();
                return h.response().code(204);
            } catch (err) {
                return Boom.serverUnavailable("Database Error");
            }
        },
    },
    
    deleteOne: {
        auth: false,
        handler: async function (request, h) {
            try {
                const place = await db.placeStore.getPlaceById(request.params.id);
                if (!place) {
                    return Boom.notFound("No Place with this id");
                }
                await db.placeStore.deletePlace(place._id);
                return h.response().code(204);
            } catch (err) {
                return Boom.serverUnavailable("No Place with this id");
            }
        },
    },
};