import { v4 } from "uuid";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import { placeJsonStore } from "./place-json-store.js";

const db = new Low(new JSONFile("./src/models/json/sites.json"));
db.data = { sites: [] };

export const siteJsonStore = {
    async getAllSites() {
        await db.read();
        return db.data.sites;
    },

    async addSite(site) {
        await db.read();
        site._id = v4();
        db.data.sites.push(site);
        await db.write();
        return site;
    },
     
    async getSiteById(id) {
        await db.read();
        const list = db.data.sites.find((site) => site._id === id);
        list.places = await placeJsonStore.getPlacesBySiteId(list._id);
        return list;
    },

    async getUserSites(userid) {
        await db.read();
        return db.data.sites.filter((site) => site.userid === userid);
    },

    async deleteSiteById(id) {
        await db.read();
        const index = db.data.sites.findIndex((site) => site._id === id);
        db.data.sites.splice(index, 1);
        await db.write();
    },

    async deleteAllSites() {
        db.data.sites = [];
        await db.write();
    },
};