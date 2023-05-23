import { userApi } from "./api/users-api.js";
import { siteApi } from "./api/site-api.js";
import { placeApi } from "./api/place-api.js";
import { guideApi } from "./api/guide-api.js";

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

    { method: "POST", path: "/api/guides", config: guideApi.create },
    { method: "DELETE", path: "/api/guides", config: guideApi.deleteAll },
    { method: "GET", path: "/api/guides", config: guideApi.find },
    { method: "GET", path: "/api/guides/{id}", config: guideApi.findOne },
    { method: "DELETE", path: "/api/guides/{id}", config: guideApi.deleteOne },

];