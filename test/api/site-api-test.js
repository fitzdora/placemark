import { EventEmitter } from "events";
import { assert } from "chai";
import { placemarkService } from "./placemark-services.js";
import { assertSubset } from "../test-utils.js";
import { maggie, fota, testSites } from "../fixtures.js"

EventEmitter.setMaxListeners(25);
suite("Site Api Tests", () => {

    let user = null;
    // let site = null;

    setup(async () => {
        await placemarkService.deleteAllSites();
        await placemarkService.deleteAllUsers();
        user = await placemarkService.createUser(maggie);
        fota.userid = user._id;
    });

    teardown( async () => {});

    test("Create a Site", async() => {
        const returnedSite = await placemarkService.createSite(fota);
        assert.isNotNull(returnedSite);
        assertSubset(fota, returnedSite);
    });

    test("Delete a Site", async() => {
        const site = await placemarkService.createSite(fota);
        const response = await placemarkService.deleteSite(site._id);
        assert.equal(response.status, 204);
        try {
            const returnedSite = await placemarkService.getSite(site.id);
            assert.fail("Should not return a response");
        } catch (error) {
            assert(error.response.data.message === "No Site with this id", "Incorrect Response Message");
        }
    });
    test("Create multiple Sites", async() => {
        for (let i = 0; i < testSites.length; i += 1) {
            testSites[i].userid = user._id;
            // eslint-disable-next-line no-await-in-loop
            await placemarkService.createSite(testSites[i]);
        }
        let returnedSites = await placemarkService.getAllSites();
        assert.equal(returnedSites.length, testSites.length);
        await placemarkService.deleteAllSites();
        returnedSites = await placemarkService.getAllSites();
        assert.equal(returnedSites.length, 0);
    });
    test("Remove non-existant Sites", async() => {
        try {
            const response = await placemarkService.deleteSite("not an id");
            assert.fail("Should not return a response");
        } catch (error) {
            assert(error.response.data.message === "No Site with this id", "Incorrect response Message");
        }
    });
});