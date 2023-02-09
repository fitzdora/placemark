import { userMemStore } from "./mem/user-mem-store.js";
import { siteMemStore } from "./mem/site-mem-store.js";
import { placeMemStore } from "./mem/place-mem-store.js";


export const db = {
 userStore: null,
 siteStore: null,
 placeStore: null,

 init() {
    this.userStore = userMemStore;
    this.siteStore = siteMemStore;
    this.placeStore = placeMemStore;
 },
};