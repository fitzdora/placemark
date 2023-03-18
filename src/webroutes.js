import { accountsController } from "./controllers/accounts-controller.js";
import { dashboardController } from "./controllers/dashboard-controller.js";
import { aboutController } from "./controllers/about-controller.js";
import { siteController } from "./controllers/sites-controller.js";
import { placeController } from "./controllers/place-controller.js";

export const webRoutes = [

{ method: "GET", path: "/", config: accountsController.index },
{ method: "GET", path: "/signup", config: accountsController.showSignup },
{ method: "GET", path: "/login", config: accountsController.showLogin },
{ method: "GET", path: "/logout", config: accountsController.logout },
{ method: "POST", path: "/register", config: accountsController.signup },
{ method: "POST", path: "/authenticate", config: accountsController.login },    
    
{ method: "GET", path: "/dashboard", config: dashboardController.index },
{ method: "POST", path: "/dashboard/addsite", config: dashboardController.addSite },
{ method: "GET", path: "/dashboard/deletesite/{id}", config: dashboardController.deleteSite },

{ method: "GET", path: "/about", config: aboutController.index },

{ method: "GET", path: "/site/{id}", config: siteController.index },
{ method: "POST", path: "/site/{id}/addplace", config: siteController.addPlace },
{ method: "GET", path: "/site/{id}/deleteplace/{placeid}", config: siteController.deletePlace },

{ method: "GET", path: "/place/{id}/editplace/{placeid}", config: placeController.index },
{ method: "POST", path: "/place/{id}/updateplace/{placeid}", config: placeController.update },

{ method: "GET", path: "/{param*}", handler: { directory: { path: "./public" } }, options: { auth: false } },

];
