import { addSite } from "./addSite.js";

export const addsiteMongoStore = {
    async getAlladdSites() {
        const addSites = await addSite.find().populate("addSite").populate("guide").lean();
        return addSites;
    },

    async getAddSitesByGuide(id) {
        const addSites = await addSite.find({ guide: id });
        return addSites;
    },

    async addSite(site, guide){
    const newAddSite = new addSite({
        site: site._id,
        guide: guide._id,
    });
    await newAddSite.save();
    return newAddSite;
},

async deleteAll() {
    await addSite.deleteMany({});
},

};