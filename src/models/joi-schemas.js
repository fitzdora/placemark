import Joi from "joi";

export const IdSpec = Joi.alternatives().try(Joi.string(), Joi.object()).description("a valid ID");

export const UserCredentialsSpec = Joi.object()
.keys({
  email: Joi.string().email().example("homer@simpson.com").required(),
  password: Joi.string().example("secret").required(),
}).label("UserCredentials");

export const UserSpec = UserCredentialsSpec.keys({
  firstname: Joi.string().example("Homer").required(),
  lastname: Joi.string().example("Simpson").required(),
}).label("UserDetails");

export const UserSpecPlus = UserSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("UserDetailsPlus");

export const UserArray = Joi.array().items(UserSpecPlus).label("UserArray");

export const PlaceSpec = Joi.object() 
.keys({
  title: Joi.string().required().example("Barryscourt Castle"),
  category: Joi.string().required().example("castle"),
  location: Joi.string().required().example("Midleton"),
  description: Joi.string().required().example("A Norman Castle"),
  weather: Joi.string().required().example("Fair"),
  images: Joi.string().required().example("x"),
  // location: Joi.number().allow("").optional(),
  siteid: IdSpec,
}).label("Place");

export const PlaceSpecPlus = PlaceSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("PlacePlus");

export const PlaceArraySpec = Joi.array().items(PlaceSpecPlus).label("PlaceArray");

export const SiteSpec = Joi.object ()
.keys({
  title: Joi.string().required().example("Fota House"),
  userid: IdSpec,
  places: PlaceArraySpec,
}).label("Site");

export const SiteSpecPlus = SiteSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("SitePlus");

export const SiteArraySpec = Joi.array().items(SiteSpecPlus).label("SiteArray");