import Mongoose from "mongoose";

const { Schema } = Mongoose;

const placeSchema = new Schema ({
    title: String,
    category: String,
    location: String,
    description: String,
    weather: String, // this is only a placemarker and will need to be adjusted
    images: String, // this is only a placemarker and will need to be adjusted 
    siteid: {
        type: Schema.Types.ObjectId,
        ref: "Site",
    },
});

export const Place = Mongoose.model("Place", placeSchema);

