import { userApi } from "./api/users-api.js";
import { siteApi } from "./api/site-api.js";
import { placeApi } from "./api/place-api.js";

export const apiRoutes = [
    { method: "POST", path: "/api/users", config: userApi.create },
    { method: "GET", path: "/api/users", config: userApi.find },
    { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
    { method: "GET", path: "/api/users/{id}", config: userApi.findOne },
    { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },
    
    { method: "POST", path: "/api/sites", config: siteApi.create },
    { method: "DELETE", path: "/api/sites", config: siteApi.deleteAll },
    { method: "GET", path: "/api/sites", config: siteApi.find },
    { method: "GET", path: "/api/sites/{id}", config: siteApi.findOne },
    { method: "DELETE", path: "/api/sites/{id}", config: siteApi.deleteOne },

    { method: "POST", path: "/api/sites/{id}/places", config: placeApi.create },
    { method: "DELETE", path: "/api/places", config: placeApi.deleteAll },
    { method: "GET", path: "/api/places", config: placeApi.find },
    { method: "GET", path: "/api/places/{id}", config: placeApi.findOne },
    { method: "DELETE", path: "/api/places/{id}", config: placeApi.deleteOne },

];