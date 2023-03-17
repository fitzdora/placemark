import Joi from "joi";

export const UserSpec = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

export const UserCredentialsSpec = {
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

export const PlaceSpec = {
  title: Joi.string().required(),
  category: Joi.string().required(),
  location: Joi.string().required(),
  description: Joi.string().required(),
  weather: Joi.string().required(),
  images: Joi.string().required(),
  // location: Joi.number().allow("").optional(),

};

export const SiteSpec = {
  title: Joi.string().required(),
};
