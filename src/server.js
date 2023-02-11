import Hapi from "@hapi/hapi";
// eslint-disable-next-line import/no-extraneous-dependencies
import Vision from "@hapi/vision";
// eslint-disable-next-line import/no-extraneous-dependencies
import Handlebars from "handlebars";
// eslint-disable-next-line import/no-extraneous-dependencies
import path from "path";
// eslint-disable-next-line import/no-extraneous-dependencies
import dotenv from "dotenv";
import Joi from "joi";
import { fileURLToPath } from "url";
import Cookie from "@hapi/cookie";
import { webRoutes } from "./webroutes.js";
import { db } from "./models/db.js";
import { accountsController } from "./controllers/accounts-controller.js";

const result = dotenv.config();
if (result.error) {
  console.log(result.error.message);
  process.exit(1);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function init() {
  const server = Hapi.server({
    port: 3001,
    host: "localhost",
  });
  await server.register(Vision);
  server.views({
    engines: {
      hbs: Handlebars,
    },
    relativeTo: __dirname,
    path: "./views",
    layoutPath: "./views/layouts",
    partialsPath: "./views/partials",
    layout: true,
    isCached: false,
  });
  await server.register(Cookie);
  server.auth.strategy("session", "cookie", {
    cookie: {
      name: process.env.cookie_name,
      password: process.env.cookie_password,
      isSecure: false,
    },
    redirectTo: "/",
    validate: accountsController.validate,
  });
  db.init();
  server.validator(Joi);
  server.auth.default("session");
  server.route(webRoutes);
  await server.start();
  console.log("Server running on %s", server.info.uri);
}

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
