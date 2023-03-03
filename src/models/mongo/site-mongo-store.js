import { Site } from "./site.js";
import { placeMongoStore } from "./place-mongo-store.js";

export const siteMongoStore = {
    async getAllSites() {
        const sites = await Site.find().lean();
        return sites;
    },

    async getSiteById(id) {
        if(id) {
            const site = await Site.findOne({ _id: id }).lean();
            if (site) {
                site.places = await placeMongoStore.getPlacesBySiteId(site._id);
            }
            return site;
        }
        return null;
    },

    async addSite(site) {
        const newSite = new Site(site);
        const siteObj = await newSite.save();
        return this.getSiteById(siteObj._id);
    },

    async getUserSite(id) {
        const site = await Site.find({ userid: id }).lean();
        return site;
    },

    async deleteSiteById(id) {
        try {
            await Site.deleteOne({ _id: id });
        } catch (error) {
            console.log("bad id");
        }
    },

    async deleteAllSites() {
        await Site.deleteMany({});
    }
};