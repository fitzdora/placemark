import Mongoose from "mongoose";

const { Schema } = Mongoose;

const siteSchema = new Schema ({
    title: String,
    lat: String,
    lng: String,
    userid: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

export const Site = Mongoose.model("Site", siteSchema);