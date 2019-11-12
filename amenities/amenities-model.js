const mongoose = require("mongoose");
const softDelete = require("mongoosejs-soft-delete");
const amenitiesSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  amenityName: {
    type: String,
    unique: true,
    required: true
  }
});

amenitiesSchema.plugin(softDelete);
module.exports = mongoose.model("Amenities", amenitiesSchema);
