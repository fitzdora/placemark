/* import { userMemStore } from "./mem/user-mem-store.js";
import { siteMemStore } from "./mem/site-mem-store.js";
import { placeMemStore } from "./mem/place-mem-store.js"; */

import { userJsonStore } from "./json/user-json-store.js";
import { siteJsonStore } from "./json/sites-json-store.js";
import { placeJsonStore } from "./json/place-json-store.js";

export const db = {
 userStore: null,
 siteStore: null,
 placeStore: null,

 init() {
    this.userStore = userJsonStore;
    this.siteStore = siteJsonStore;
    this.placeStore = placeJsonStore;
 },
};