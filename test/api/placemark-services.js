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
        try {
        const res = await axios.get(`${this.placemarkUrl}/api/users`);
        return res.data;
    } catch (e) {
        return null;
    }
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
        return response;
    },

    async getAllSites() {
        const res = await axios.get(`${this.placemarkUrl}/api/sites`);
        return res.data;
    },

    async getSite(id) {
        const res = await axios.get(`${this.placemarkUrl}/api/sites/${id}`);
        return res.data;
    },

    async getAllPlaces(){
        const res = await axios.get(`${this.placemarkUrl}/api/places`);
        return res.data;

    },

    async createPlace(id, place) {
        const res = await axios.post(`${this.placemarkUrl}/api/sites/${id}/places`, place);
        return res.data;
    },

    async deleteAllPlaces(){
        const res = await axios.delete(`${this.placemarkUrl}/api/places`);
        return res.data
    },

    async getPlace(id) {
        const res = await axios.get(`${this.placemarkUrl}/api/places/${id}`);
        return res.data;
    },

    async deletePlace(id) {
        const res = await axios.delete(`${this.placemarkUrl}/api/places/${id}`);
        return res.data;
    },

    async authenticate (user) {
        const response = await axios.post(`${this.placemarkUrl}/api/users/authenticate`, user);
        axios.defaults.headers.common["Authorization"] = "Bearer" + response.data.token;
        return response.data;
    },

    async clearAuth() {
        axios.defaults.headers.common["Authorization"] = "";
    }

  
};
