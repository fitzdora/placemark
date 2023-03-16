import axios from "axios";
import { serviceUrl } from "../fixtures.js";


export const placemarkService = {
    placemarkUrl: serviceUrl,

    async createUser(user) {
        const res = await axios.post(`${this.placemarkUrl}/api/users`, user);
        return res.data;
    },

    async getUser(id) {
        const res = await axios.get(`${this.placemarkUrl}/api/users/${id}`);
        return res.data;
    },

    async getAllUsers() {
        const res = await axios.get(`${this.placemarkUrl}/api/users`);
        return res.data;
    },

    async deleteAllUsers() {
        const res = await axios.delete(`${this.placemarkUrl}/api/users`);
        return res.data;
    },

    async createSite(site) {
        const res = await axios.post(`${this.placemarkUrl}/api/sites`, site);
        return res.data;
    },

    async deleteAllSites() {
        const response = await axios.delete(`${this.placemarkUrl}/api/sites`);
        return response.data;
    },

    async deleteSite(id) {
        const response = await axios.delete(`${this.placemarkUrl}/api/sites/${id}`);
        return response.data;
    },

    async getAllSites() {
        const res = await axios.get(`${this.placemarkUrl}/api/sites`);
        return res.data;
    },

    async getSite(id) {
        const res = await axios.get(`${this.placemarkUrl}/api/sites/${id}`);
        return res.data;
    },
};
