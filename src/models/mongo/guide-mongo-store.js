import { Guide } from "./guide.js";

export const guideMongoStore = {
  async getAllGuides() {
    const guides = await Guide.find().lean();
    return guides;
  },

  async findById(id) {
    const guide = await Guide.findOne({ _id: id }).lean();
    return guide;
  },

  async findByName(lastname, firstname) {
    const guide = await Guide.findOne({
      lastname,
      firstname,
    });
    return guide;
  },
};
