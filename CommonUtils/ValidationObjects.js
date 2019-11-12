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

const amenitiesSchema = Joi.object({
    amenityName: Joi.string().max(30).required()    
})

module.exports = {
    locationSchema,
    amenitiesSchema,
    buildingSchema
};

