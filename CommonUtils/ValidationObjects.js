const Joi = require("@hapi/joi");

const locationSchema = Joi.object({
  locationName: Joi.string()
    .max(30)
    .required()
});

const buildingSchema = Joi.object({
  buildingName: Joi.string()
    .max(30)
    .required(),
  locationId: Joi.string().required()
});

module.exports = {
  locationSchema,
  buildingSchema
};
