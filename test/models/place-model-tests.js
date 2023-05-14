import { assert } from "chai";
import { db } from "../../src/models/db.js";
import { testSites, testPlaces, fota, castle, testUsers, garden } from "../fixtures.js";
import { assertSubset } from "../test-utils.js";

suite("Place Model tests", () => {

    let gardenList = null;

    setup(async () => {
        db.init("mongo");
        await db.siteStore.deleteAllSites();
        await db.placeStore.deleteAllPlaces();
        gardenList = await db.siteStore.addSite(garden);
        for (let i = 0; i < testPlaces.length; i += 1) {
            // eslint-disable-next-line no-await-in-loop
            testPlaces[i] = await db.placeStore.addPlace(gardenList._id, testPlaces[i]);
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

    test("delete all places", async () => {
        const places = await db.placeStore.getAllPlaces();
        assert.equal(testPlaces.length, places.length);
        await db.placeStore.deleteAllPlaces();
        const newPlaces = await db.placeStore.getAllPlaces();
        assert.equal(0, newPlaces.length);

    });

    test("get a place - success", async () => {
        const fotaList = await db.siteStore.addSite(fota);
        const place = await db.placeStore.addPlace(fotaList._id, castle)
        const newPlace = await db.placeStore.getPlaceById(place._id);
        assertSubset (castle, newPlace);
    });

    test("delete One Place - success", async () => {
        await db.placeStore.deletePlace(testPlaces[0]._id);
        const places = await db.placeStore.getAllPlaces();
        assert.equal(places.length, testPlaces.length - 1);
        const deletedPlace = await db.placeStore.getPlaceById(testPlaces[0]._id);
        assert.isNull(deletedPlace);
    });

    test("get a place - bad params", async () => {
        assert.isNull(await db.placeStore.getPlaceById(""));
        assert.isNull(await db.placeStore.getPlaceById());
    });

    test("delete one place - fail", async () => {
        await db.placeStore.deletePlace("bad-id");
        const places = await db.placeStore.getAllPlaces();
        assert.equal(places.length, testPlaces.length);
    });
});