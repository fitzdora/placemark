import { accountsController } from "./controllers/accounts-controller.js";
import { dashboardController } from "./controllers/dashboard-controller.js";

export const webRoutes = [

{ method: "GET", path: "/", config: accountsController.index },
{ method: "GET", path: "/signup", config: accountsController.showSignup },
{ method: "GET", path: "/login", config: accountsController.showLogin },
{ method: "GET", path: "/logut", config: accountsController.logout },
{ method: "POST", path: "/register", config: accountsController.signup },
{ method: "POST", path: "/authenticate", config: accountsController.login },    
    
{ method: "GET", path: "/dashboard", config: dashboardController.index },
{ method: "POST", path: "/dashboard/addsite", config: dashboardController.addSite },

];
