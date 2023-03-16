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
};
