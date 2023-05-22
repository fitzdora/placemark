// Memory store data
import { userMemStore } from "./mem/user-mem-store.js";
import { siteMemStore } from "./mem/site-mem-store.js";
import { placeMemStore } from "./mem/place-mem-store.js"; 
// Json store data
import { userJsonStore } from "./json/user-json-store.js";
import { siteJsonStore } from "./json/sites-json-store.js";
import { placeJsonStore } from "./json/place-json-store.js";
// Mongo store data
import { connectMongo } from "./mongo/connect.js";
import { userMongoStore } from "./mongo/user-mongo-store.js";
import { siteMongoStore } from "./mongo/site-mongo-store.js";
import { placeMongoStore } from "./mongo/place-mongo-store.js";
import { addsiteMongoStore } from "./mongo/addsite-mongo-store.js";
import { guideMongoStore } from "./mongo/guide-mongo-store.js";

export const db = {
 userStore: null,
 siteStore: null,
 placeStore: null,
 addSiteStore: null,
 guideStore: null,

 init(storeType) {
   switch (storeType){
      case "json":
         this.userStore = userJsonStore;
         this.siteStore = siteJsonStore;
         this.placeStore = placeJsonStore;
         break;
      case "mongo":
         this.userStore = userMongoStore;
         this.siteStore = siteMongoStore;
         this.placeStore = placeMongoStore;
         this.addSiteStore = addsiteMongoStore;
         this.guideStore = guideMongoStore;
         connectMongo();
         break;
      default:
         this.userStore = userMemStore;
         this.siteStore = siteMemStore;
         this.placeStore = placeMemStore;
         
   }
 },
};