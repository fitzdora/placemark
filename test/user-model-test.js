import { assert } from "chai";
import { db } from "../src/models/db.js";
import { maggie, testUsers } from "./fixtures.js";

suite("User API tests", () => {

    setup(async () => {
        db.init();
        await db.userStore.deleteAll();
    });

    test("create a user", async () => {
        const newUser = await db.userStore.addUser(maggie);
        assert.deepEqual(maggie, newUser)
    });

    test("delete all users", async () => {
        for(let i = 0; i < testUsers.length; i += 1){
            // eslint-disable-next-line no-await-in-loop
            await db.userStore.addUser(testUsers[i]);
        }
        let returnedUsers = await db.userStore.getAllUsers();
        assert.equal(returnedUsers.length, 3);
        await db.userStore.deleteAll();
        returnedUsers = await db.userStore.getAllUsers();
        assert.equal(returnedUsers.length, 0);
    });
});
