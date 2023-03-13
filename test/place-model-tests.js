import { assert } from "chai";
import { db } from "../src/models/db.js";
import { testSites, testPlaces, fota, castle, testUsers, garden } from "./fixtures.js";
import { assertSubset } from "./test-utils.js";

suite("Track Model tests", () => {

    let gardenList = null;

    setup(async () => {
        db.init("mongo");
        await db.siteStore.deleteAllSites();
        await db.placeStore.deleteAllPlaces();
        gardenList = await db.siteStore.addSite(garden);
        for (let i = 0; i < testPlaces.length; i += 1){
            // eslint-disable-next-line no-await-in-loop
            testPlaces[i] = await db.placeStore.addPlace(gardenList._id);
        }
    });

    test("create single place", async() => {
        const fotaList = await db.siteStore.addSite(fota);
        const place = await db.placeStore.addPlace(fotaList._id, castle)
        assert.isNotNull(place._id);
        assertSubset(castle, place);
    });

    test("get multiple places", async() => {
        const places = await db.placeStore.getPlacesBySiteId(gardenList._id);
        assert.equal(places.length, testPlaces.length)
    });

});