import { userMemStore } from "./mem/user-mem-store.js";
import { siteMemStore } from "./mem/site-mem-store.js";

export const db = {
 userStore: null,
 siteStore: null,

 init() {
    this.userStore = userMemStore;
    this.siteStore = siteMemStore;

 },
};