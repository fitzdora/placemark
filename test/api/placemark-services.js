import axios from "axios";
import { serviceUrl } from "../fixtures.js";


export const placemarkService = {
    placemarkUrl: serviceUrl,

    async createUser(user) {
        const res = await axios.post(`${this.placemarkUrl}/api/users`, user);

    }
}
