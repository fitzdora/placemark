import { v4 } from "uuid";
import { placeMemStore } from "./place-mem-store.js"

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
    const list = sites.find((site) => site._id === id);
    list.places = await placeMemStore.getPlacesBySiteId(list._id);
    return list;
 },
//  setting specific users to site 
 async getUserSites(userid){
  return sites.filter((site) => site.userid === userid);
 },
 async deleteSiteById(id) {
   const index = sites.findIndex((site) => site._id ===id);
   sites.splice(index, 1);
 },
 async deleteAllSites() {
   sites = [];
 },
};