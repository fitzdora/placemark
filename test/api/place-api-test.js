import { assert } from "chai";
import { assertSubset } from "../test-utils.js";
import { placemarkService } from "./placemark-services.js";
import { maggie, fota, testSites, testPlaces, castle } from "../fixtures.js";

suite("Place API tests", () => {
    let user = null;
    let fotahouse = null; 
    // not 100% clear what this refers too as not a in the fixture list exactly as a const. 
    
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

    });

    test("Delete a place", async () => {

    });

    test("test denormalised site", async () => {

    });
});