import { validate } from "uuid";
import { db } from "../models/db.js";
import { UserSpec } from "../models/joi-schemas.js";

export const accountsController = {

    index: {
        auth: false,
        handler: function(request, h) {
            return h.view("main", { title: "Welcome to Placemark" });
        },
    },
    showSignup: {
        auth: false,
        handler: function (request, h) {
            return h.view("signup-view", { title: "Sign up to input a site" });
        },
    },
    signup: {
        auth: false,
        validate: {
            payload: UserSpec,
            options: { abortEarly: false},
            failAction: function (request, h, error) {
                return h.view("signup-view", { title: "Sign up error", errors: error.details }).takeover().code(400);
            },
        },
        handler: async function (request, h) {
            const user = request.payload;
            await db.userStore.addUser(user);
            return h.redirect("/");
        },
    },
    showLogin: {
        auth: false,
        handler: function (request, h) {
            return h.view("login-view", { title: "Login to Placemark" });
        },
    },
    login: {
        auth: false,
        handler: async function (request, h) {
            const { email, password } = request.payload;
            const user = await db.userStore.getUserByEmail(email);
            if (!user || user.password !== password){
                return h.redirect("/");
            }
            request.cookieAuth.set({ id: user._id });
            return h.redirect("/dashboard");
        },
    },
    logout: {
        auth: false,
        handler: function (request, h) {
            request.cookieAuth.clear();
            return h.redirect("/");
        },
    },
    
    async validate( request, session) {
        const user = await db.userStore.getUserById(session.id);
        if (!user){
            return { isValid: false };
        }
        return { isValid: true, credentials: user };
    },
};