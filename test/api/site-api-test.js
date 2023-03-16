import { EventEmitter } from "events";
import { assert } from "chai";
import { placemarkService } from "./placemark-services.js";
import { assertSubset } from "../test-utils.js";
import { maggie, fota, testSites } from "../fixtures.js"

EventEmitter.setMaxListeners(25);

suite("Site Api Tests", () => {

    let user = null;

    setup(async () => {
        await placemarkService.deleteAllSites();
        await placemarkService.deleteAllUsers();
        user = await placemarkService.createUser(maggie);
        fota.userid = user._id;

    });

    teardown( async () => {});

    test("Create a Site", async() => {

    });

    test("Delete a Site", async() => {

    });
    test("Create multiple Sites", async() => {

    });
    test("Remove non-existant Sites", async() => {

    });
});