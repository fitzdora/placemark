import Mongoose from "mongoose";

const { Schema } = Mongoose;

const guideSchema = Schema({
  firstName: String,
  lastName: String,
  office: String,
});

export const Guide = Mongoose.model("Guide", guideSchema);
