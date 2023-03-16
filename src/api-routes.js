import { userApi } from "./api/users-api.js";

export const apiRoutes = [
    { method: "POST", path: "/api/users", config: userApi.create },
    { method: "GET", path: "/api/users", config: userApi.find },
];