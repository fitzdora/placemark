import { userMemStore } from "./mem/user-mem-store";
import { siteMemStore } from "./mem/site-mem-store";

export const db = {
 userStore: null,
 siteStore: null,

 init() {
    this.userStore = userMemStore;
    this.siteStore = siteMemStore;

 },
};