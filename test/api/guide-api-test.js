import { assert } from "chai";
import { placemarkService } from "./placemark-services.js";
import { assertSubset } from "../test-utils.js";
import { maggie, homer, testGuides, maggieCredentials } from "../fixtures.js"


suite("Guide Api Tests", () => {

    let user = null;

    setup(async () => {
        placemarkService.clearAuth();
        user = await placemarkService.createUser(maggie);
        await placemarkService.authenticate(maggieCredentials);
        await placemarkService.deleteAllGuides();
       
        user = await placemarkService.createUser(maggie);
        await placemarkService.authenticate(maggieCredentials);
        fota.userid = user._id;
    });

    teardown( async () => {
        await placemarkService.deleteAllUsers();
    });
    

    test("create a Guide", async () => {
        const newGuide = await placemarkService.createGuide(homer);
        assertSubset(homer, newGuide);
        assert.isDefined(newGuide._id);
      });
    });