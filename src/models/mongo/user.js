import Mongoose from "mongoose";

const { Schema } = Mongoose;

const userSchema = new Schema ({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
});

export const User = Mongoose.model("User", userSchema);