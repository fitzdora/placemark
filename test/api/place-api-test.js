import { assert } from "chai";
import { assertSubset } from "../test-utils.js";
import { placemarkService } from "./placemark-services.js";
import { maggie, fota, testSites, testPlaces, castle } from "../fixtures.js";

suite("Place API tests", () => {
    let user = null;
    let fotahouse = null; 
    // not 100% clear what this refers too as beethovensonantas not a const in the fixture list on playtime 
    
    setup(async () => {
        await placemarkService.deleteAllSites();
        await placemarkService.deleteAllUsers();
        await placemarkService.deleteAllPlaces();
        user = await placemarkService.createUser(maggie);
        fota.userid = user._id;
        fotahouse = await placemarkService.createSite(fota);
    });

    teardown(async () => {});

    test("create a place", async () => {
        const returnedPlace = await placemarkService.createPlace(fotahouse);
        assertSubset(castle, returnedPlace)

    });

    test("create multiple places", async () => {
        for (let i = 0; i < testPlaces.length; i += 1) {
            // eslint-disable-next-line no-await-in-loop
            await placemarkService.createPlace(fotahouse._id, testPlaces[i]);
        }
        const returnedPlaces = await placemarkService.getAllPlaces();
        assert.equal(returnedPlaces.length, testPlaces.length);
        for(let i = 0; i < returnedPlaces.length; i += 1) {
            // eslint-disable-next-line no-await-in-loop
            const place = await placemarkService.getPlace(returnedPlaces[i]._id);
            assertSubset(place, returnedPlaces[i]);
        }
    });

    test("Delete a place", async () => {
        

    });

    test("test denormalised site", async () => {

    });
});