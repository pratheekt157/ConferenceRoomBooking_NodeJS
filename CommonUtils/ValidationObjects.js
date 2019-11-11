const Joi = require("@hapi/joi");

const locationSchema = Joi.object({
    locationName: Joi.string().max(30).required()
})

module.exports = {
    locationSchema
}