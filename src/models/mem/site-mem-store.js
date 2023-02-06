import { v4 } from "uuid";

let sites = [];

export const siteMemStore = {
 async getAllSites() {
    return sites;
 },
 async addSite(site) {
   site._id = v4();
   sites.push(site);
   return site;
 },
 async getSiteById(id){
   return sites.find((site) => site._id === id);
 },
 async deleteSiteById(id) {
   const index = sites.findIndex((site) => site._id ===id);
   sites.splice(index, 1);
 },
 async deleteAllSites() {
   sites = [];
 },
};