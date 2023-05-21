import * as dotenv from "dotenv";
import Mongoose from "mongoose";
import * as mongooseSeeder from "mais-mongoose-seeder";
import { seedData } from "./seed-data.js";


const seedlib = mongooseSeeder.default;

async function seed() {
    const seeder = seedlib(Mongoose);
    const dbData = await seeder.seed(seedData, {dropDatabase: false, dropCollections: true });
    console.log(dbData);
}

export function connectMongo() {
    dotenv.config();
    
    Mongoose.set("strictQuery", true);
    Mongoose.connect(process.env.db);
    const db = Mongoose.connection;

    db.on("error", (err) => {
        console.log(`database connection error: ${err}`);
    });

    db.on("disconnected", () => {
        console.log("database disconnected");
    });

    db.once("open", function () {
        console.log(`database connected to ${this.name} on ${this.host}`);
        seed();
    });
}