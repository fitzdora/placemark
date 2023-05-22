import Mongoose from "mongoose";

const { Schema } = Mongoose;

const addSiteSchema = new Schema ({
    siteid: {
        type: Schema.Types.ObjectId,
        ref: "Sites",
    },
    guideid: {
        type: Schema.Types.ObjectId,
        ref: "Guide",
    },    
});

export const addSite = Mongoose.model("addSite", addSiteSchema);